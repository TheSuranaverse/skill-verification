# Decentralized Skill Verification Protocol

"Trustless validation of professional skills on-chain."

Skill Verification is an on-chain system built on the Aptos blockchain that allows users to acquire and verify skill-based NFTs through challenge completion, staking, and reputation mechanisms. It provides a decentralized credentialing system without relying on traditional institutions.


## 🎯 Problem It Solves

* People often fake skills on resumes and LinkedIn.
* Recruiters have no reliable on-chain method to verify someone's actual ability.
* Centralized platforms own user reputation and charge hefty fees.

---

## 🧠 Solution Overview

* Anyone can claim a skill (e.g., "I'm a Rust developer").
* The claim is minted as a **soulbound NFT** (non-transferable badge tied to a wallet).
* Other users or DAOs can stake tokens to support or challenge the claim.
* If challenged, an off-chain review process (optional or auto-triggered) is initiated.
* Verified claims boost a user’s on-chain **reputation**, visible to employers, DAOs, or other protocols.

---

## 🔄 How It Works

### Skill Claiming

* Users mint a skill NFT using a Move smart contract.
* Metadata includes skill name and self-assessed level (e.g., Beginner, Intermediate).

### Community Staking

* Other users stake tokens to **vouch** for a skill.
* More stake = more trust.

### Challenge Flow

* Any wallet can challenge a skill claim by staking a dispute amount.
* Triggers optional off-chain verification (test, GitHub review, etc.).
* If proven fake: NFT is burned and the challenger is rewarded.

### Reputation Score

* Built from:

  * Supported skill NFTs
  * Challenges survived
  * Endorsements from trusted wallets
* Can be surfaced via public profile or DID.

---

## 📌 Features

* 🧠 **Skill NFTs**: Mint non-transferable badges for verified skills.
* 🎯 **Challenge System**: Prove or dispute skill claims with staked tokens.
* 📊 **Reputation Engine**: Earn trust through community validation.
* 💼 **Staking Mechanics**: Incentivize honest participation.
* 🌐 **Decentralized Identity**: Extend skills to DID systems.

---

## 🛠️ Tech Stack

### 💡 Blockchain Layer

* **Aptos** – Fast, scalable blockchain
* **Move** – Secure resource-oriented programming language

### 📦 Smart Contracts

* Skill NFT minting (soulbound)
* Challenge and staking logic
* Escrow mechanism
* Reputation index calculation

### 🌐 Frontend

* **React.js + Tailwind CSS**
* Wallet support: **Petra**, **Martian**

### 📡 Backend (optional)

* **Node.js + Firebase** for off-chain review handling
* Optional use of oracles or attestations

### 🆔 Decentralized Identity (optional)

* DID support (e.g., SpruceID)
* Aptos wallet as identity anchor

### 📊 Visualization

* Skill profile dashboard
* Trust score bar + badge explorer

---

## 📁 Modules Overview

* `SkillNFT.move`: Handles minting and registry of skills.
* `Challenge.move`: Manages disputes and verification challenges.
* `Reputation.move`: Aggregates trust metrics.
* `Staking.move`: Handles token staking and escrow.

---

## 🚀 Getting Started

### Prerequisites

* Install [Aptos CLI](https://aptos.dev/cli-tools/aptos-cli/install-cli-tools/)

### Clone & Compile

```bash
git clone https://github.com/TheSuranaverse/skill-verification.git
cd skill-verification
aptos move compile
```

### Run Tests

```bash
aptos move test
```

---

## 📈 Potential Use Cases

* **Decentralized Hiring Platforms** — Recruiters can verify skill claims on-chain.
* **DAO Contributions** — Assign tasks or voting power based on verified skills.
* **Freelancer Reputation** — Port skill proofs across platforms.
* **Web3 Bootcamps** — Issue verifiable skill badges.
* **University Endorsements** — Professors back student skills on-chain.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

PRs, issues and forks are welcome! For major changes, please open an issue first.

---

## 🧑‍💻 Author

* [Subham Surana](https://github.com/TheSuranaverse) — Project Maintainer
* [Padi Sai Shirisha](https://github.com/Sai-Shirisha-Padi) - Project Contributor

## Aptos Transaction Proof
![myaptos_explorertxn](https://github.com/user-attachments/assets/b4b5fff4-3fed-44d7-b32d-84a3ff7eb461)
