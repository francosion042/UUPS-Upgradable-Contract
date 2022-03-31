const { expect } = require("chai");
const { ethers, upgrades} = require("hardhat");

describe("AfroToken", function () {
  
  it("assert that everything is okay", async function () {
    const afroTokenTotalSupply = 10000;
    const AfroToken = await ethers.getContractFactory("AfroToken");
    const afroToken = await upgrades.deployProxy(AfroToken, [afroTokenTotalSupply], {kind: "uups", initializer: "initialize"});

    it("assert that the total supply is correct", async () => {
      expect(await afroToken.totalSupply()).to.equal(afroTokenTotalSupply);
    })

    it("asserts that the upgrade was successfull", async () => {
      // upgrade
    const AfroTokenV2 = await ethers.getContractFactory("AfroTokenV2");
    const afroTokenV2 = await upgrades.upgradeProxy(afroToken.address, AfroTokenV2);


    expect(await afroTokenV2.version()).to.equal(2)
    })
    
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});