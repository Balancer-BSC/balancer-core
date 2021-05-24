// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { parseEther } = hre.ethers.utils;

async function main() {
  const BFactory = await hre.ethers.getContractFactory("BFactory");
  const BfactoryContract = await BFactory.deploy();

  await BfactoryContract.deployed();

  console.log("Deployed to:", BfactoryContract.address);

  const BPoolFactory = await hre.ethers.getContractFactory("BPool");
  const BPoolContract = await BPoolFactory.deploy();

  await BPoolContract.deployed();

  console.log("Deployed to:", BPoolContract.address);

  let accounts = await hre.ethers.getSigners();
  let owner = accounts[0].address;

  await BPoolContract.setController(owner);

  const TTokenFactory = await hre.ethers.getContractFactory("TToken");
  const WETHTokenContract = await TTokenFactory.deploy('Wrapped Ether', 'WETH', 18);
  const DAITokenContract = await TTokenFactory.deploy('Dai Stablecoin', 'DAI', 18);

  await WETHTokenContract.deployed();
  await DAITokenContract.deployed();

  const WETH_ADDRESS = WETHTokenContract.address;
  const DAI_ADDRESS = DAITokenContract.address;
  
  const TO_WEI = 10**18;
  const tokenAmount = parseEther("200");

  await WETHTokenContract.mint(owner, tokenAmount)
  await DAITokenContract.mint(owner, tokenAmount)

  await WETHTokenContract.approve(BPoolContract.address, tokenAmount)
  await DAITokenContract.approve(BPoolContract.address, tokenAmount);

  await BPoolContract.bind(DAITokenContract.address, parseEther("50"), parseEther("5"));
  await BPoolContract.bind(WETHTokenContract.address, parseEther("20"), parseEther("5"));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
