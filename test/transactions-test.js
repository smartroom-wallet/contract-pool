const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new version...", async () => {

    const Transactions = await ethers.getContractFactory("Transactions");
    const transaction = await Transactions.deploy("VX TEST");
    
    await transaction.deployed();

    expect(await transaction.contractInfo()).to.equal("VX TEST");

    const setNewInfo = await transaction.setContractInfo("VX TEST - DONE");

    // wait until the transaction is mined
    await setNewInfo.wait();

    expect(await transaction.contractInfo()).to.equal("VX TEST - DONE");
  });
});
