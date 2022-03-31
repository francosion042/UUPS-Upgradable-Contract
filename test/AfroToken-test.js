const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AfroToken", function () {
  it("assert that everything is okay", async function () {
    const AfroToken = await ethers.getContractFactory("AfroToken");
    const afroToken = await AfroToken.deploy("Hello, world!");
    await afroToken.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});