const { expect } = require("chai");
const { ethers, upgrades} = require("hardhat");

describe("AfroToken", function () {
  it("assert that everything is okay", async function () {
    const afroTokenTotalSupply = 10000;
    const AfroToken = await ethers.getContractFactory("AfroToken");
    const afroToken = await upgrades.deployProxy(AfroToken, [afroTokenTotalSupply], {kind: "uups", initializer: "initialize"});
    await afroToken.deployed();

    expect(await afroToken.totalSupply()).to.equal(afroTokenTotalSupply);

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});