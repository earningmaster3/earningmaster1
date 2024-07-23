require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["0x7b4f02a143c319e6865ed39a8ddcf6abdaf51d1b2fa488cd9fa4b771766cce2e"], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};
