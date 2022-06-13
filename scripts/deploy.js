const hre = require("hardhat")

const main = async () => {
    const Transactions = await hre.ethers.getContractFactory("Transactions")
    const transactions = await Transactions.deploy("TA V1.1")
  
    await transactions.deployed()
  
    console.log("Contract deployed: ", transactions.address)
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

// Text & Execute Contract Deployment
runMain()