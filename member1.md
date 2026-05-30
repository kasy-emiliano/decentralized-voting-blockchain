# Member 1 Progress Log

## Scope
- Smart contract architecture and Solidity implementation
- Security patterns and code quality
- Deployment on Sepolia

## Current Status
- Project context reviewed
- Chosen topic: decentralized voting
- Contract architecture chosen: a single poll with a global deadline
- Next step: add the Hardhat project scaffold and deployment/test wiring

## Notes
- The contract must enforce one vote per address.
- Proposal creation is restricted to the owner/admin.
- Votes must stop automatically after the deadline.
- The front-end should be able to read proposals, vote, and display open/closed status.

## Modification 1 - Contract Architecture

### What was decided
- One election contract handles the full poll.
- The owner creates proposals before the deadline.
- Each wallet can vote only once for one proposal.
- Voting closes automatically when `block.timestamp` reaches the deadline.

### Why this design
- It is the fastest design to ship reliably before the deadline.
- It keeps the front-end simple because proposal status is derived from the same deadline for every proposal.
- It avoids extra admin flows like closing votes manually or managing separate election phases.

### Difficult parts
- The contract must reject late votes purely from timestamp checks, so the deadline logic must be consistent everywhere.
- The `vote` function must update state before emitting the event so the contract stays in a valid state even if the call is extended later.
- The proposal list needs a clean getter so the front-end can read all proposals without custom off-chain indexing.

## Modification 2 - Project Scaffold

### What was added
- Hardhat project metadata in `package.json`
- Solidity compiler and Sepolia network configuration in `hardhat.config.js`
- Deployment script in `scripts/deploy.js`
- Ignore rules for generated and secret files in `.gitignore`

### Why this matters
- The deployment script gives us a repeatable way to deploy the same contract to Sepolia.
- The config keeps the contract sources and tests in the expected folders.
- The scripts are simple enough for the whole team to reuse without extra setup overhead.

### Difficult parts
- The Sepolia network configuration must stay empty when the RPC URL or private key is missing, otherwise Hardhat fails early.
- The deployment script needs a future deadline, so it falls back to a relative timestamp when no explicit deadline is provided.
- The compile step still depends on installing the Node packages, so the next validation will check that the scaffold matches the dependency set.

## Modification 3 - Contract Tests

### What was added
- A Hardhat test suite for owner-only proposal creation
- A one-vote-per-address test
- A duplicate-vote rejection test
- A deadline closure test using Hardhat time manipulation

### Why this matters
- The tests lock in the most important voting rules before the rest of the project builds on top of them.
- They give fast feedback during later front-end integration and Sepolia deployment.

### Difficult parts
- Deadline testing needs direct EVM time control, so the suite advances the next block timestamp instead of waiting in real time.
- The duplicate-vote test has to vote once successfully first, otherwise it would not prove that the second vote is the one being rejected.
- OpenZeppelin v5 uses a custom error for unauthorized ownership checks, so the owner-only test must assert `OwnableUnauthorizedAccount` instead of a revert string.

## Modification 4 - Deployment Environment Sample

### What was added
- A `.env.example` file with the Sepolia RPC URL and private key placeholders
- Optional election title and deadline variables for the deploy script

### Why this matters
- The team can copy the example file into a local `.env` and deploy without guessing which variables are required.
- The deploy script already reads these values, so this keeps the runtime contract configuration aligned with the code.

### Difficult parts
- The private key must never be committed, so the repository needs an example file rather than a real `.env`.
- The deadline can be omitted, but then the deployment script must fall back to a future timestamp so the contract is always deployable.
