const Web3 = require("web3");
const abi = require("./abi");

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// console.log(abi);

//? contract abi interface
let contract = new web3.eth.Contract(
  abi,
  //? we provided the adress on deployed contract on remix. web3 provider, ganache
  "0xAd3D93070c3A515515f7b8E2b4050E9F6E53FF48"
);

// console.log(contract);

const callContract = async () => {
  try {
    const myUint = await contract.methods.myUint().call();
    console.log(myUint);
    const wu = await contract.methods;

    // console.log(wu);
  } catch (error) {
    console.log(error);
  }
};

const setContract = async (value) => {
  try {
    const result = await contract.methods
      .setUint(value)
      .send({ from: "0x39Abb3d7e5E2d2605BB849AD69B22D1CB1b4637d" });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
setContract(30);

//? get balance from ganache interface
const getBalance = async () => {
  const result = await web3.eth.getBalance(
    "0x8d1E4F5aEB82cbae5ca185b96ed04407A0Ddc6D6"
  );
  //* convert large digits of wei to ether
  const ether = await web3.utils.fromWei(result, "ether");
};

//? send a transiction from an adress to an adress a value
const sendTransaction = async (_from, _to, value) => {
  try {
    result = await web3.eth.sendTransaction({
      from: _from,
      to: _to,
      //* a util tool to convert ether to large digits Wei
      value: web3.utils.toWei(`${value}`, "ether"),
    });
  } catch (error) {
    console.log(error);
  }
};

// sendTransaction(
//   "0x8d1E4F5aEB82cbae5ca185b96ed04407A0Ddc6D6",
//   "0x39Abb3d7e5E2d2605BB849AD69B22D1CB1b4637d",
//   2
// );
