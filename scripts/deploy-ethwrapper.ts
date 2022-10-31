const deployEthWarapper = async () => {
    const ETHWrapperFactory = await ethers.getContractFactory("ETHWrapper"); // 
    const ETHWrapperContract = await ETHWrapperFactory.deploy();
    console.log('Waiting for ETHWrapperContract deployment...');
    await ETHWrapperContract.deployed();
    console.log("LimeToken deployed to:", ETHWrapperContract.address);
}

export default deployEthWarapper;