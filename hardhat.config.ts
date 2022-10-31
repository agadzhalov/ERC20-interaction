import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import deployLocally from "./scripts/task";
import deployEthWarapper from "./scripts/deploy-ethwrapper";
import interact from "./scripts/interact";
import deployWeth from "./scripts/deploy-weth";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

task("interact", "Deploys contract")
  .setAction(async(args: any, hre: HardhatRuntimeEnvironment) => {
    await interact(hre);
  });


task("deploy", "Deploys contract")
  .setAction(async(args: any, hre: HardhatRuntimeEnvironment) => {
    await deployEthWarapper();
  });

  task("deploy-weth", "Deploys contract")
  .setAction(async(args: any, hre: HardhatRuntimeEnvironment) => {
    await deployWeth();
  });

export default config;
