require("@nomiclabs/hardhat-waffle")
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/AQSgNzP9wG58_rdyO60mwXNV4eVjX_zc",
      accounts: [`${process.env.ACCOUNT_PKEY}`]
    }
  }
};
