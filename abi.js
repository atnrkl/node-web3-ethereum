//* ABI interface of solidity smart contract

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_myUint",
        type: "uint256",
      },
    ],
    name: "setUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "myUint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

module.exports = abi;
