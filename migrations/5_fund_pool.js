const TMath = artifacts.require('TMath');
const BToken = artifacts.require('BToken');
const BFactory = artifacts.require('BFactory');
const BPool = artifacts.require('BPool');

const TToken = artifacts.require('TToken');

const { toWei } = web3.utils;

module.exports = async function (deployer, network, accounts) {

    // const admin = accounts[0];

    // const { toWei } = web3.utils;
    // const { fromWei } = web3.utils;
    // const { hexToUtf8 } = web3.utils;

    // const MAX = web3.utils.toTwosComplement(-1);

    // const POOL_ADDRESS = '0xb0717C3041c94F3776A315A94Ff0caA3af33BAD6'
    // const WETH_ADDRESS = '0xE56dB4D99cE6AE160586f55149cD1919684F7223'
    // const DAI_ADDRESS = '0xc085Ef4D4b4302B0529ac307aD614C1CdFa9f681'

    // const pool = await BPool.at(POOL_ADDRESS);
    // await pool.bind(WETH_ADDRESS, toWei('50'), toWei('5'));
    // await pool.bind(DAI_ADDRESS, toWei('20'), toWei('5'));
};
