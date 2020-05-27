var abi = [{"inputs":[{"internalType":"string","name":"name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"},{"indexed":false,"internalType":"string","name":"_date","type":"string"}],"name":"DepositMade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"},{"indexed":false,"internalType":"string","name":"_date","type":"string"}],"name":"WithdrawalMade","type":"event"},{"inputs":[],"name":"currentBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"customerName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"date","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"_date","type":"string"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"contract BankAccount","name":"target","type":"address"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_reason","type":"string"}],"name":"pay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"_date","type":"string"},{"internalType":"string","name":"_reason","type":"string"}],"name":"receivePayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"_date","type":"string"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

var bankaccountContract = web3.eth.contract(abi);

var account1 = bankaccountContract.at("0x1932c48b2bf8102ba33b4a6b545c32236e342f34");
var account2 = bankaccountContract.at("0x1349f3e1b8d71effb47b840594ff27da7e603d17");