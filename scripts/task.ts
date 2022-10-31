const deployLocally = async() => {
    const BookUtils = await ethers.getContractFactory("LimeToken");
    const bookUtils = await BookUtils.deploy();
    await bookUtils.deployed();
    console.log("LimeToken deployed to:", bookUtils.address);
  }
  
  export default deployLocally;