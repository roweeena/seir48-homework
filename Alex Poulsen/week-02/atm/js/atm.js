$(document).ready(function() {

  // Global variables for storing account balances
  let checkingBal = 0;
  let savingsBal = 0;

  //Updates balance html for display
  const updateBalance = function() {
    $('#checking-balance').html(`$${checkingBal}`);
    $('#savings-balance').html(`$${savingsBal}`);
  };

  updateBalance();

  // Function that checks account balance - if balance is zero changes background colour to red
  const checkBalance = function() {

    if ( checkingBal === 0 ) {
      $('#checking').addClass('zero');
    }
    if ( checkingBal > 0 && $('#checking').hasClass('zero')) {
      $('#checking').removeClass('zero');
      $('#checking').addClass('balance');
    }
    if ( savingsBal === 0 ) {
      $('#savings').addClass('zero');
    }
    if ( savingsBal > 0 && $('#savings').hasClass('zero')) {
      $('#savings').removeClass('zero');
      $('#savings').addClass('balance');
    }

  };

  //Deposit function
  const deposit = function (event) {

    const account = this.id.split('-')[0];

    const amount = $(`#${account}-amount`).val();

    if (account === 'checking') {

      checkingBal += Number(amount);
      $('#checking-balance').html(`$${checkingBal}`);
      $(`#${account}-amount`).val('');
      checkBalance();
    }
    else {

      savingsBal += Number(amount);
      $('#savings-balance').html(`$${savingsBal}`);
      $(`#${account}-amount`).val('');
      checkBalance();
    };

  };

  //Functions connecting deposit buttons to deposit functions
  $('#checking-deposit').click( deposit );

  $('#savings-deposit').click( deposit );

  //Withdrawal function
  const withdraw = function ( event ) {

    //gets which account is being withdrawn from
    const account = this.id.split('-')[0];

    const amount = $(`#${account}-amount`).val();

    //removes the dollar sign from the string
    let accBal = $(`#${account}-balance`).html().substring(1);

    //Withdrawal protection - prevents < 0 balances
    if (amount > Number(accBal)) {

      if ( amount > checkingBal + savingsBal) {
      checkBalance();
      return;
      }

      //overdraft protection - removes funds from both accounts
      else {

        if (account === 'checking') {

          let remainFunds = amount - checkingBal;
          savingsBal -= remainFunds;
          checkingBal = 0;
          updateBalance();
          checkBalance();
          $(`#${account}-amount`).val('');
          return;
        }

        else {

          let remainFunds = amount - savingsBal;
          checkingBal -= remainFunds;
          savingsBal = 0;
          updateBalance();
          checkBalance();
          $(`#${account}-amount`).val('');
          return;
        }
      }
    };

    if (account === 'checking') {

      checkingBal -= Number(amount);
      $('#checking-balance').html(`$${checkingBal}`);
      $(`#${account}-amount`).val('');
      checkBalance();
    }
    else {

      savingsBal -= Number(amount);
      $('#savings-balance').html(`$${savingsBal}`);
      $(`#${account}-amount`).val('');
      checkBalance();
    };

  };

  // Functions connecting withdraw buttons to withdraw functions
  $('#checking-withdraw').click( withdraw );

  $('#savings-withdraw').click( withdraw);

  checkBalance();

});



// * Keep track of the checking and savings balances somewhere - DONE
// * Add functionality so that a user can deposit money into one of the bank accounts. - DONE
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change. - DONE
// * Add functionality so that a user can withdraw money from one of the bank accounts. -done
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change. DONE
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction. DONE
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account. DONE
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
