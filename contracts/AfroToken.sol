//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract AfroToken is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {    
    uint public AfroTokenTotalSupply = 10000;
    function initialize () public initializer {
        __ERC20_init("AfroToken", "AFT");

        _mint(msg.sender, AfroTokenTotalSupply * 10**18);
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    function totalSupply() public view override returns (uint) {
        return AfroTokenTotalSupply;
    }
}