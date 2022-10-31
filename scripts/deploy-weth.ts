const deployWeth = async() => {
    const BookUtils = await ethers.getContractFactory("WETH");
    const bookUtils = await BookUtils.deploy();
    await bookUtils.deployed();
    console.log("WETH deployed to:", bookUtils.address);
  }
  
  export default deployWeth;