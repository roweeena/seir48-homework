//The atm.
$(document).ready(function(){

//Setting the initial conditions.
initialBalance = 0;
checkingBalance = Math.floor(initialBalance);

initialSavingsBalance = 0;
checkingSavingsBalance = Math.floor(initialSavingsBalance);

//Red or grey background-color function based on balance.
const redCheck = function (){
if (checkingBalance === 0){
  $('#checking-balance').css('background-color','red');
}
if (checkingBalance !== 0){
  $(`#checking-balance, #savings-balance`).css('background-color','#E3E3E3');
}
if (checkingSavingsBalance === 0){
  $('#savings-balance').css('background-color','red');
}
if (checkingSavingsBalance !== 0){
  $(`#savings-balance, #savings-balance`).css('background-color','#E3E3E3');
}
};
redCheck(); //call the function from the start to set the color.



//Checking Account.
//Check Account Depositing.
$("#checking-deposit").on('click', function (){
  if ($('#checking-amount').val() > 0){
    const depAmount = $('#checking-amount').val();
    const numAmount = parseInt(depAmount);
    checkingBalance += numAmount;
    const amount = $('#checking-balance').text('$' + checkingBalance);
    console.log(checkingBalance);
    redCheck();
  }
});
//Check Account Withdrawal.
$("#checking-withdraw").on('click', function (){
  if ($('#checking-amount').val() <= checkingBalance && $('#checking-amount').val() > 0){
    const withAmount = $('#checking-amount').val();
    checkingBalance -= withAmount;
    console.log(checkingBalance);
    $('#checking-balance').text(`$` + checkingBalance);
    redCheck();
  }
//The overdraft (from check account) deducts from the other account (savings).
  else if ($('#checking-amount').val() > checkingBalance && $('#checking-amount').val() <= checkingSavingsBalance ){
    const excess = checkingBalance - $('#checking-amount').val()
    checkingSavingsBalance += excess
    checkingBalance = 0; //set the savings to zero.
    $('#savings-balance').text(`$` + checkingSavingsBalance);
    $('#checking-balance').text(`$` + checkingBalance);
    redCheck();
  }
});


//Savings Account.
//Savings Account Depositing.
$("#savings-deposit").on('click', function (){
  if ($('#savings-amount').val() > 0){
    const depAmount = $('#savings-amount').val();
    const numAmount = parseInt(depAmount);
    checkingSavingsBalance += numAmount;
    const amount = $('#savings-balance').text('$' + checkingSavingsBalance);
    console.log(checkingSavingsBalance);
    redCheck();
  }
});
//Savings Account Withdrawal.
$("#savings-withdraw").on('click', function (){
  if ($('#savings-amount').val() <= checkingSavingsBalance && $('#savings-amount').val() > 0){
    const withAmount = $('#savings-amount').val();
    checkingSavingsBalance -= withAmount;
    console.log(checkingSavingsBalance);
    $('#savings-balance').text(`$` + checkingSavingsBalance);
    redCheck();
  }
  //The overdraft (from savings) deducts from the other account (checking).
  else if ($('#savings-amount').val() > checkingSavingsBalance && $('#savings-amount').val() <= checkingBalance ){
    const excess = checkingSavingsBalance - $('#savings-amount').val()
    //excess has to be added to the checking balance.
    checkingBalance += excess
    checkingSavingsBalance = 0; //set the savings to zero.
    $('#savings-balance').text(`$` + checkingSavingsBalance);
    $('#checking-balance').text(`$` + checkingBalance);
    redCheck();
  }
});


}); //document ready closing.



































//The anchor.
