// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

const account = {
  name:'',
  balance: 0,
  deposit: (name, amount) => {

    let accountExists = false;

    if (amount < 0 ) {
      console.log('Please enter a positive amount to deposit.');
      return false;
    }
    for (let i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === name) {
        bank.accounts[i].balance += amount;
        accountExists = true;
        console.log(`Thanks for the deposit, ${bank.accounts[i].name}. Your balance is now $${bank.accounts[i].balance}.`);
      }
    }
    if (!accountExists) {
      console.log(`No account under the name '${name}' exists.`);
    }
    return accountExists;
  },
  withdraw: (name, amount) => {

    let accountExists = false;

    if (amount < 0 ) {
      console.log('Please enter a positive amount to withdraw.');
      return false;
    }
    for (let i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === name) {
        if (bank.accounts[i].balance >= amount) {
          bank.accounts[i].balance -= amount;
          accountExists = true;
          console.log(`Thanks for the withdrawal, ${bank.accounts[i].name}. Your balance is now $${bank.accounts[i].balance}.`)
        } else {
          console.log(`You have insufficient funds.`);
          return false;
        }
      }
    }
    if (!accountExists) {
      console.log(`No account under the name '${name}' exists.`);
    }
    return accountExists;
  },
  transfer: (nameFrom, nameTo, amount) => {

    let accountExists = false;

    if (amount < 0 ) {
      console.log('Please enter a positive amount to transfer.');
      return false;
    }
    if (nameFrom === nameTo) {
      console.log('Please enter two different accounts to transfer between.');
      return false;
    }
    for (let i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === nameFrom) {
        if (bank.accounts[i].balance >= amount) {
          for (let j = 0; j < bank.accounts.length; j++) {
            if (bank.accounts[j].name === nameTo) {
              bank.accounts[j].balance += amount;
              bank.accounts[i].balance -= amount;
              accountExists = true;
              console.log(`Hi ${nameFrom}. You have transferred $${amount} to ${nameTo}. Your balance is now $${bank.accounts[i].balance}.`);
            }
            if (!accountExists) {
              console.log(`No account under the name '${nameTo}' exists.`);
              return false;
            }
          }
        } else {
          console.log(`You have insufficient funds.`);
          return false;
        }
      }
    }
    if (!accountExists) {
      console.log(`No account under the name '${nameFrom}' exists.`);
    }
    return accountExists;
  }
}

const bank = {
  accounts: [],
  totalInVault: () => {
    let sum = 0;
    for (let i = 0; i < bank.accounts.length; i++) {
      sum += bank.accounts[i].balance;
    }
    console.log(`Total amount in bank vault: $${sum}`);
    return `Total amount in bank vault: $${sum}`;
  },
  addAccount: (name, firstDeposit) => {
    for (let i = 0; i < bank.accounts.length; i++) {
      if (bank.accounts[i].name === name) {
      console.log(`Account under the name '${name}' already exists.`);
      return false;
      }
    }
    if (firstDeposit < 0) {
      console.log('Please enter a positive amount to deposit.');
      return false;
    }
    newAccount = Object.create(account);
    newAccount.name = name;
    newAccount.balance = firstDeposit;
    bank.accounts.push(newAccount);
     console.log(`Account under the name '${name}' successfully created.`);
    return bank.accounts[bank.accounts.length - 1];
  }
}

bank.addAccount("Derek", 5);
bank.addAccount("Derek", 20);
bank.addAccount("Botong", 7);
bank.addAccount("Anshul", 10);
bank.addAccount("Gollum", -5);
bank.totalInVault();
account.deposit("Derek", 5);
account.deposit("Anshul", 54);
account.deposit("Anshul", -4);
account.withdraw("Botong", 10);
account.withdraw("Botong", 5);
account.withdraw("Derek", 10);
account.withdraw("Derek", 20);
account.withdraw("Derek", -20);
account.deposit("Gollum", 5);
account.withdraw("Gollum", 5);
account.transfer("Derek", "Botong", -10);
account.transfer("Anshul", "Gollum", 10);
account.transfer("Anshul", "Derek", 10);
account.transfer("Gollum", "Derek", 10);
account.transfer("Botong", "Derek", 10);
account.transfer("Anshul", "Anshul", 10);
bank.totalInVault();
