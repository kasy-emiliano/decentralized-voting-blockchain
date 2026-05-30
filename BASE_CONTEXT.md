# Base Context

## Project Name

decentralized-voting-blockchain

## Source

Derived from `README.md` in the current workspace.

## PDF Summaries

### S01_Introduction.pdf

#### 1. Introduction & Objectifs du module

##### 1.1 Pourquoi etudier la blockchain en 2026 ?

La blockchain est l'une des innovations technologiques les plus discutees de la derniere decennie, mais aussi l'une des plus mal comprises. Derriere le mot se cachent des concepts cryptographiques precis, une architecture distribuee rigoureuse, et un modele economique radicalement different de celui d'Internet.

Ce cours n'est pas un cours sur les cryptomonnaies. C'est un cours sur une technologie de registre distribue qui permet a des parties qui ne se font pas confiance de s'accorder sur un historique commun, sans avoir besoin d'un tiers de confiance central (ni banque, ni notaire, ni Etat).

Pourquoi c'est important pour vous :
En 2026, les competences blockchain sont demandees dans la finance, la logistique, la sante, le secteur public et bien sur le Web3. Les developpeurs Solidity sont parmi les mieux remuneres du marche. Ce cours vous donne les bases solides pour comprendre, evaluer et construire des systemes blockchain.

##### 1.2 Les 4 piliers de la blockchain

Avant d'entrer dans les details techniques, il est important de comprendre les quatre proprietes fondamentales qui definissent une blockchain digne de ce nom.

- Decentralisation : aucun acteur unique ne controle le systeme. Le registre est replique sur des centaines voire des milliers de noeuds independants a travers le monde. Si un noeud tombe, le reseau continue de fonctionner normalement.
- Immutabilite : une donnee ecrite sur la blockchain ne peut plus etre modifiee ou effacee. Chaque bloc est cryptographiquement lie au precedent. Alterer un bloc invalide toute la chaine qui suit.
- Transparence : sur une blockchain publique comme Bitcoin ou Ethereum, toutes les transactions sont visibles par tous, en temps reel. N'importe qui peut verifier l'historique complet depuis le bloc Genesis.
- Securite cryptographique : la blockchain utilise des primitives cryptographiques eprouvees (fonctions de hachage SHA-256, signatures ECDSA, arbres de Merkle) pour garantir l'integrite des donnees et l'authenticite des transactions.

##### 1.3 Ce que vous allez apprendre

Ce module est structure en 5 journees de 2 heures chacune, avec une progression logique :

- Jour 1 : fondements cryptographiques
- Jour 2 : architecture
- Jour 3 : comparaison des deux blockchains majeures
- Jour 4 : programmation de smart contracts
- Jour 5 : construction d'une application decentralisee complete

| Jour | Theme central | Competence visee | TP |
| --- | --- | --- | --- |
| J1 | Fondamentaux & Cryptographie | Comprendre et implementer SHA-256, ECDSA, adresses | Hachage Python & PoW |
| J2 | Architecture & Consensus | Decrire blocs, Merkle, PoW vs PoS | Mini-blockchain Python |
| J3 | Bitcoin & Ethereum | Distinguer UTXO / Comptes, Gas, EVM | MetaMask + Etherscan |
| J4 | Smart Contracts & Solidity | Ecrire, deployer, securiser un contrat | SimpleStorage + ERC-20 |
| J5 | DApps, DeFi, NFTs & Avenir | Connecter front-end a un contrat via ethers.js | Mini-DApp ethers.js |

##### 1.4 Modalites d'evaluation detaillees

| Modalite | Poids | Quand ? | Comment ? |
| --- | --- | --- | --- |
| QCM final | 50 % | Fin de la seance | Questions transversales sur tout le cours |
| Mini-projet GitHub | 50 % | J+14 apres la fin du module | Smart contract + DApp + README + video demo <= 3 min |

A propos du mini-projet :

- Le projet est en groupe de 5.
- Il sera verifie pour detecter les copies directes.
- L'utilisation d'outils d'IA (GitHub Copilot, Claude, ChatGPT) est autorisee a condition de comprendre et pouvoir expliquer chaque ligne de code rendue.

##### 1.6 Competences attendues en sortie

Competences techniques :

- Expliquer le fonctionnement du hachage SHA-256 et ses 4 proprietes fondamentales.
- Decrire la structure interne d'un bloc Bitcoin (en-tete + corps) et le mecanisme de chainage.
- Comparer le modele UTXO (Bitcoin) et le modele de comptes (Ethereum) avec des exemples concrets.
- Ecrire un smart contract Solidity complet avec variables d'etat, fonctions, modifiers et events.
- Deployer un contrat sur Sepolia depuis Remix IDE et interagir avec lui via MetaMask.
- Construire une DApp minimale en HTML/JS avec ethers.js qui lit et ecrit dans un contrat.

Competences analytiques :

- Lire et interpreter une transaction sur un block explorer (Etherscan).
- Identifier les vulnerabilites classiques dans un smart contract (reentrancy, overflow, tx.origin).
- Evaluer la pertinence d'une solution blockchain pour un cas d'usage donne.
- Distinguer Layer 1, Layer 2 et les differents mecanismes de consensus.

##### 1.7 Prerequis du module

Ce module ne necessite aucune connaissance prealable en blockchain. En revanche, les prerequis suivants sont importants pour profiter pleinement des travaux pratiques.

| Prerequis | Niveau attendu | Ou l'utilise-t-on ? |
| --- | --- | --- |
| Python de base | Notions : fonctions, boucles, listes, dict | TP1 (SHA-256), TP2 (mini-blockchain) |
| JavaScript de base | Notions : fonctions async/await, DOM, fetch | TP5 (DApp ethers.js) |
| Git & GitHub | Creer un repo, commit, push | Mini-projet (rendu GitHub) |
| Ligne de commande | Lancer des commandes Python, Node.js | Tous les TP |
| Algorithmique basique | Arbres, boucles, hash maps | J1, J2 (Merkle, hachage) |

Aucune connaissance blockchain requise : vous partirez de zero sur la blockchain. Chaque concept sera introduit progressivement, avec des analogies du monde reel, avant d'etre formalise mathematiquement.

##### 1.8 Ressources cles a avoir sous la main

Ces ressources sont gratuites et vous serviront pendant et apres le cours.

| Ressource | URL | Usage dans ce cours |
| --- | --- | --- |
| Remix IDE | remix.ethereum.org | J4 et J5 : ecriture et deploiement des contrats Solidity |
| Etherscan Sepolia | sepolia.etherscan.io | J3, J4, J5 : explorer les transactions et contrats |
| Blockchain Demo | andersbrownworth.com/blockchain | J1, J2 : comprendre visuellement le hachage et le chainage |
| Solidity Docs | docs.soliditylang.org | J4 : reference complete du langage Solidity |
| OpenZeppelin Docs | docs.openzeppelin.com | J4, J5 : contrats securises prets a l'emploi |
| ethers.js Docs v6 | docs.ethers.org | J5 : API complete pour interagir avec Ethereum |

### S02_Installation.pdf

#### 2. Guide d'installation complet

Ce guide vous accompagne pas a pas dans la mise en place de votre environnement de developpement blockchain. Prevoyez environ 30 a 45 minutes. Tous les outils listes sont gratuits, open-source, et disponibles sur Windows, macOS et Linux.

Regle de securite absolue - a lire avant tout :

- L'integralite des travaux pratiques de ce cours se deroule sur le reseau de test Sepolia.
- Le testnet Sepolia est un clone d'Ethereum ou les tokens (SEP) n'ont aucune valeur reelle.
- Ne creez jamais un wallet sur le mainnet (reseau principal) pour ce cours.
- Ne saisissez jamais de vrais fonds dans ce cadre.
- La phrase de recuperation MetaMask (12 mots) ne doit jamais etre partagee ni stockee en ligne.

##### 2.1 Vue d'ensemble des outils

Voici la liste complete des outils que vous allez installer, avec leur role precis dans le cours.

| Outil | Version min | Role dans ce cours | TP concernes |
| --- | --- | --- | --- |
| Python | 3.10+ | Implementer SHA-256, la mini-blockchain, le PoW | TP1, TP2 |
| Node.js LTS | 18+ | Executer ethers.js et les scripts de deploiement | TP5 |
| Git | 2.40+ | Versionner le code du mini-projet sur GitHub | Projet |
| VS Code | 1.85+ | Editeur de code principal, extensions Solidity et Python | Tous |
| MetaMask | Extension | Wallet navigateur, signer les transactions Sepolia | TP3, TP4, TP5 |
| Remix IDE | Web | Compiler et deployer les smart contracts Solidity | TP4 |

##### 2.2 Etape 1 - Python 3.10+

Installation :

Rendez-vous sur python.org et telechargez la derniere version stable (3.11 ou 3.12 recommandee). Lors de l'installation sous Windows, cochez imperativement la case "Add Python to PATH" pour que Python soit reconnu dans le terminal.

Verification :

```bash
# Dans un terminal (PowerShell, CMD, bash, zsh)
python --version
# Doit afficher : Python 3.10.x ou superieur

pip --version
# Doit afficher : pip 23.x ou superieur

# Si 'python' ne fonctionne pas sous Windows, essayez :
python3 --version
```

Installation des bibliotheques Python necessaires :

Aucune bibliotheque tierce n'est requise pour les TP Python. Nous utilisons uniquement `hashlib`, `json` et `time`, inclus dans la bibliotheque standard de Python.

En cas de probleme sous Windows :

Si `python` n'est pas reconnu, allez dans Parametres -> Systeme -> Variables d'environnement et ajoutez manuellement le chemin Python a la variable PATH.

Chemin type : `C:\Users\VotreNom\AppData\Local\Programs\Python\Python312\`

##### 2.3 Etape 2 - Node.js 18 LTS

Pourquoi Node.js ?

Node.js est necessaire pour le TP5 ou vous utiliserez ethers.js, la bibliotheque JavaScript officielle pour interagir avec Ethereum. Vous n'avez pas besoin de connaitre Node.js en profondeur, il est utilise ici pour executer des fichiers JavaScript.

Installation :

Rendez-vous sur nodejs.org et telechargez la version LTS (Long Term Support). Evitez les versions impaires (19, 21, 23), qui sont des versions "Current" moins stables.

```bash
node --version
# Doit afficher : v18.x.x ou superieur

npm --version
# Doit afficher : 9.x ou superieur

# npm = Node Package Manager
```

##### 2.4 Etape 3 - Git & GitHub

Pourquoi Git ?

Git est le systeme de controle de version utilise par la majorite des developpeurs. Vous en aurez besoin pour versionner votre mini-projet et le soumettre via GitHub.

```bash
# Installation (verification)
git --version
# Doit afficher : git version 2.40.x ou superieur

# Configuration initiale (a faire une seule fois)
git config --global user.name 'Votre Prenom Nom'
git config --global user.email 'votre@email.com'

# Commandes essentielles pour le mini-projet
git init
git add .
git commit -m 'Message'
git push origin main
```

Creer un compte GitHub :

Rendez-vous sur github.com et creez un compte gratuit si vous n'en avez pas. Vous utiliserez GitHub pour heberger le code de votre mini-projet.

##### 2.5 Etape 4 - VS Code & extensions

Pourquoi VS Code ?

Visual Studio Code est un editeur de code gratuit et open-source avec un ecosysteme d'extensions tres complet. Ce cours utilise 3 extensions principales.

Extensions a installer :

| Extension | Auteur | Role | TP |
| --- | --- | --- | --- |
| Solidity | Juan Blanco | Coloration syntaxique, autocompletion, detection d'erreurs Solidity | TP4 |
| Python | Microsoft | Debogage, autocompletion, linting Python | TP1, TP2 |
| Live Server | Ritwick Dey | Serveur HTTP local pour la DApp, rechargement automatique | TP5 |

Conseil de configuration VS Code :

Activez l'auto-sauvegarde : Fichier -> Preferences -> Parametres -> recherchez "Auto Save" -> selectionnez `afterDelay`.

##### 2.6 Etape 5 - MetaMask (critique)

Qu'est-ce que MetaMask ?

MetaMask est une extension de navigateur qui fait office de portefeuille (wallet) Ethereum. Il stocke vos cles privees localement sur votre ordinateur. C'est MetaMask qui permet a votre navigateur de signer des transactions et d'interagir avec des smart contracts deployes sur Ethereum.

Procedure d'installation detaillee :

1. Aller sur metamask.io dans Chrome ou Firefox, puis cliquer sur "Telecharger pour Chrome".
2. Cliquer "Ajouter l'extension". L'icone MetaMask (renard orange) apparait dans la barre d'outils.
3. Cliquer l'icone -> "Creer un nouveau wallet" -> accepter les conditions -> choisir un mot de passe fort.
4. MetaMask affiche la phrase de recuperation secrete de 12 mots. Noter cette phrase sur papier. Ne jamais la stocker en numerique.
5. Confirmer la phrase en la ressaisissant dans l'ordre.
6. Activer les testnets : icone -> Parametres -> Avance -> activer "Afficher les reseaux de test".
7. Dans le selecteur de reseau, choisir "Sepolia".

La regle des 12 mots :

La phrase de 12 mots (seed phrase) est la seule facon de recuperer le wallet en cas de perte d'acces. Quiconque possede ces 12 mots controle totalement le wallet.

##### 2.7 Etape 6 - Obtenir des ETH de test (Faucet)

Qu'est-ce qu'un faucet ?

Un faucet est un service web qui distribue gratuitement des tokens de test. Pour ce cours, vous avez besoin d'ETH Sepolia (SEP) pour payer les frais de transaction pendant les deploiements et tests.

Faucets disponibles :

| Faucet | URL | Montant/jour | Prerequis | Temps d'attente |
| --- | --- | --- | --- | --- |
| Alchemy Sepolia | sepoliafaucet.com | 0.5 SEP | Compte Alchemy gratuit (email requis) | 1-3 minutes |
| Google Cloud | cloud.google.com/.../sepolia | 0.1 SEP | Compte Google | 1-2 minutes |
| PoW Faucet | sepolia-faucet.pk910.de | Variable | Aucun compte requis | 5-15 minutes (minage) |

Procedure :

1. Copier votre adresse Ethereum depuis MetaMask (adresse 0x...).
2. Aller sur sepoliafaucet.com et creer un compte Alchemy gratuit.
3. Coller votre adresse puis cliquer "Send Me ETH".
4. Attendre 1 a 3 minutes puis actualiser MetaMask. Le solde doit afficher >= 0.5 SEP.

Si sepoliafaucet.com est indisponible, utilisez le faucet Google ou PoW. Objectif minimum : 0.2 SEP avant le Jour 3.

##### 2.8 Etape 7 - Remix IDE

Presentation :

Remix IDE est un environnement de developpement Solidity dans le navigateur (sans installation). Il integre compilation, deploiement, debogage, et interaction avec les contrats.

Prise en main rapide :

1. Aller sur remix.ethereum.org dans Chrome ou Firefox.
2. Dans File Explorer, creer un nouveau fichier : `MonContrat.sol`.
3. Dans Solidity Compiler, selectionner la version 0.8.20 puis cliquer Compile.
4. Dans Deploy & Run, choisir Environment -> Injected Provider - MetaMask.
5. Confirmer dans MetaMask et verifier que Sepolia est affiche dans Remix.

Les 3 onglets essentiels de Remix :

- File Explorer : gerer les fichiers `.sol`.
- Solidity Compiler : compiler le contrat et generer bytecode EVM + ABI.
- Deploy & Run : deployer sur le reseau choisi et interagir avec les fonctions.

##### 2.9 Check-list finale

Avant le Jour 1, verifiez les points suivants :

| Verification | Commande / Action | Resultat attendu |
| --- | --- | --- |
| Python installe | `python --version` | >= 3.10 |
| Node.js installe | `node --version` | >= 18 |
| Git configure | `git config user.name` | Votre nom affiche |
| VS Code ouvert | Ouvrir VS Code | Interface accessible |
| Extension Solidity | Extensions VS Code | Solidity de Juan Blanco visible |
| MetaMask installe | Icone dans navigateur | Icone renard orange visible |
| MetaMask sur Sepolia | Verifier le reseau | Affiche : Sepolia |
| Solde SEP > 0 | Ouvrir MetaMask | Affiche > 0 SEP |
| Remix charge | remix.ethereum.org | Interface Remix accessible |

### S03_J1_Fondamentaux.pdf

#### 3. Jour 1 - Fondamentaux & Cryptographie

Ce premier cours pose les fondations mathematiques et cryptographiques sur lesquelles repose toute la blockchain. Sans comprendre le hachage et la signature numerique, il est impossible de comprendre pourquoi la blockchain est securisee.

Objectifs du Jour 1 :

- Retracer les evenements cles qui ont conduit a l'invention de Bitcoin.
- Expliquer les 4 proprietes d'une fonction de hachage cryptographique (SHA-256).
- Calculer des hashes en Python et observer l'effet d'avalanche.
- Decrire la cryptographie asymetrique ECDSA et la derivation d'une adresse Ethereum.
- Comprendre le probleme fondamental resolu par Satoshi Nakamoto.

##### 3.1 Histoire : 30 ans de recherches avant Bitcoin

Bitcoin n'est pas sorti de nulle part en 2008. Il est la synthese de trois decennies de recherches en cryptographie, systemes distribues et monnaie numerique.

Les precurseurs (1991-2004) :

| Annee | Acteur | Contribution | Lien avec Bitcoin |
| --- | --- | --- | --- |
| 1991 | Haber & Stornetta | Premier systeme de chainage de documents horodates par hash | Concept fondateur du chainage de blocs |
| 1993 | Cynthia Dwork & Moni Naor | Preuve de travail computationnel pour lutter contre le spam | Precurseur du mecanisme PoW |
| 1997 | Adam Back | Hashcash : PoW applique aux emails | Bitcoin cite directement Hashcash |
| 1998 | Wei Dai | b-money : registre distribue pseudonyme, sans tiers de confiance | Cite par Satoshi dans le whitepaper |
| 2004 | Hal Finney | RPOW : tokens numeriques bases sur PoW, reutilisables | Premier utilisateur de Bitcoin en 2009 |

Le probleme fondamental : la double depense

Avant Bitcoin, une monnaie numerique sans autorite centrale se heurtait a la double depense. Un meme token numerique peut etre copie et envoye a plusieurs personnes. Sans registre de reference central, impossible de trancher le vrai proprietaire.

La solution Satoshi Nakamoto (2008)

Le 31 octobre 2008, Satoshi Nakamoto publie "Bitcoin: A Peer-to-Peer Electronic Cash System". La solution combine :

- Un registre public partage (blockchain)
- Un consensus par preuve de travail (PoW)
- La regle de la chaine la plus longue

Chronologie cle :

| Date | Evenement |
| --- | --- |
| 3 janvier 2009 | Bloc Genesis mine par Satoshi (50 BTC), avec le texte "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks" |
| 12 janvier 2009 | Premiere transaction Bitcoin : Satoshi envoie 10 BTC a Hal Finney |
| 2010 | Premiere transaction commerciale : 2 pizzas pour 10 000 BTC |
| 2011 | Disparition de Satoshi, responsabilite transmise a la communaute |
| 2015 | Lancement d'Ethereum par Vitalik Buterin |
| 2022 | The Merge (15 septembre) : Ethereum passe de PoW a PoS, consommation -99,95 % |

##### 3.2 Le hachage cryptographique - SHA-256

Definition :

Une fonction de hachage cryptographique prend une entree de taille arbitraire et produit une sortie de taille fixe (hash, digest, empreinte).

SHA-256 :

Secure Hash Algorithm 256 bits. Produit 256 bits = 32 octets = 64 caracteres hexadecimaux. Utilise par Bitcoin pour les blocs et transactions, et par Ethereum comme primitive de base.

Les 4 proprietes fondamentales :

1. Determinisme : meme entree, meme sortie.
2. Effet d'avalanche : une petite variation d'entree change radicalement la sortie.
3. Unidirectionnalite (resistance a la preimage) : impossible en pratique de retrouver x depuis H(x).
4. Resistance aux collisions : impossible en pratique de trouver x != y avec H(x) = H(y).

Exemple Python :

```python
import hashlib

def sha256(texte: str) -> str:
	return hashlib.sha256(texte.encode('utf-8')).hexdigest()

print(sha256('Bonjour'))
print(sha256('bonjour'))
```

Mesure de l'effet d'avalanche :

```python
def comparer(a, b):
	ha, hb = sha256(a), sha256(b)
	diff = sum(1 for x, y in zip(ha, hb) if x != y)
	print(f"{a!r} vs {b!r} -> {diff}/64 ({diff/64*100:.0f}%)")

comparer('Bonjour', 'bonjour')
comparer('1000', '1001')
```

Table de synthese securite :

| Propriete | Attaque ciblee | Complexite | Securite pratique |
| --- | --- | --- | --- |
| Determinisme | Previsibilite | N/A (propriete requise) | Garantie |
| Effet d'avalanche | Modification subtile | Changement massif de bits | Garantie |
| Unidirectionnalite | Preimage | 2^256 operations | Infaisable |
| Resistance collisions | Collision volontaire | 2^128 operations | Infaisable |

##### 3.3 Cryptographie asymetrique et ECDSA

Principe :

La cryptographie asymetrique repose sur une paire cle privee / cle publique mathematiquement liee.

ECDSA :

Bitcoin et Ethereum utilisent secp256k1. Les operations sont faciles dans le sens direct (multiplication de point), mais tres difficiles a inverser (logarithme discret elliptique).

Elements cles :

| Element | Nature | Comment l'obtenir | Propriete de securite |
| --- | --- | --- | --- |
| Cle privee | 256 bits aleatoires | Generee par le wallet | Ne jamais partager |
| Cle publique | Point sur secp256k1 | Cle privee x point generateur G | Partageable |
| Adresse Ethereum | 20 octets | Keccak256(cle publique)[12:] | Identifiant public |

Signature d'une transaction (simplifie) :

1. Construction de la transaction (destinataire, montant, gas, nonce).
2. Calcul du hash H(tx).
3. Signature avec la cle privee.
4. Diffusion de tx + signature au reseau.
5. Verification par les noeuds avec la cle publique.
6. Inclusion dans un bloc si valide.

Derivation d'une adresse Ethereum :

| Etape | Operation | Resultat |
| --- | --- | --- |
| 1 | Generer une cle privee (256 bits) | Secret de base |
| 2 | Deriver la cle publique via secp256k1 | Point (x, y) |
| 3 | Appliquer Keccak256 a la cle publique | Hash 32 octets |
| 4 | Prendre les 20 derniers octets | Adresse 0x... |

Regle d'or :

Votre cle privee (ou phrase de recuperation) donne un controle total sur les fonds. Pas de recours en cas de fuite.

##### 3.4 Application : le hachage dans la blockchain

Dans Bitcoin :

- Hash des blocs : SHA256(SHA256(en-tete))
- Preuve de travail : recherche d'un nonce produisant N zeros en tete
- Arbre de Merkle : aggregation des transactions en racine unique
- Adresses : derivees via SHA256 + RIPEMD160

Dans Ethereum :

- Keccak256 pour les adresses et les identifiants ABI
- TxHash pour identifier une transaction
- Event logs indexes par hash de signature d'evenement

##### 3.5 Resume & points cles du Jour 1

| Concept | A retenir absolument |
| --- | --- |
| SHA-256 | 64 hex, 256 bits, deterministe, unidirectionnel, effet avalanche, resistant aux collisions |
| Cle privee | 256 bits aleatoires, jamais partagee, signe les transactions |
| Cle publique | Derivee de la cle privee, sert a verifier les signatures |
| Adresse | Keccak256(cle publique) puis 20 derniers octets |
| Double depense | Probleme fondamental resolu sans tiers de confiance |
| Genesis Block | 3 janvier 2009, premier bloc Bitcoin, 50 BTC |

Pour approfondir avant le Jour 2 :

- Faire le TP1 complet.
- Tester la demo interactive : andersbrownworth.com/blockchain
- Lire les 2 premieres pages du whitepaper : bitcoin.org/bitcoin.pdf

### S04_J2_Architecture.pdf

#### 4. Jour 2 - Architecture & Consensus

Ce cours explore la structure interne d'une blockchain : comment les blocs sont construits, comment ils sont chaines, comment les transactions sont organisees grace aux arbres de Merkle, et comment des noeuds distribues, potentiellement malveillants, arrivent a s'accorder sur un historique commun.

Objectifs du Jour 2 :

- Decrire les champs d'un en-tete de bloc Bitcoin et leur role.
- Expliquer pourquoi modifier un bloc invalide toute la chaine qui suit.
- Construire un arbre de Merkle en Python et comprendre les Merkle Proofs.
- Comparer PoW et PoS sur la securite, l'energie et la vitesse.
- Implementer un mini Proof of Work et mesurer l'impact de la difficulte.

##### 4.1 Anatomie d'un bloc Bitcoin

Pourquoi cette structure ?

Un bloc Bitcoin doit etre a la fois verifiable independamment par n'importe quel noeud, et tres difficile a falsifier sans refaire un travail computationnel massif. Sa structure en deux parties (en-tete compact + corps variable) repond a cet objectif.

L'en-tete de bloc (80 octets fixes) :

| Champ | Taille | Role detaille |
| --- | --- | --- |
| version | 4 octets | Version du protocole Bitcoin, permet les evolutions progressives (soft forks) |
| prev_block_hash | 32 octets | SHA256(SHA256(en-tete du bloc precedent)), cree le chainage |
| merkle_root | 32 octets | Racine de l'arbre de Merkle de toutes les transactions |
| timestamp | 4 octets | Heure Unix approximative du minage |
| bits | 4 octets | Cible de difficulte encodee en format compact |
| nonce | 4 octets | Valeur variable utilisee par le minage |

Le corps du bloc (taille variable) :

| Element | Description |
| --- | --- |
| Transaction coinbase | Premiere transaction, cree les nouveaux BTC (recompense + frais) |
| Transactions ordinaires | Transactions du mempool selectionnees par le mineur |
| Taille max | Environ 4 MB avec SegWit |
| Temps moyen | Environ 10 minutes par bloc |

Pourquoi l'immutabilite est garantie ?

1. Modifier un bloc change son hash (effet d'avalanche).
2. Le bloc suivant reference l'ancien hash via `prev_block_hash`, qui devient invalide.
3. L'attaquant doit recalculer le PoW du bloc suivant.
4. Ce recalcul se propage de bloc en bloc jusqu'au plus recent.
5. Pendant ce temps, le reseau honnete continue d'ajouter des blocs.
6. L'attaquant ne peut generalement pas rattraper la chaine honnete.

Regle des 6 confirmations :

Attendre 6 blocs apres une transaction avant de la considerer comme finale est une pratique standard pour reduire fortement le risque de reorganisation malveillante.

##### 4.2 Arbres de Merkle

Probleme a resoudre :

Un bloc peut contenir des milliers de transactions. Un noeud leger doit pouvoir verifier l'appartenance d'une transaction sans telecharger tout le bloc.

Construction d'un arbre de Merkle (Python) :

```python
import hashlib

def h(data: str) -> str:
	# Version courte pour lisibilite
	return hashlib.sha256(data.encode()).hexdigest()[:16]

# Niveau 0: feuilles
txA = h('TxA: Alice -> Bob 0.5 BTC')
txB = h('TxB: Carol -> Dave 1.2 BTC')
txC = h('TxC: Eve -> Frank 0.3 BTC')
txD = h('TxD: Grace -> Hank 2.0 BTC')

# Niveau 1: noeuds intermediaires
h_AB = h(txA + txB)
h_CD = h(txC + txD)

# Niveau 2: racine
merkle_root = h(h_AB + h_CD)
print('Merkle Root:', merkle_root)
```

Merkle Proof (verification sans tout telecharger) :

```python
def verify_merkle_proof(tx_hash, proof, root):
	current = tx_hash
	for sibling, position in proof:
		if position == 'left':
			current = h(sibling + current)
		else:
			current = h(current + sibling)
	return current == root

proof_TxB = [(txA, 'left'), (h_CD, 'right')]
result = verify_merkle_proof(txB, proof_TxB, merkle_root)
print('TxB dans le bloc:', result)
```

Comparaison de cout :

| Approche | Donnees necessaires | Complexite |
| --- | --- | --- |
| Telecharger toutes les transactions | N transactions | O(N) |
| Merkle Proof | log2(N) hashes | O(log N) |

##### 4.3 Mecanismes de consensus

Probleme byzantin :

Dans un reseau distribue ou certains participants peuvent etre malveillants, comment obtenir un accord global sur l'etat valide ?

Proof of Work (PoW) - Bitcoin :

Le droit de proposer un bloc depend d'un travail computationnel reel. Plus la difficulte est elevee, plus la recherche de nonce est couteuse.

```python
import hashlib
import time

def miner_bloc(message: str, difficulte: int):
	cible = '0' * difficulte
	nonce = 0
	t0 = time.time()
	while True:
		candidat = f'{message}{nonce}'
		hash_val = hashlib.sha256(candidat.encode()).hexdigest()
		if hash_val.startswith(cible):
			return nonce, hash_val, time.time() - t0
		nonce += 1

for diff in range(1, 7):
	nonce, hval, duree = miner_bloc('Bloc #1000', diff)
	print(f'diff={diff} | nonce={nonce} | {hval[:24]}... | {duree:.3f}s')
```

Proof of Stake (PoS) - Ethereum :

Le droit de valider repose sur une mise economique (staking). En cas de fraude, une partie de la mise peut etre detruite (slashing).

Comparaison PoW vs PoS :

| Critere | Proof of Work (Bitcoin) | Proof of Stake (Ethereum) |
| --- | --- | --- |
| Securite via | Energie depensee | Mise economique |
| Penalite fraude | Cout energie + materiel | Slashing de la mise |
| Energie | Tres elevee | Tres faible |
| Temps de bloc | ~10 minutes | ~12 secondes |
| Finalite pratique | ~6 confirmations | Finalite economique plus rapide |

Autres mecanismes :

| Mecanisme | Exemple | Principe | Avantage |
| --- | --- | --- | --- |
| DPoS | EOS, TRON | Delegues elus valident les blocs | Tres rapide |
| PoA | Reseaux prives, Sepolia | Validateurs identifies | Efficace et peu energivore |
| PoH | Solana | Horodatage cryptographique de l'ordre | Tres haut debit |
| PBFT | Hyperledger Fabric | Vote byzantin entre noeuds identifies | Finalite immediate |

##### 4.4 Resume & points cles du Jour 2

| Concept | A retenir absolument |
| --- | --- |
| Structure d'un bloc | En-tete + corps transactionnel |
| Chainage | `prev_hash` lie chaque bloc au precedent |
| Merkle Root | Resume toutes les transactions du bloc |
| PoW | Securite par cout energetique |
| PoS | Securite par mise financiere + slashing |
| Regle de chaine valide | Chaine avec le plus de travail/poids economique |

Pour approfondir avant le Jour 3 :

- Faire le TP2 (mini-blockchain Python).
- Tester la demo interactive : andersbrownworth.com/blockchain.
- Consulter le bloc Genesis Bitcoin dans la documentation officielle.

### S05_J3_Bitcoin_Ethereum.pdf

#### 5. Jour 3 - Bitcoin & Ethereum

Apres les fondements cryptographiques et architecturaux, ce cours etudie en detail les deux blockchains majeures. Bitcoin et Ethereum ont des philosophies differentes qui se reflechent dans leurs choix techniques.

Objectifs du Jour 3 :

- Expliquer le modele UTXO de Bitcoin avec des exemples de transactions.
- Comprendre le halving et son impact sur l'offre de Bitcoin.
- Decrire les 2 types de comptes Ethereum (EOA et Contract Account).
- Calculer des frais Ethereum avec le modele EIP-1559.
- Creer un wallet MetaMask sur Sepolia et analyser une transaction sur Etherscan.

##### 5.1 Bitcoin - Le modele UTXO

Une idee contre-intuitive : pas de soldes

Bitcoin ne stocke pas des soldes de comptes. Il stocke des UTXO (Unspent Transaction Outputs), c'est-a-dire des sorties de transactions non depensees.

UTXO :

Chaque UTXO represente un montant de BTC associe a une adresse et verrouille par un script. Le depenser signifie le consommer en entree d'une nouvelle transaction, qui cree de nouveaux UTXO.

Analogie :

Comme des billets de banque. Vous depensez un billet entier et recevez de la monnaie.

Exemple complet :

Situation initiale : Alice possede deux UTXO de 0.5 BTC et 0.3 BTC.

Alice envoie 0.7 BTC a Bob :

- Inputs : 0.5 + 0.3 = 0.8 BTC
- Outputs : 0.7 BTC vers Bob, 0.095 BTC en monnaie vers Alice
- Frais mineur : 0.005 BTC

Apres transaction :

- Alice : 1 UTXO de 0.095 BTC
- Bob : 1 UTXO de 0.7 BTC
- Les anciens UTXO d'Alice sont marques depenses

Pourquoi ce modele est utile :

- Validation parallele possible si les tx n'utilisent pas les memes UTXO.
- Pas de double depense d'un meme UTXO.
- Confidentialite partielle via rotation d'adresses.
- Modele stateless : suivi de l'UTXO set non depense.

##### 5.2 Bitcoin - Concepts avances

Bitcoin Script :

Chaque UTXO est protege par un script de verrouillage. Pour le depenser, il faut fournir un script de deverrouillage valide.

| Type de script | Description | Utilisation |
| --- | --- | --- |
| P2PKH | Verrouille avec hash de cle publique | Transferts simples |
| P2SH | Conditions complexes (multisig, timelocks) | Comptes multi-signatures |
| P2WPKH | Variante SegWit de P2PKH | Transactions modernes |
| P2TR | Taproot, scripts complexes plus discrets | Smart contracts legers Bitcoin |

Le halving :

L'emission de Bitcoin est plafonnee a 21 millions. Tous les 210 000 blocs (environ 4 ans), la recompense de bloc est divisee par 2.

| Periode | Recompense bloc | Date approx. | Bitcoins crees |
| --- | --- | --- | --- |
| Genese -> 1er halving | 50 BTC | 2009-2012 | 10 500 000 BTC |
| 1er -> 2eme halving | 25 BTC | 2012-2016 | 5 250 000 BTC |
| 2eme -> 3eme halving | 12.5 BTC | 2016-2020 | 2 625 000 BTC |
| 3eme -> 4eme halving | 6.25 BTC | 2020-2024 | 1 312 500 BTC |
| 4eme -> 5eme halving | 3.125 BTC | 2024-2028 | 656 250 BTC |
| Vers 2140 | 0 BTC | ~2140 | Limite a 21M BTC |

Lightning Network :

Pour les paiements rapides, Lightning utilise des canaux hors chaine : ouverture on-chain, multiples paiements off-chain, fermeture on-chain.

##### 5.3 Ethereum - Une plateforme programmable

Difference fondamentale :

Bitcoin est optimise pour une monnaie numerique. Ethereum est une plateforme generale capable d'executer des programmes (smart contracts).

Modele de comptes Ethereum :

| Caracteristique | EOA (Externally Owned Account) | Contract Account |
| --- | --- | --- |
| Controle par | Cle privee (humain ou bot) | Code Solidity |
| Code embarque | Non | Oui |
| Peut initier une tx | Oui | Non |
| Solde ETH | Oui | Oui |
| Stockage persistant | Non | Oui |
| Nonce | Tx envoyees | Contrats crees |
| Exemple | MetaMask, Ledger | ERC-20, Uniswap, Aave |

##### 5.4 L'EVM et le Gas

EVM :

L'Ethereum Virtual Machine execute les smart contracts. Elle est Turing-complete, mais limitee en pratique par le gas.

Gas :

Le gas mesure le cout computationnel des operations EVM.

Exemples de couts :

| Operation | Opcode | Cout gas | Raison |
| --- | --- | --- | --- |
| Addition | ADD | 3 gas | Operation simple |
| Hash | SHA3 | 30 + 6/word | Cout cryptographique |
| Lecture stockage | SLOAD | 100-2100 gas | Acces stockage |
| Ecriture stockage | SSTORE | 2200-20000 gas | Ecriture persistante |
| Appel externe | CALL | >= 2600 gas | Communication inter-contrats |
| Transfert ETH | tx simple | 21000 gas | Minimum transaction |

Modele EIP-1559 :

Frais = gas_used x (base_fee + priority_fee)

```python
# Exemples EIP-1559
gas_used = 21_000
base_fee = 15
priority_fee = 2

frais_gwei = gas_used * (base_fee + priority_fee)
frais_eth = frais_gwei / 1e9
print(f'Transfer simple: {frais_gwei:,} gwei = {frais_eth:.6f} ETH')

gas_deploy = 500_000
frais_deploy = gas_deploy * (base_fee + priority_fee) / 1e9
print(f'Deploiement contrat: {frais_deploy:.5f} ETH')

gas_token = 65_000
frais_token = gas_token * (base_fee + priority_fee) / 1e9
print(f'Token transfer: {frais_token:.5f} ETH')
```

| Terme | Role | Qui le recoit |
| --- | --- | --- |
| base_fee | Frais de base ajuste automatiquement | Brule |
| priority_fee (tip) | Pourboire de priorisation | Validateur |
| gas_limit | Maximum autorise | Parametre de securite |
| gas_used | Consommation reelle | Determine par l'EVM |

##### 5.5 Les testnets - developper sans risque

Un testnet est une copie d'Ethereum sans valeur economique reelle, utile pour tester sans risque.

| Testnet | Mecanisme | Statut (2026) | Utilisation |
| --- | --- | --- | --- |
| Sepolia | PoS validateurs autorises | Actif, recommande | TP3, TP4, TP5 |
| Holesky | PoS grande echelle | Actif | Tests validateurs/staking |
| Goerli | PoS | Deprecie depuis 2024 | A eviter |
| Ropsten/Rinkeby/Kovan | PoW ou PoA | Fermes | A eviter |

Toujours verifier le reseau MetaMask avant toute operation : Sepolia pour ce cours.

##### 5.6 Resume & points cles du Jour 3

| Concept | A retenir absolument |
| --- | --- |
| UTXO | Bitcoin suit des sorties non depensees, pas des soldes |
| Halving | Recompense divisee par 2 tous les ~4 ans |
| EOA | Compte controle par cle privee, initie les tx |
| Contract Account | Compte programme execute via appels entrants |
| Gas | Cout EVM; frais selon EIP-1559 |
| Sepolia | Testnet Ethereum pour developper sans fonds reels |

### S06_J4_Solidity.pdf

#### 6. Jour 4 - Smart Contracts & Solidity

Ce cours est le coeur technique du module. Il couvre l'ecriture, la comprehension et la securisation des smart contracts en Solidity, le langage dominant de l'ecosysteme Ethereum.

Objectifs du Jour 4 :

- Definir un smart contract et ses caracteristiques uniques.
- Maitriser la syntaxe Solidity : types, fonctions, modifiers, events, mappings.
- Comprendre ERC-20 et l'implementer from scratch.
- Identifier 5 vulnerabilites majeures et leurs corrections.
- Deployer un contrat sur Sepolia depuis Remix IDE.

##### 6.1 Qu'est-ce qu'un smart contract ?

Le terme a ete propose par Nick Szabo en 1994. Ethereum l'a rendu concret en 2015.

Definition :

Un smart contract est un programme stocke sur la blockchain Ethereum, execute automatiquement par l'EVM lorsque des conditions predefinies sont remplies.

Proprietes cles :

- Immuable : le code ne change pas apres deploiement.
- Transparent : le code est publiquement verifiable.
- Deterministe : meme input, meme output.
- Trustless : pas d'intermediaire central necessaire.

Comparaison contrat traditionnel vs smart contract :

| Aspect | Contrat traditionnel | Smart Contract |
| --- | --- | --- |
| Execution | Manuelle | Automatique (EVM) |
| Intermediaire | Notaire, avocat, banque | Aucun |
| Cout | Honoraires | Gas |
| Delai | Jours/semaines | Secondes/minutes |
| Transparence | Privee | Publique |
| Contestation | Tribunal/arbitrage | Le code fait foi |
| Modification | Accord des parties | Immuable |
| Erreur | Recours possible | Risque irreversible |

Immutabilite :

Avantage : les regles ne peuvent plus etre modifiees arbitrairement.
Inconvenient : un bug reste en chaine, d'ou la necessite de tests et d'audits rigoureux avant mainnet.

##### 6.2 Cycle de vie d'un smart contract

| Etape | Action | Resultat | Outils |
| --- | --- | --- | --- |
| 1. Ecriture | Coder en Solidity (.sol) | Source lisible | VS Code + extension Solidity |
| 2. Compilation | Generer bytecode + ABI | Artefacts deployables | Remix, Hardhat, Foundry |
| 3. Tests | Lancer tests unitaires | Confiance fonctionnelle | Hardhat, Foundry |
| 4. Audit | Revue securite | Vulns detectees | Slither, MythX, OpenZeppelin Defender |
| 5. Deploiement | Transaction de creation | Adresse de contrat | Remix, Hardhat, Foundry |
| 6. Interaction | Appels read/write | Lecture ou changement d'etat | Remix, ethers.js, viem, wagmi |

##### 6.3 Syntaxe Solidity - Guide complet

Structure type :

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MonContrat {
	address public owner;
	uint256 private _compteur;
	bool public pause;
	mapping(address => uint256) public soldes;
	address[] public utilisateurs;

	event Incremente(address indexed par, uint256 valeur);
	event Transfert(address indexed from, address indexed to, uint256 amount);

	modifier seulOwner() {
		require(msg.sender == owner, 'Appelant non autorise');
		_;
	}

	modifier nonPause() {
		require(!pause, 'Contrat en pause');
		_;
	}

	constructor() {
		owner = msg.sender;
	}

	function incrementer() external seulOwner nonPause {
		_compteur++;
		emit Incremente(msg.sender, _compteur);
	}

	function lire() external view returns (uint256) {
		return _compteur;
	}

	function calculer(uint256 a, uint256 b) external pure returns (uint256) {
		return a + b;
	}
}
```

Types de donnees frequents :

| Type | Description | Exemple | Particularite |
| --- | --- | --- | --- |
| uint256 | Entier non signe 256 bits | uint256 n = 1000; | Standard pour montants |
| int256 | Entier signe | int256 t = -5; | Valeurs negatives |
| address | Adresse Ethereum | address owner; | Peut recevoir des ETH |
| bool | Booleen | bool ok = true; | true/false |
| bytes32 | 32 octets fixes | bytes32 h; | Efficace pour hashes |
| string | Chaine UTF-8 | string n = 'Token'; | Plus couteux en gas |
| mapping | Dictionnaire cle->valeur | mapping(address=>uint256) | Non iterable nativement |
| array | Tableau dynamique/fixe | uint256[] arr; | push(), length |

Visibilite des fonctions :

| Modificateur | Accessible depuis | Usage |
| --- | --- | --- |
| public | Interne + externe | API generale |
| external | Externe uniquement | Souvent plus efficace |
| internal | Contrat + heritage | Logique partagee |
| private | Contrat courant | Restriction maximale |

##### 6.4 Le standard ERC-20 en detail

ERC-20 definit l'interface minimale d'un token fongible compatible wallets/exchanges.

Interface :

| Fonction/Event | Signature | Description |
| --- | --- | --- |
| totalSupply | () view returns (uint256) | Offre totale |
| balanceOf | (address) view returns (uint256) | Solde d'un compte |
| transfer | (address,uint256) returns (bool) | Transfer direct |
| approve | (address,uint256) returns (bool) | Autorisation depense |
| allowance | (address,address) view returns (uint256) | Montant autorise |
| transferFrom | (address,address,uint256) returns (bool) | Depense deleguee |
| Transfer | event | Emis a chaque transfer |
| Approval | event | Emis a chaque approve |

Implementation minimale :

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CourseToken {
	string public constant name = 'CourseToken';
	string public constant symbol = 'CRT';
	uint8 public constant decimals = 18;

	uint256 public totalSupply;
	address public owner;
	mapping(address => uint256) public balanceOf;
	mapping(address => mapping(address => uint256)) public allowance;

	event Transfer(address indexed from, address indexed to, uint256 value);
	event Approval(address indexed owner, address indexed spender, uint256 value);

	constructor(uint256 supply) {
		owner = msg.sender;
		totalSupply = supply * 10**uint256(decimals);
		balanceOf[msg.sender] = totalSupply;
		emit Transfer(address(0), msg.sender, totalSupply);
	}

	function transfer(address to, uint256 amount) public returns (bool) {
		require(to != address(0), 'Adresse nulle interdite');
		require(balanceOf[msg.sender] >= amount, 'Solde insuffisant');
		balanceOf[msg.sender] -= amount;
		balanceOf[to] += amount;
		emit Transfer(msg.sender, to, amount);
		return true;
	}

	function approve(address spender, uint256 amount) public returns (bool) {
		allowance[msg.sender][spender] = amount;
		emit Approval(msg.sender, spender, amount);
		return true;
	}

	function transferFrom(address from, address to, uint256 amount) public returns (bool) {
		require(allowance[from][msg.sender] >= amount, 'Allowance depassee');
		require(balanceOf[from] >= amount, 'Solde insuffisant');
		allowance[from][msg.sender] -= amount;
		balanceOf[from] -= amount;
		balanceOf[to] += amount;
		emit Transfer(from, to, amount);
		return true;
	}
}
```

##### 6.5 Securite Solidity - 5 vulnerabilites majeures

1. Reentrancy :

Appel externe avant mise a jour d'etat, pouvant permettre des retraits multiples.

```solidity
// Vulnérable
function withdraw() external {
	uint256 amount = balances[msg.sender];
	require(amount > 0, 'Rien a retirer');
	(bool success,) = msg.sender.call{value: amount}('');
	require(success, 'Transfer echoue');
	balances[msg.sender] = 0;
}

// Corrige (CEI)
function withdraw() external {
	uint256 amount = balances[msg.sender];
	require(amount > 0, 'Rien a retirer');
	balances[msg.sender] = 0;
	(bool success,) = msg.sender.call{value: amount}('');
	require(success, 'Transfer echoue');
}
```

2. Integer overflow/underflow :

Avant Solidity 0.8, depassements silencieux. Depuis 0.8, revert automatique.

3. tx.origin vs msg.sender :

Toujours utiliser `msg.sender` pour l'authentification, pas `tx.origin`.

4. Front-running :

Transactions visibles dans le mempool, bots MEV peuvent prioriser leurs tx.

5. Timestamp manipulation :

`block.timestamp` peut etre legerement manipule, ne pas l'utiliser comme aleatoire critique.

Tableau de correction :

| Vulnerabilite | Impact potentiel | Correction recommandee |
| --- | --- | --- |
| Reentrancy | Vidage du contrat | CEI + ReentrancyGuard |
| Overflow | Montants manipules | Solidity >= 0.8 ou SafeMath |
| tx.origin | Phishing | Utiliser msg.sender |
| Front-running | Profit injuste | Commit-reveal, canaux prives |
| Timestamp | Aleatoire manipulable | Chainlink VRF, block.number selon cas |

##### 6.6 Resume & points cles du Jour 4

| Concept | A retenir absolument |
| --- | --- |
| Smart Contract | Code immuable sur blockchain, execute par l'EVM |
| Cycle de vie | Ecriture -> Compilation -> Tests -> Audit -> Deploiement -> Interaction |
| Solidity | Langage fortement type compile en bytecode EVM |
| ERC-20 | 6 fonctions + 2 events standard |
| CEI Pattern | Checks -> Effects -> Interactions contre reentrancy |
| OpenZeppelin | Bibliotheque auditee recommandee |

### S07_J5_DApps.pdf

#### 7. Jour 5 - DApps, DeFi, NFTs & Avenir

Ce dernier cours connecte tous les concepts precedents et donne une vision d'ensemble de l'ecosysteme blockchain en 2026 : applications decentralisees, DeFi, NFTs, scalabilite et regulation.

Objectifs du Jour 5 :

- Decrire les 5 couches d'architecture d'une DApp.
- Expliquer les mecanismes DeFi : AMM, prets collaterises, stablecoins.
- Distinguer ERC-721, ERC-1155 et Soulbound Tokens.
- Expliquer le trilemme blockchain et le role des L2.
- Identifier les cadres reglementaires MiCA et nLPD.

##### 7.1 Architecture d'une DApp

Qu'est-ce qu'une DApp ?

Une DApp (Decentralized Application) execute sa logique metier critique via des smart contracts sur blockchain plutot que via un backend centralise.

Difference avec une app web classique :

Dans une app centralisee, l'entreprise peut modifier les regles ou couper le service. Dans une DApp, les regles sont encodees dans des contrats immuables.

Les 5 couches d'une DApp :

| Couche | Technologie | Role | Exemple concret |
| --- | --- | --- | --- |
| Utilisateur / Wallet | MetaMask, WalletConnect, Coinbase Wallet | Signe les transactions, gere les cles privees | Clic utilisateur -> signature wallet |
| Front-end | React/Next.js + ethers.js ou viem | Interface et communication blockchain | Site visible par l'utilisateur |
| Smart Contracts | Solidity, Hardhat, OpenZeppelin | Logique metier immuable | Regles du protocole |
| Stockage decentralise | IPFS, Arweave | Fichiers lourds (images, videos, JSON) | Metadonnees NFT |
| Blockchain L1/L2 | Ethereum, Optimism, Arbitrum, zkSync | Settlement final et consensus | Enregistrement definitif |

Exemple DApp de vote decentralise :

- Front-end : affiche propositions + bouton Voter
- Wallet : signe vote(propositionId)
- Smart contract : verifie unicite du vote, enregistre, emit un event
- Blockchain : inclut la transaction dans un bloc
- Resultat : vote immuable et verifiable

##### 7.2 DeFi - Finance decentralisee

Definition :

La DeFi regroupe les protocoles financiers sur blockchains publiques, accessibles sans intermediaire. En 2026, la TVL depasse 100 milliards USD.

DEX et AMM :

Un DEX est un exchange decentralise. Le modele dominant est l'AMM.

AMM (Automated Market Maker) :

Prix determine par les reserves du pool. Modele simple Uniswap v2 : x * y = k.

Exemple swap :

Pool ETH/USDC avec 100 ETH et 300 000 USDC (k = 30 000 000). Si on retire 1 ETH (reste 99 ETH), alors USDC requis environ 30 000 000 / 99 = 303 030, soit ~3 030 USDC ajoutes. Plus l'achat est grand, plus le slippage augmente.

Prets DeFi (Aave, Compound) :

| Etape | Description |
| --- | --- |
| 1. Depot collateral | Depot d'actif (ex: ETH) |
| 2. Calcul LTV | Montant empruntable selon ratio |
| 3. Emprunt | Emprunt d'un actif (ex: USDC) |
| 4. Utilisation | Capital deploye ailleurs |
| 5. Remboursement | Principal + interets, liberation collateral |
| 6. Liquidation | Vente auto du collat si seuil depasse |

Stablecoins :

| Type | Exemple | Mecanisme | Risque principal |
| --- | --- | --- | --- |
| Fiat collateralise | USDC, USDT | Reserve bancaire 1:1 | Centralisation emetteur/banque |
| Crypto collateralise | DAI | Sur-collateralisation crypto | Liquidation si chute brutale |
| Algorithmique | FRAX (hybride) | Partiellement algorithmique | Risque de spirale |

##### 7.3 NFTs - Non-Fungible Tokens

Fongible vs non-fongible :

Un actif fongible est interchangeable (ex: monnaie). Un NFT est unique (tokenId unique).

ERC-721 :

Premier standard NFT (2018), non divisible, proprietaire unique par token.

| Fonction ERC-721 | Signature | Description |
| --- | --- | --- |
| ownerOf(tokenId) | (uint256) view returns (address) | Proprietaire |
| transferFrom(from,to,tokenId) | (address,address,uint256) | Transfert |
| approve(to,tokenId) | (address,uint256) | Autorisation de transfert |
| tokenURI(tokenId) | (uint256) view returns (string) | URL metadonnees |

ERC-1155 :

Permet de gerer fongible et non-fongible dans un meme contrat, tres utilise en gaming.

Soulbound Tokens (SBT) :

NFT non transferable, lie durablement a une adresse (diplomes, certifications, badges, etc.).

Cas d'usage diplome :

Un contrat SBT mint un token pour chaque etudiant avec metadonnees (nom, date, note, hash IPFS). Verifiable publiquement, non revendable.

##### 7.4 Scalabilite - le trilemme blockchain

Trilemme :

Une blockchain ne peut pas maximiser simultanement decentralisation, securite et scalabilite.

| Propriete | Definition | Exemple favorise |
| --- | --- | --- |
| Decentralisation | Pas de controle unique | Bitcoin, Ethereum |
| Securite | Resistance a la falsification | Bitcoin PoW, Ethereum PoS |
| Scalabilite | Beaucoup de TPS a faible cout | Solana (avec compromis) |

Ethereum privilegie decentralisation + securite sur L1, et deplace la scalabilite vers L2.

Solutions Layer 2 :

| Solution | Exemples | Securite | Finalite | TPS approx. |
| --- | --- | --- | --- | --- |
| Optimistic Rollups | Optimism, Arbitrum | Fraud proofs | ~7 jours vers L1 | ~2 000-4 000 |
| ZK-Rollups | zkSync, StarkNet, Polygon zkEVM | Preuves zk | Quelques heures | ~2 000-20 000 |
| State Channels | Lightning | Reglement on-chain en fermeture | Instantane dans le canal | Tres eleve |
| Validium | ImmutableX, StarkEx | Preuves zk + data off-chain | Tres rapide | ~9 000+ |

Optimistic vs ZK :

Optimistic suppose validite par defaut avec fenetre de contestation. ZK prouve cryptographiquement la validite sans attente de contestation equivalent.

Choix L2 (2026) :

- Adoption simple : Arbitrum One, Optimism
- Performance : zkSync Era
- Gaming/NFT : ImmutableX

##### 7.5 Regulation et enjeux societaux

MiCA (UE) :

Cadre europeen en vigueur depuis 2024 pour les crypto-actifs (emetteurs, plateformes, services).

| Categorie MiCA | Regule | Obligations |
| --- | --- | --- |
| Stablecoins (ART/EMT) | Tokens indexes actifs/monnaie | Reserves, liquidite, plafonds |
| Exchanges (CASP) | Plateformes centralisees | Licence, fonds propres, protection client |
| Emetteurs tokens | ICO / token sales | Livre blanc, responsabilites |
| DeFi | Exemption provisoire | Evolution probable 2026-2027 |

nLPD (Suisse) :

La loi de protection des donnees cree une tension avec l'immutabilite blockchain pour les donnees personnelles.

Pistes :

- Stocker hashes on-chain, donnees off-chain chiffrees
- Utiliser blockchain permissionnee selon le contexte
- Employer des preuves a divulgation nulle (ZK)

Enjeux environnementaux (ordre de grandeur) :

| Blockchain | Mecanisme | Consommation estimee 2026 | Comparaison |
| --- | --- | --- | --- |
| Bitcoin | PoW | ~120 TWh/an | Tres elevee |
| Ethereum | PoS (post-Merge) | ~0.01 TWh/an | -99.95% vs ancien PoW |
| Solana | PoH + PoS | Faible | Plus efficient |
| L2 | Heritent du L1 | Fraction du L1 | Optimisation supplementaire |

##### 7.6 Resume global du module

| Jour | Concept cle | Ce que vous savez faire |
| --- | --- | --- |
| J1 | Cryptographie | Expliquer SHA-256, ECDSA, derivation adresse |
| J2 | Architecture | Decrire bloc, Merkle, PoW vs PoS |
| J3 | BTC & ETH | Distinguer UTXO/comptes, calculer frais gas |
| J4 | Solidity | Ecrire, deployer, securiser un ERC-20 |
| J5 | DApps & Avenir | Connecter front-end ethers.js a contrat Sepolia |
| Projet | Integration | Smart contract + DApp + GitHub + demo |

La suite logique apres ce module :

- Cyfrin Updraft : cours Solidity avance et Foundry
- Speed Run Ethereum : challenges pratiques progressifs
- Contribution open-source : OpenZeppelin, Hardhat, ethers.js
- Preparation certification Ethereum Developer
