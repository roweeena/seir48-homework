
//Keep track of the checking and savings balances somewhere


let $checkingBalance = 0;
let $savingsBalance = 0;

let amount1 = [];
let amount2 = [];
let amount3 = [];
let amount4 = [];


//Add functionality so that a user can deposit money into one of the bank accounts.



$(document).ready(function () {


  //CHECKING ATM
  $('#checking-deposit').on('click', function () {
    amount1 = $('#checking-amount').val();

    $checkingBalance += Number(amount1);
  $('#checking-balance').html('$' + $checkingBalance );

  if ($checkingBalance > 0 === true){
    $('#checking-balance').removeClass('zero')
  };
  });
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

  $('#checking-withdraw').on('click', function () {

      amount2 = $('#checking-amount').val();

    if (amount2 <= $checkingBalance){
      $checkingBalance -= Number(amount2);
      $('#checking-balance').html('$' + $checkingBalance );

    } else if (amount2 <= $checkingBalance + $savingsBalance){  //overdraft protection
        let checkOver = amount2 - $checkingBalance;
        let checkOver2 = $savingsBalance - checkOver;
          $('#checking-balance').html('$' + 0 ).addClass('zero');
            $savingsBalance -= Number(checkOver2);
          $('#savings-balance').html('$' + checkOver2 );

    } else {

      console.log('insuffient funds');
    };

    if ($checkingBalance === 0){
      $('#checking-balance').addClass('zero');
    };


  });

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  //SAVINGS ATM
  $('#savings-deposit').on('click', function () {
    amount3 = $('#savings-amount').val();

    $savingsBalance += Number(amount3);
  $('#savings-balance').html('$' + $savingsBalance );

    if($savingsBalance > 0) {
      $('#savings-balance').removeClass('zero')
    };
  });
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  $('#savings-withdraw').on('click', function () {

    amount4 = $('#savings-amount').val();

    if (amount4 <= $savingsBalance){
      $savingsBalance -= Number(amount4);
      $('#savings-balance').html('$' + $savingsBalance );

    } else if (amount4 <= $savingsBalance + $checkingBalance){  //overdraft protection
    let savOver = amount4 - $savingsBalance;
    let savOver2 = $checkingBalance - savOver;
      $('#savings-balance').html('$' + 0 ).addClass('zero');
        $checkingBalance -= Number(savOver2);
      $('#checking-balance').html('$' + savOver2 );

    } else {
      console.log('insuffient funds');
      };
    if ($savingsBalance === 0) {
          $('#savings-balance').addClass('zero');
        };


  });



});
