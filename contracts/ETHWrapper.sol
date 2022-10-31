// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
pragma abicoder v2;

import "./WETH.sol";
import "hardhat/console.sol";

contract ETHWrapper {

    WETH public WETHToken;

    event LogETHWrapped(address sender, uint256 amount);
    event LogETHUnwrapped(address sender, uint256 amount);

    constructor() {
        console.log('vlizai');
        WETHToken = new WETH();
    }

    function wrap() public payable {
        require(msg.value > 0, "We need to wrap at least 1 WETH");
        
        WETHToken.mint(msg.sender, msg.value);
        
        emit LogETHWrapped(msg.sender, msg.value);
    }

    function unwrap(uint value) public {
        require(value > 0, "We need to unwrap at least 1 WETH");
        WETHToken.transferFrom(msg.sender, address(this), value);
        WETHToken.burn(value);
        payable(msg.sender).transfer(value);
        emit LogETHUnwrapped(msg.sender, value);
    }

}