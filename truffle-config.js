require('dotenv').config;
const HDWalletProvider = require('truffle-hdwallet-provider');

const { ETH_MNEMONIC, BSC_MNEMONIC } = process.env;

module.exports = {
    networks: {
        development: {
            host: 'localhost', // Localhost (default: none)
            port: 8545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
            // gas: 10000000,
        },
        goerli: {
            provider: new HDWalletProvider(ETH_MNEMONIC, 'https://goerli.infura.io/v3/0fa0c291777644c7ba88843aff91645b'),
            network_id: '*', // Any network (default: none)
            // gas: 10000000,
        },
        bscmain: {
            provider: new HDWalletProvider(BSC_MNEMONIC, 'https://bsc-dataseed1.binance.org:443'),
            network_id: '*', // Any network (default: none)
            // gas: 10000000,
        },
        bsctest: {
            provider: new HDWalletProvider(BSC_MNEMONIC, 'https://data-seed-prebsc-1-s1.binance.org:8545'),
            network_id: '*', // Any network (default: none)
            // gas: 10000000,
        },
    },
    // Configure your compilers
    compilers: {
        solc: {
            version: '0.5.12',
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 100,
                },
                evmVersion: 'byzantium',
            },
        },
    },
};
