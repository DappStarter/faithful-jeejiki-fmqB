require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid area fringe speak guard render remember erosion grace fashion food square'; 
let testAccounts = [
"0xf791dec37b372bac56ff9814a01231bb175e45572cc6d906bb1aa7be96d453b9",
"0xda11ab6c4e69ebb3994130318a2becfaabb11c0a56a71b9c0810ec2ef423ff62",
"0xfa4306d902ffcd5969e7d4c9fad1288c22ee5f2cb5779ade4378f4feb6cc6e4c",
"0xd257fb3620737bbc3941239fe1b2bf2cf20bbcf00ef5a1a50eca618885312a11",
"0x08508470fdf6d6c138bbcf6dfe9ea8eae910edf738103a271c7b04b439a4494a",
"0xb53fb75fc004bf3e5467c9fbe9879724b2fb723cba5c19b732e247ec7ef39f26",
"0x8d0ba69226cb20df4db5fa16001102c18cdd0fe9d60a719491311e53f7ca3531",
"0xb1e08555d952f386bf9acd3cff456a53df69e42a6b214f89733bff4918642b21",
"0xa36d147861b13f2cd67dc32fcbbc068e483fbb93d6822c9c8b766b45416364ac",
"0xe71b5ab2f3866090f98c16a482555a03634bc4b384f1a677446365da2a6cbcf4"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


