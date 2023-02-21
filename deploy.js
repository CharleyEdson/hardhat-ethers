const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  // compile in code
  // compile separately
  // http://127.0.0.1:7545
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "42a665c23c58f61fb79ef0d86de341f1e14b67ae5264afb8277075ec2af7638f",
    provider
  );
  const abi = fs.readFileSync("./simpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./simpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // Stop here! Wait for contract to deploy!
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
