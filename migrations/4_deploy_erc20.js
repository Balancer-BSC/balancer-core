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

    // const POOL = '0xb0717C3041c94F3776A315A94Ff0caA3af33BAD6'

    // const weth = await TToken.new('Wrapped Ether', 'WETH', 18);
    // const dai = await TToken.new('Dai Stablecoin', 'DAI', 18);

    //  // admin balances
    //  await weth.mint(admin, toWei('200'));
    //  await dai.mint(admin, toWei('200'));


    //  await weth.approve(POOL, MAX);
    //  await dai.approve(POOL, MAX);
};
