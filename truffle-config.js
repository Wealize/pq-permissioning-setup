const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gasPrice: 0,
      provider: () => new HDWalletProvider('8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63', 'http://localhost:8545')
    }
  },
  compilers: {
    solc: {
      version: "0.6.5"
    }
  }
};