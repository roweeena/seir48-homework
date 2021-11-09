
// logic

$(document).ready(function() {
  // Set our initial account balances
  let accountBalances = {
    checking: 100,
    savings: 50,
  };

  // Define a function that will update the DOM with our balances
  const renderDOM = function() {
    let accountNames = Object.keys(accountBalances);
    for (let i = 0; i < accountNames.length; i++) {
      var currentBalance = accountBalances[accountNames[i]];
      var oneAccount = $('#' + accountNames[i] + '-balance');
      oneAccount.text('$' + currentBalance);

      // addClass('lowBalance') did not work!
      if (currentBalance < 1) {
        oneAccount.css({
          'background-color': 'red'
        });
      } else {
        oneAccount.css({
          'background-color': '#E3E3E3'
        });
      }
    }
  }

  // Define a function to actually process the transaction, correctly updating the account balance
  const transactionProcess = function(account, amount, type) {
    $('#message').removeClass('displayed');
    if (type == 'deposit') {
      accountBalances[account] += amount;

      // Add element reward when deposit button's hit. can't avoid duplicates!
      $('#message').addClass('displayed');
    }
  if (type == 'withdraw') {
    if (amount <= (accountBalances.savings + accountBalances.checking))
      accountBalances[account] -= amount;
    else {
      accountBalances[account];
    }
  }
  renderDOM();
};

// Bind our functions to each button
$('#checking-deposit').on('click', function() {
  transactionProcess('checking', +$('#checking-amount').val(), 'deposit');
}); $('#checking-withdraw').on('click', function() {
  transactionProcess('checking', +$('#checking-amount').val(), 'withdraw');
});

$('#savings-deposit').on('click', function() {
  transactionProcess('savings', +$('#savings-amount').val(), 'deposit');
});

$('#savings-withdraw').on('click', function() {
  transactionProcess('savings', +$('#savings-amount').val(), 'withdraw');
});

// Display the initial account balances
renderDOM();
});




// // on deposit button click this fucntion will be executed
// const addMoney = function () {
//   // current balance of the account
//   const prevBalance = $(this).sibilings("div.balance");
//   const result = prevBalance.text();
//
//   //current balance without $
//   var currentBalance = parseInt(result.replace("$", ""));
//
// }
//
//
//
// //
// // * Keep track of the checking and savings balances somewhere
// // * Add functionality so that a user can deposit money into one of the bank accounts.
// $(document).ready(function () {
//
// // first as a user lets setup 4 event listeners to buttons
// //for clicking on deposit
// $('#checking-deposit').on("click", addMoney )
// $('#savings-deposit').on("click", addMoney )
//
//
// //for clicking on withdrawal
// $('#checking-withdraw').on("click", subtractMoney)
// $('#savings-withdraw').on("click", subtractMoney)
//
//
//
//
//
//
//
//
// });
// // * Make sure you are updating the display and manipulating the HTML of the page
// // so a user can see the change.
// // * Add functionality so that a user can withdraw money from one of the bank accounts.
// // * Make sure you are updating the display and manipulating the HTML of the page
// // so a user can see the change.
// // * Make sure the balance in an account can't go negative. If a user tries to
// // withdraw more money than exists in the account, ignore the transaction.
// // * When the balance of the bank account is $0 the background of that bank account
// // should be red. It should be gray when there is money in the account.
// // * What happens when the user wants to withdraw more money from the checking
// // account than is in the account? These accounts have overdraft protection, so if
// // a withdrawal can be covered by the balances in both accounts, take the checking
// // balance down to $0 and take the rest of the withdrawal from the savings account.
// // If the withdrawal amount is more than the combined account balance, ignore it.
// // * Make sure there is overdraft protection going both ways.
// // * Are there ways to refactor your code to make it DRYer?
