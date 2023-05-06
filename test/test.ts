import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("HighFlyingClub", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("HighFlyingClub");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.name()).to.equal("High Flying Club");
  });
});
