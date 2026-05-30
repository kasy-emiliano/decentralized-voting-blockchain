const hre = require("hardhat");

async function main() {
  const electionTitle = process.env.ELECTION_TITLE || "Decentralized Vote";
  const votingDeadline = process.env.VOTING_DEADLINE
    ? Number(process.env.VOTING_DEADLINE)
    : Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60;

  const MonContrat = await hre.ethers.getContractFactory("MonContrat");
  const contract = await MonContrat.deploy(electionTitle, votingDeadline);
  await contract.waitForDeployment();

  console.log("MonContrat deployed to:", await contract.getAddress());
  console.log("Election title:", electionTitle);
  console.log("Voting deadline:", votingDeadline);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
