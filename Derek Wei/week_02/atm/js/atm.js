// #Title: ATM App
//
// ###Type:
// - Lab
//
// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.
//
// ###Objectives:
// - DOM selection, appending, removal, updating
//
// ###Specification:
//
// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

let balanceInChecking = 0;
let balanceInSavings = 0;

const checkingDeposit = function () {

  const depositAmount = parseFloat($('#checking-amount').val()); // parseFloat required to turn string into number
  balanceInChecking = Number($('#checking-balance').html().replace(/[^0-9.-]+/g, "")); // storing the number from the balance display ignoring the dollar sign
  $('#checking-balance').html(`$${balanceInChecking + depositAmount}`).removeClass('zero');
  balanceInChecking += depositAmount;
}

const checkingWithdraw = function () {

  const withdrawAmount = parseFloat($('#checking-amount').val());
  balanceInChecking = Number($('#checking-balance').html().replace(/[^0-9.-]+/g, ""));
  console.log(balanceInChecking)
  if (balanceInChecking === withdrawAmount) {
    $('#checking-balance').html(`$0`).addClass('zero');
    balanceInChecking = 0;
    console.log('equal')
  } else if (balanceInChecking < withdrawAmount && withdrawAmount < balanceInChecking + balanceInSavings) {
    $('#checking-balance').html(`$0`).addClass('zero');
    $('#savings-balance').html(`$${balanceInSavings - (withdrawAmount - balanceInChecking)}`);
    balanceInSavings -= withdrawAmount - balanceInChecking;
    balanceInChecking = 0;
    console.log('both')
  } else if (balanceInChecking + balanceInSavings <= withdrawAmount) {
    // $('#checking-balance').html(`$0`).addClass('zero');
    // $('#savings-balance').html(`$0`).addClass('zero');
    // balanceInChecking = 0;
    // balanceInSavings = 0;
    console.log('poor')
  } else {
    $('#checking-balance').html(`$${balanceInChecking - withdrawAmount}`);
    balanceInChecking -= withdrawAmount;
    console.log('enough')
  }
}


const savingsDeposit = function () {

  const depositAmount = parseFloat($('#savings-amount').val());
  balanceInSavings = Number($('#savings-balance').html().replace(/[^0-9.-]+/g, ""));
  $('#savings-balance').html(`$${balanceInSavings + depositAmount}`).removeClass('zero');
  balanceInSavings += depositAmount;
}

const savingsWithdraw = function () {

  const withdrawAmount = parseFloat($('#savings-amount').val());
  balanceInSavings = Number($('#savings-balance').html().replace(/[^0-9.-]+/g, ""));
  console.log(balanceInSavings)
  if (balanceInSavings === withdrawAmount) {
    $('#savings-balance').html(`$0`).addClass('zero');
    balanceInSavings = 0;
    console.log('equal')
  } else if (balanceInSavings < withdrawAmount && withdrawAmount < balanceInSavings + balanceInChecking) {
    $('#savings-balance').html(`$0`).addClass('zero');
    $('#checking-balance').html(`$${balanceInChecking - (withdrawAmount - balanceInSavings)}`);
    balanceInChecking -= withdrawAmount - balanceInSavings;
    balanceInSavings = 0;
    console.log('both')
  } else if (balanceInSavings + balanceInChecking <= withdrawAmount) {
    // $('#savings-balance').html(`$0`).addClass('zero');
    // $('#checking-balance').html(`$0`).addClass('zero');
    // balanceInSavings = 0;
    // balanceInChecking = 0;
    console.log('poor')
  } else {
    $('#savings-balance').html(`$${balanceInSavings - withdrawAmount}`);
    balanceInSavings -= withdrawAmount;
    console.log('enough')
  }
}

$(document).ready(function () {

  $('.balance').addClass('zero');
  $('#checking-deposit').on('click', checkingDeposit);
  $('#checking-withdraw').on('click', checkingWithdraw);
  $('#savings-deposit').on('click', savingsDeposit);
  $('#savings-withdraw').on('click', savingsWithdraw);

});

// limit user input: only positive numbers to 2 decimal places
// if ( isNaN($('#checking-amount').val()) )
