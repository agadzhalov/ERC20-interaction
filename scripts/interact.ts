
const interact = (async(hre: any) => {

    const ETHWrapperFactory = await hre.ethers.getContractFactory("ETHWrapper");
    const provider = new hre.ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    const wallet = new hre.ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    const balance = await wallet.getBalance();
    
    console.log(balance.toString())
    const wrapValue = hre.ethers.utils.parseEther("1")
  
    const ETHWrapperContract = await ETHWrapperFactory.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");
  
    console.log(ETHWrapperContract.address)

    const WETHFactory = await hre.ethers.getContractFactory("WETH");
    const wethAddress = await ETHWrapperContract.WETHToken.address;
    console.log(wethAddress)
    //const WETHContract = await WETHFactory.attach(wethAddress)
    

    // const tx = await ETHWrapperContract.wrap({value: wrapValue});
    // await tx.wait();
    // let contractETHBalance = await provider.getBalance(ETHWrapperContract.address);
    // console.log("Contract ETH balance after wrapping:", contractETHBalance.toString())

    // -------------------
    // const ETHWrapperFactory = await hre.ethers.getContractFactory("ETHWrapper");
    // const provider = new hre.ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    // const wallet = new hre.ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    // const balance = await wallet.getBalance();
    // const wrapValue = hre.ethers.utils.parseEther("1")

    // const ETHWrapperContract = await ETHWrapperFactory.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");
  
    // const tx = await ETHWrapperContract.wrap({value: wrapValue});
    // await tx.wait();
    // let contractETHBalance = await provider.getBalance(ETHWrapperContract.address);
    // console.log("Contract ETH balance after wrapping:", contractETHBalance.toString());


    //---------------
    // const WETHFactory = await hre.ethers.getContractFactory("WETH");
    // const ETHWrapperFactory = await hre.ethers.getContractFactory("ETHWrapper");
    // const provider = new hre.ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
    // const wallet = new hre.ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    // const balance = await wallet.getBalance();


});

export default interact;