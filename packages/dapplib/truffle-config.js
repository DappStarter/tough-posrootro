require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space strike dash soccer evil hunt phone orange gas'; 
let testAccounts = [
"0x576dc914c203abd742b7ad6dc4164710fadcd6a9025ca6ebb200b0b7bf5d4ae2",
"0x06ac112bc6b9ae8710e340ac41c578fe825a93745c7afa834be12f45182df0cd",
"0xc6059c2d8be438fcf80fb4b4b0e396424f205015e4ae57ee492e38e459efa755",
"0xa8cfcfe75c670a1e5a281265fdfb725183bad2e3c3d60e2a53bb9feea713b46e",
"0xaaa214e346c58e886a95334b9ce07faa94f1d486f1d285cab993a155f372577d",
"0xd0fb71bcbd77fd04bd9c288d6f09d8d62cc58ce662caf25d532a8b647cbc05f1",
"0x83e934805b7dc9743c02736b370ca9257da5b6c44ed383d035f7b4d6a6f27763",
"0xc290ed849672c7afc2a76e43e09332170cb5fa5b62a73c9be4a24155eaa42774",
"0x91f8c3531403ab0c6a8717a9cead6acc3d1ceeddba650fa89b13e31037f1ab30",
"0x2707c368d7e96c90b191453e307df3bf72eb11c344dc0990b869ee258c4caa1d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

