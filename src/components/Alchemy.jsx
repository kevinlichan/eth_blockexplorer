import { Network, Alchemy } from "alchemy-sdk";

async function GetBlockNumber() {
  const settings = {
    apiKey: "DRGVEnG5p2HogXOWrH-hZiN-7qqqPaYv",
    network: Network.ETH_MAINNET,
  };
  
  const alchemy = new Alchemy(settings);

  let latestBlockNumber;
  alchemy.core.getBlockNumber().then((blockNumber) => {
    latestBlockNumber = blockNumber;
    console.log(blockNumber);
  }).catch((error) => {
    console.error(error);
  })

  return <>{ latestBlockNumber }</>
}

// Get the latest block number
export async function AlchemySDK() {
  const settings = {
    apiKey: "DRGVEnG5p2HogXOWrH-hZiN-7qqqPaYv",
    network: Network.ETH_MAINNET,
  };
  
  const alchemy = new Alchemy(settings);

  let latestBlockNumber;
  alchemy.core.getBlockNumber().then((blockNumber) => {
    latestBlockNumber = blockNumber;
    console.log(blockNumber);
  }).catch((error) => {
    console.error(error);
  })

  return <>{ latestBlockNumber }</>
}