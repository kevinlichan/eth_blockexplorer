async function getBlocks() {
  const payload = {
      "id": 1,
      "jsonrpc": "2.0",
      "method": "eth_blockNumber"
  };
  const res = await fetch('https://eth-mainnet.g.alchemy.com/v2/' + process.env.REACT_APP_ALCHEMY_API_KEY, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  return res.json()
}

export default async function Blocks() {
  const data = await getBlocks()
  return <div>Latest Block Number: {parseInt(data.result)}</div>
}