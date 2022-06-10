import { ethers, run } from 'hardhat';
import deployer from '../.secret';
const pending = require('../contracts/pending');

// WBNB address on BSC, WETH address on ETH
const WethAddr = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
pending.thePending();
async function main() {
  await run('compile');
  const FlashBot = await ethers.getContractFactory('FlashBot');
  const flashBot = await FlashBot.deploy(WethAddr);
  
  console.log(`FlashBot deployed to ${flashBot.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
