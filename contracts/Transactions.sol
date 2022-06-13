//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Transactions {

    uint256 taCounter;
    string private info;

    constructor(string memory _info) {
        info = _info;
        console.log("Contract Version: ", info);
    }

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address reveiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message) public {
        taCounter += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return taCounter;
    }

    function contractInfo() public view returns (string memory) {
        return info;
    }

    function setContractInfo(string memory _info) public {
        console.log("Changing contract from '%s' to '%s'", info, _info);
        info = _info;
    }

}