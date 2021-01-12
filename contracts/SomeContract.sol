// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.8.0;


contract SomeContract {
    uint public myUint = 10;
    
    function setUint(uint _myUint) public {
        myUint = _myUint;
    }
    
    
}