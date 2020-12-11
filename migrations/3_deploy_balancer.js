const TMath = artifacts.require('TMath');
const BToken = artifacts.require('BToken');
const BFactory = artifacts.require('BFactory');
const BPool = artifacts.require('BPool');

const TToken = artifacts.require('TToken');

const { toWei } = web3.utils;
const { fromWei } = web3.utils;
const { hexToUtf8 } = web3.utils;

const MAX = web3.utils.toTwosComplement(-1);

module.exports = async function (deployer, network, accounts) {
    await deployer.deploy(BFactory);
    const factory = await BFactory.deployed();

    let pool;
    let POOL_ADDRESS;
    // if (network === 'development') {
        const POOL = await factory.newBPool(); // this works fine in clean room
        POOL_ADDRESS = POOL.logs[0].args[1];
        pool = await BPool.at(POOL_ADDRESS);
    // } else {
    //     pool = await BPool.at("HARDCODE ME");
    // }
    
    await pool.setSwapFee(toWei('0.001'));

    const admin = accounts[0];

    const weth = await TToken.new('Wrapped Ether', 'WETH', 18);
    const dai = await TToken.new('Dai Stablecoin', 'DAI', 18);
    const WETH_ADDRESS = weth.address;
    const DAI_ADDRESS = dai.address;

    await weth.mint(admin, toWei('200'));
    await dai.mint(admin, toWei('200'));

    await weth.approve(POOL_ADDRESS, MAX);
    await dai.approve(POOL_ADDRESS, MAX);

    await pool.bind(WETH_ADDRESS, toWei('50'), toWei('5'));
    await pool.bind(DAI_ADDRESS, toWei('20'), toWei('5'));
 
};
