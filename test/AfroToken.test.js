const { expect } = require("chai");
const { ethers, upgrades} = require("hardhat");

describe("AfroToken", async function () {
  
    it("assert that the the contract was deployed and total supply is correct", async () => {
      this.afroTokenTotalSupply = 10000;
      this.AfroToken = await ethers.getContractFactory("AfroToken");
      this.afroToken = await upgrades.deployProxy(this.AfroToken, [this.afroTokenTotalSupply], {kind: "uups", initializer: "initialize"});

      await this.afroToken.deployed()
      expect(await this.afroToken.totalSupply()).to.equal(this.afroTokenTotalSupply);
    })

    it("asserts that the upgrade was successfull", async () => {
      // upgrade
      this.AfroTokenV2 = await ethers.getContractFactory("AfroTokenV2");
      this.afroTokenV2 = await upgrades.upgradeProxy(this.afroToken.address, this.AfroTokenV2);


      expect(await this.afroTokenV2.version()).to.equal(2)
      expect(await this.afroTokenV2.totalSupply()).to.equal(this.afroTokenTotalSupply);
    })
    
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");

});