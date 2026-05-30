 

// --- CONFIGURATION ---
// À mettre à jour quand le Membre 1 déploie le contrat
const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS_HERE";
const SEPOLIA_CHAIN_ID = "0xaa36a7"; // 11155111 en hex

// ABI minimal — couvre les fonctions attendues du contrat Solidity
// À ajuster si le Membre 1 change les noms de fonctions
const ABI = [
  // Lecture
  "function getProposalsCount() view returns (uint256)",
  "function getProposal(uint256 id) view returns (string description, uint256 voteCount, uint256 deadline, bool closed)",
  "function hasVoted(address voter, uint256 proposalId) view returns (bool)",

  // Écriture
  "function vote(uint256 proposalId) external",
  "function createProposal(string calldata description, uint256 deadline) external",

  // Events
  "event Voted(address indexed voter, uint256 indexed proposalId)",
  "event ProposalCreated(uint256 indexed id, string description, uint256 deadline)",
];

// --- ÉTAT GLOBAL ---
let provider = null;
let signer = null;
let contract = null;
let userAddress = null;

// ============================================================
//  CONNEXION METAMASK
// ============================================================

async function connectWallet() {
  if (!window.ethereum) {
    showToast("MetaMask non détecté. Installe l'extension MetaMask.", "error");
    return;
  }

  try {
    setWalletButtonState("loading");

    // Demander accès au wallet
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    userAddress = accounts[0];

    // Vérifier le réseau
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== SEPOLIA_CHAIN_ID) {
      await switchToSepolia();
    }

    // Initialiser ethers
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    // Mettre à jour l'UI
    updateWalletUI(userAddress);
    setWalletButtonState("connected");
    showToast("Wallet connecté avec succès !", "success");

    // Charger les propositions
    await loadProposals();

    // Écouter les événements du contrat
    listenToContractEvents();

    // Écouter les changements de compte / réseau
    window.ethereum.on("accountsChanged", handleAccountChange);
    window.ethereum.on("chainChanged", () => window.location.reload());

  } catch (err) {
    setWalletButtonState("idle");
    handleError(err, "Connexion wallet");
  }
}

async function switchToSepolia() {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: SEPOLIA_CHAIN_ID }],
    });
  } catch (switchError) {
    // Le réseau n'existe pas encore dans MetaMask, on l'ajoute
    if (switchError.code === 4902) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: SEPOLIA_CHAIN_ID,
          chainName: "Sepolia Testnet",
          nativeCurrency: { name: "SepoliaETH", symbol: "SEP", decimals: 18 },
          rpcUrls: ["https://rpc.sepolia.org"],
          blockExplorerUrls: ["https://sepolia.etherscan.io"],
        }],
      });
    } else {
      throw switchError;
    }
  }
}

function handleAccountChange(accounts) {
  if (accounts.length === 0) {
    // Déconnexion
    userAddress = null;
    contract = null;
    signer = null;
    setWalletButtonState("idle");
    updateWalletUI(null);
    document.getElementById("proposals-list").innerHTML = "";
    showToast("Wallet déconnecté.", "info");
  } else {
    window.location.reload();
  }
}

// ============================================================
//  CHARGEMENT DES PROPOSITIONS
// ============================================================

async function loadProposals() {
  if (!contract) return;

  const container = document.getElementById("proposals-list");
  const emptyState = document.getElementById("empty-state");
  container.innerHTML = "";

  try {
    showLoadingSpinner(true);
    const count = await contract.getProposalsCount();
    const total = Number(count);

    if (total === 0) {
      emptyState.style.display = "block";
      showLoadingSpinner(false);
      return;
    }

    emptyState.style.display = "none";

    // Charger toutes les propositions en parallèle
    const promises = [];
    for (let i = 0; i < total; i++) {
      promises.push(loadSingleProposal(i));
    }
    const cards = await Promise.all(promises);
    cards.forEach((card) => {
      if (card) container.appendChild(card);
    });

  } catch (err) {
    handleError(err, "Chargement des propositions");
  } finally {
    showLoadingSpinner(false);
  }
}

async function loadSingleProposal(id) {
  try {
    const [description, voteCount, deadline, closed] = await contract.getProposal(id);
    const deadlineTs = Number(deadline);
    const now = Math.floor(Date.now() / 1000);
    const isOpen = !closed && deadlineTs > now;
    const voted = userAddress ? await contract.hasVoted(userAddress, id) : false;

    return buildProposalCard(id, description, Number(voteCount), deadlineTs, isOpen, voted);
  } catch {
    return null;
  }
}

// ============================================================
//  VOTE
// ============================================================

async function castVote(proposalId, button) {
  if (!contract || !userAddress) {
    showToast("Connecte ton wallet d'abord.", "error");
    return;
  }

  try {
    button.disabled = true;
    button.innerHTML = `<span class="btn-spinner"></span>En attente…`;

    // Envoyer la transaction
    const tx = await contract.vote(proposalId);
    button.innerHTML = `<span class="btn-spinner"></span>Confirmation…`;
    showToast("Transaction envoyée, attente de confirmation…", "info");

    // Attendre 1 confirmation
    await tx.wait(1);

    button.innerHTML = `✓ Voté`;
    button.classList.add("voted");
    showToast("Vote enregistré sur la blockchain !", "success");

    // Rafraîchir le compteur de cette proposition
    await refreshProposalCount(proposalId);

  } catch (err) {
    button.disabled = false;
    button.innerHTML = "Voter";
    handleError(err, "Vote");
  }
}

async function refreshProposalCount(id) {
  try {
    const [, voteCount] = await contract.getProposal(id);
    const counter = document.querySelector(`[data-proposal-id="${id}"] .vote-count`);
    if (counter) {
      counter.textContent = Number(voteCount);
      counter.classList.add("bump");
      setTimeout(() => counter.classList.remove("bump"), 400);
    }
  } catch {}
}

// ============================================================
//  CRÉER UNE PROPOSITION (owner seulement)
// ============================================================

async function createProposal() {
  const description = document.getElementById("proposal-description").value.trim();
  const deadlineInput = document.getElementById("proposal-deadline").value;

  if (!description) {
    showToast("La description est obligatoire.", "error");
    return;
  }
  if (!deadlineInput) {
    showToast("La date limite est obligatoire.", "error");
    return;
  }

  const deadlineTs = Math.floor(new Date(deadlineInput).getTime() / 1000);
  if (deadlineTs <= Math.floor(Date.now() / 1000)) {
    showToast("La date limite doit être dans le futur.", "error");
    return;
  }

  const btn = document.getElementById("create-btn");
  try {
    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>Envoi…`;

    const tx = await contract.createProposal(description, deadlineTs);
    showToast("Transaction envoyée…", "info");
    await tx.wait(1);

    showToast("Proposition créée !", "success");
    document.getElementById("proposal-description").value = "";
    document.getElementById("proposal-deadline").value = "";
    await loadProposals();

  } catch (err) {
    handleError(err, "Création proposition");
  } finally {
    btn.disabled = false;
    btn.innerHTML = "Créer la proposition";
  }
}

// ============================================================
//  EVENTS EN TEMPS RÉEL
// ============================================================

function listenToContractEvents() {
  if (!contract) return;

  contract.on("Voted", (voter, proposalId) => {
    if (voter.toLowerCase() !== userAddress?.toLowerCase()) {
      showToast(`Nouveau vote sur la proposition #${proposalId}`, "info");
      refreshProposalCount(Number(proposalId));
    }
  });

  contract.on("ProposalCreated", (id, description) => {
    showToast(`Nouvelle proposition : "${description}"`, "info");
    loadProposals();
  });
}

// ============================================================
//  CONSTRUCTION DES CARTES UI
// ============================================================

function buildProposalCard(id, description, voteCount, deadlineTs, isOpen, voted) {
  const card = document.createElement("div");
  card.className = `proposal-card ${isOpen ? "open" : "closed"}`;
  card.setAttribute("data-proposal-id", id);

  const deadlineDate = new Date(deadlineTs * 1000).toLocaleString("fr-FR");
  const timeLeft = getTimeLeft(deadlineTs);

  card.innerHTML = `
    <div class="card-header">
      <span class="proposal-id">#${id}</span>
      <span class="status-badge ${isOpen ? "badge-open" : "badge-closed"}">
        ${isOpen ? "● Ouvert" : "● Fermé"}
      </span>
    </div>
    <p class="proposal-description">${escapeHtml(description)}</p>
    <div class="card-meta">
      <div class="vote-info">
        <span class="vote-count" data-id="${id}">${voteCount}</span>
        <span class="vote-label">vote${voteCount !== 1 ? "s" : ""}</span>
      </div>
      <div class="deadline-info">
        <span class="deadline-icon">⏱</span>
        <span class="deadline-text">${isOpen ? timeLeft : "Clôturé le " + deadlineDate}</span>
      </div>
    </div>
    <div class="card-footer">
      ${buildVoteButton(id, isOpen, voted)}
    </div>
  `;

  return card;
}

function buildVoteButton(id, isOpen, voted) {
  if (!userAddress) {
    return `<button class="btn-vote btn-disabled" disabled>Connecte ton wallet</button>`;
  }
  if (voted) {
    return `<button class="btn-vote voted" disabled>✓ Déjà voté</button>`;
  }
  if (!isOpen) {
    return `<button class="btn-vote btn-disabled" disabled>Vote fermé</button>`;
  }
  return `<button class="btn-vote" onclick="castVote(${id}, this)">Voter</button>`;
}

// ============================================================
//  UTILITAIRES UI
// ============================================================

function updateWalletUI(address) {
  const walletInfo = document.getElementById("wallet-info");
  const connectBtn = document.getElementById("connect-btn");

  if (address) {
    const short = `${address.slice(0, 6)}…${address.slice(-4)}`;
    walletInfo.textContent = short;
    walletInfo.style.display = "block";
    connectBtn.textContent = "Connecté";
    connectBtn.classList.add("connected");
  } else {
    walletInfo.style.display = "none";
    connectBtn.textContent = "Connecter le wallet";
    connectBtn.classList.remove("connected");
  }
}

function setWalletButtonState(state) {
  const btn = document.getElementById("connect-btn");
  if (state === "loading") {
    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner"></span>Connexion…`;
  } else if (state === "connected") {
    btn.disabled = false;
  } else {
    btn.disabled = false;
    btn.innerHTML = "Connecter le wallet";
  }
}

function showLoadingSpinner(show) {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) spinner.style.display = show ? "flex" : "none";
}

let toastTimeout = null;
function showToast(message, type = "info") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast toast-${type} show`;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 4000);
}

function getTimeLeft(deadlineTs) {
  const now = Math.floor(Date.now() / 1000);
  const diff = deadlineTs - now;
  if (diff <= 0) return "Expiré";
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  if (h > 24) return `${Math.floor(h / 24)}j ${h % 24}h restants`;
  if (h > 0) return `${h}h ${m}min restants`;
  return `${m} min restantes`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function handleError(err, context) {
  console.error(`[${context}]`, err);
  let msg = "Une erreur est survenue.";
  if (err.code === 4001 || err.code === "ACTION_REJECTED") {
    msg = "Transaction refusée dans MetaMask.";
  } else if (err.message?.includes("already voted")) {
    msg = "Tu as déjà voté pour cette proposition.";
  } else if (err.message?.includes("closed") || err.message?.includes("deadline")) {
    msg = "Le vote est fermé (deadline dépassée).";
  } else if (err.message?.includes("not owner") || err.message?.includes("Ownable")) {
    msg = "Action réservée au propriétaire du contrat.";
  } else if (err.message) {
    msg = err.message.slice(0, 100);
  }
  showToast(`${context} : ${msg}`, "error");
}
