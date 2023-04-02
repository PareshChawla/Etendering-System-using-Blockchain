
const hre = require("hardhat");


async function main() {
    const Tender = await hre.ethers.getContractFactory("Tender");
    const tender = await Tender.deploy();

    await tender.deployed();

    console.log(`deployed contract Address ${tender.address}`);
   

    
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
