// # JavaScript Bank

// In this homework, you'll create a basic `bank` in Javascript. The bank has many 
// `accounts` and the following capabilities that you need to write. 

// #### Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method 
// that will return the total sum of money in the accounts. It also needs an `addAccount` 
// method that will enroll a new account at the bank and add it to the array of accounts. 
// There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality. 

// #### Accounts

// Accounts have a current balance and owner's name. 
// You should be able to deposit or 
// withdraw from an account to change the balance. 

// There is no need to write a user interface. Make sure functions return values -- you 
// may also have your functions `console.log()` values to help you see your code working. 

// You should write a basic story through a series of JavaScript commands that shows that 
// the methods do indeed work as expected: add some accounts, show the total balance, make 
// some deposits and withdrawals, show the new total balance. 

// ### Tips

// Don't overthink this. Shorter code is probably the answer. 

// ## Bonus

// - Ensure that the accounts cannot have negative values. 
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts. 

// create an empty array to store list of accounts
const accounts = [];
const transfers =[];

// create a function to create a new account
const addAccount = (n, initialBalance) => {
  accounts.push({
    name: n,
    balance: initialBalance
  });
  return accounts;
};

const addTransfer = (amount, sender, recipient) => {
  transfers.push({
    senderName: sender,
    recipientName: recipient,
    amount: amount
  });
  return transfers;
}

addAccount('Jonny', 1000);
addAccount('Marc',1000);
addAccount('Ari', 1000);
addAccount('Hakim', 1000);
addAccount('Roger', 1000);
addAccount('Sally', 600);
console.log(accounts);

// Retrives the index of the account with that name
const getAccountIndex = (n) => {
  for(let i=0; i<accounts.length; i++) {
    if(n === accounts[i].name) {
      return i;
    }
  }
}

// Negative value check
const negativeBalanceCheck = (n) => {
  let index = getAccountIndex(n);
  if (accounts[index].balance < 0) {
    return true;
  }
  else {
    return false;
  }
}

// Deposits funds into an account
depositFunds = (n, amount) => {
  const index = getAccountIndex(n);
  accounts[index].balance += amount;
  return accounts[index];
}

// Withdraws funds from an account
withdrawFunds = (n, amount) => {
  const index = getAccountIndex(n);
  let currentBalance = accounts[index].balance;
  let postBalance = currentBalance - amount;
  if (postBalance > 0) {
    accounts[index].balance -= amount;
    return accounts[index];
  }
  else {
    console.log('Insufficient funds. Can not process transaction');
    return false;
  }
}

// Method which sums all the money in all the accounts
const bankBalance = () => {
  let sum = 0;
  for (let i=0; i<accounts.length; i++) {
    sum += accounts[i].balance;
  }
  return sum;
}

// Transfer funds
const transferFunds = (amount, sender, recipient) => {
  if (withdrawFunds(sender, amount) !== false) {
  withdrawFunds(sender,amount);
  depositFunds(recipient,amount);
  addTransfer(amount, sender, recipient);
  }
  return accounts;
}

transferFunds(800, 'Sally', 'Jonny');
transferFunds(50, 'Sally', 'Jonny');

