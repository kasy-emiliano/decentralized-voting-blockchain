const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MonContrat", function () {
  async function deployFixture() {
    const [owner, voter, other] = await ethers.getSigners();
    const latestBlock = await ethers.provider.getBlock("latest");
    const votingDeadline = latestBlock.timestamp + 3600;

    const MonContrat = await ethers.getContractFactory("MonContrat");
    const contract = await MonContrat.deploy("MBDS Election", votingDeadline);
    await contract.waitForDeployment();

    await contract.createProposal("Proposal A", "First proposal");
    await contract.createProposal("Proposal B", "Second proposal");

    return { contract, owner, voter, other, votingDeadline };
  }

  it("lets the owner create proposals", async function () {
    const { contract } = await deployFixture();

    expect(await contract.proposalCount()).to.equal(2);
    const proposal = await contract.getProposal(0);
    expect(proposal.title).to.equal("Proposal A");
    expect(proposal.description).to.equal("First proposal");
    expect(proposal.voteCount).to.equal(0);
    expect(proposal.isOpen).to.equal(true);
  });

  it("rejects proposal creation from non-owners", async function () {
    const { contract, voter } = await deployFixture();

    await expect(
      contract.connect(voter).createProposal("Proposal C", "Unauthorized")
    ).to.be.revertedWithCustomError(contract, "OwnableUnauthorizedAccount").withArgs(voter.address);
  });

  it("allows one vote per address", async function () {
    const { contract, voter } = await deployFixture();

    await expect(contract.connect(voter).vote(0))
      .to.emit(contract, "Voted")
      .withArgs(voter.address, 0);

    expect(await contract.hasVoted(voter.address)).to.equal(true);
    expect(await contract.votedProposalId(voter.address)).to.equal(0);
    expect((await contract.getProposal(0)).voteCount).to.equal(1);
  });

  it("rejects double voting", async function () {
    const { contract, voter } = await deployFixture();

    await contract.connect(voter).vote(0);

    await expect(contract.connect(voter).vote(1)).to.be.revertedWith("You already voted");
  });

  it("rejects invalid proposal ids", async function () {
    const { contract, voter } = await deployFixture();

    await expect(contract.connect(voter).vote(99)).to.be.revertedWith("Invalid proposal");
  });

  it("closes voting after the deadline", async function () {
    const { contract, voter, votingDeadline } = await deployFixture();

    await ethers.provider.send("evm_setNextBlockTimestamp", [votingDeadline + 1]);
    await ethers.provider.send("evm_mine");

    await expect(contract.connect(voter).vote(0)).to.be.revertedWith("Voting is closed");
    expect(await contract.isVotingOpen()).to.equal(false);
  });
});
