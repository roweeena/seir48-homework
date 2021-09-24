// JavaScript Bank

const accounts = [
  { name: "Dave", balance: 3500 },
  { name: "Kate", balance: 8590 },
  { name: "Joss", balance: 12058 }];

const total = function(arr) {
  let sum = 0;
  for ( let i = 0; i < arr.length; i++) {
    sum = sum + arr[i].balance;
  }
  return `Total amount in this bank is ${sum}.`;
};

const addAcc = function(newName, amount) {
  const newCustomer = { name: newName, balance: amount };
  accounts.push(newCustomer);
  return accounts;
};

const amountChange = function(userName, number, arr) {
  for ( let n = 0; n < arr.length; n++) {
    if ( arr[n].name === userName ) {
      if ( arr[n].balance + number >= 0 ) {
        arr[n].balance = arr[n].balance + number;
        return `New Balance of ${arr[n].name} is ${arr[n].balance}.`;
      } else {
        return "You don't have enough balance in your account!";
      }
    }
  }
  return;
};

//#Bonus

const transfer = function(userOut, userIn, amount, arr) {
  for ( let a = 0; a < arr.length; a++ ) {
    if ( arr[a].name === userOut ) {
      if ( arr[a].balance - amount >= 0 ) {
        arr[a].balance = arr[a].balance - amount;
        for ( let b = 0; b < arr.length; b++ ) {
          if ( arr[b].name === userIn ) {
              arr[b].balance = arr[b].balance + amount;
          }
        }
        return `$${ amount } has been transfered from ${ userOut } to ${ userIn }.`;
      } else {
        return "You don't have enough money in your account!";
      }
    }
  }
}

console.log(addAcc("Aaron", 8960));
console.log(total(accounts));
console.log(amountChange("Dave", -3500, accounts));
console.log(transfer("Kate", "Joss", 100, accounts));
