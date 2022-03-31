//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./AfroToken.sol";

contract AfroTokenV2 is AfroToken {
    function version() public pure returns (uint256) {
       return 2;
   }
}