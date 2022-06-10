import { BigNumber, BigNumberish, utils } from 'ethers';

interface Config {
  contractAddr: string;
  logLevel: string;
  minimumProfit: number;
  gasPrice: BigNumber;
  gasLimit: BigNumberish;
  bscScanUrl: string;
  concurrency: number;
}

const contractAddr = '0x7161C66C2d25e7C8bb1198b4983C54DdfBd25d4b'; // flash bot contract address
const gasPrice = utils.parseUnits('10', 'gwei');
const gasLimit = 300000;

const bscScanApiKey = 'ZWZJQVSPH32QFSNWTEFI77M29SR5KVEG86'; // bscscan API key
const bscScanUrl = `https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=${bscScanApiKey}`;

const config: Config = {
  contractAddr: contractAddr,
  logLevel: 'info',
  concurrency: 50,
  minimumProfit: 1, // in USD
  gasPrice: gasPrice,
  gasLimit: gasLimit,
  bscScanUrl: bscScanUrl,
};

export default config;
