// JavaScript Bank

// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

const BANK = {
  accounts: [],
  totalMoneys: function() {
    let total = 0;
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      total += account.balance;
    }
    return total;
  },
  enrol: function(owner) {
    const newAccount = createAccount(owner);
    this.accounts.push(newAccount);
  },
  transfer: function(amount, from, to) {
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      if (account.owner === from) {
        this.accounts[i].withdraw(amount);
      } else if (account.owner === to) {
        this.accounts[i].deposit(amount);
      }
    }
  }
}

// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
const createAccount = function(owner) {
  return {
    owner: owner,
    balance: 0,
    deposit: function(amount) {
      this.balance += amount;
    },
    withdraw: function(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      }
    },
    transfer: function(amount, to) {
      BANK.transfer(amount, owner, to);
    }
  }
}


// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

BANK.enrol("Joel");
BANK.enrol("Rowena");
BANK.enrol("Pat");

const owners = BANK.accounts.map(acc => acc.owner);
console.log("Accounts", owners);                // [ Joel", "Rowena", "Pat" ]

console.log("Bank Total", BANK.totalMoneys());  //  0

const joel = BANK.accounts[0];
console.log("Joel", joel);                      //  {owner: "Joel", balance: 0, deposit: function, withdraw: function}

joel.deposit(150);
console.log("Joel Balance", joel.balance);      //  150

joel.withdraw(25);
console.log("Joel Balance", joel.balance);      //  125

const rowena = BANK.accounts[1]
rowena.deposit(600);
console.log("Rowena Balance", rowena.balance);  //  600

const pat = BANK.accounts[2];
pat.withdraw(20);
console.log("Pat Balance", pat.balance);        //  0

rowena.transfer(250, "Pat")
console.log("Rowena Balance", rowena.balance);  //  350
console.log("Pat Balance", pat.balance);        //  200

console.log("Bank Total", BANK.totalMoneys());  //  725

console.log(BANK);

// Tips
// Don't overthink this. Shorter code is probably the answer.


// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
