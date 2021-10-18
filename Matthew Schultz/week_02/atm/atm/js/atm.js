$(document).ready(function() {

let checkTotal = 0;
let savingsTotal = 0;

const backgroundColor = function () {
  if (checkTotal === 0) {
    $('#checking-balance').css('background-color',  '#F52F4F');
  } else {
    $('#checking-balance').css('background-color',  '#E3E3E3');
  }
  if (savingsTotal === 0) {
    $('#savings-balance').css('background-color',  '#F52F4F');
  } else {
    $('#savings-balance').css('background-color',  '#E3E3E3');
  }
}

$('#checking-deposit').on('click', function() {
  let deposit = parseInt($('#checking-amount').val());
  checkTotal = checkTotal + deposit;
  $('#checking-balance').text('$' + checkTotal);
  backgroundColor();
});

$('#checking-withdraw').on('click', function() {
  let withdrawal = parseInt($('#checking-amount').val());
  if (checkTotal - withdrawal >= 0) {
    checkTotal = checkTotal - withdrawal;
    $('#checking-balance').text('$' + checkTotal);
  } else if (checkTotal + savingsTotal >= withdrawal) {
    savingsTotal = savingsTotal - (withdrawal - checkTotal);
    checkTotal = 0;
    $('#checking-balance').text('$' + checkTotal);
    $('#savings-balance').text('$' + savingsTotal);
  }
  backgroundColor();
});

$('#savings-deposit').on('click', function() {
  let deposit = parseInt($('#savings-amount').val());
  savingsTotal = savingsTotal + deposit;
  $('#savings-balance').text('$' + savingsTotal);
  backgroundColor();
});

$('#savings-withdraw').on('click', function() {
  let withdrawal = parseInt($('#savings-amount').val());
  if (savingsTotal - withdrawal >= 0) {
    savingsTotal = savingsTotal - withdrawal;
    $('#savings-balance').text('$' + savingsTotal);
  } else if (checkTotal + savingsTotal >= withdrawal) {
    checkTotal = checkTotal - (withdrawal - savingsTotal);
    savingsTotal = 0;
    $('#checking-balance').text('$' + checkTotal);
    $('#savings-balance').text('$' + savingsTotal);
  }
  backgroundColor();
});


});

//Get value of checking-amount
//Add to checkTotal
//Display checking-balance as checkTotal


// if (checkTotal === 0) {
//   $('#checking-balance').css('background-color',  'red');
// } else {
//   $('#checking-balance').css('background-color',  'black');
// }
//
// if (savingsTotal === 0) {
//   $('#savings-balance').css('background-color',  'red');
// } else {
//   $('#savings-balance').css('background-color',  'black');
// }


// const depositFunds = function() {
//   let deposit = parseInt($('#checking-amount').val());
//   checkTotal = checkTotal + deposit;
//   $('#checking-balance').text('$' + checkTotal);
//   backgroundColor(checkTotal, 'checking');
// }

// const depositFunds = function(total, account) {
//   let deposit = parseInt($(`#${account}-amount`).val());
//   total = total + deposit;
//   $(`#${account}-balance`).text(`$${total}`);
//   backgroundColor(total, account);
// };
//
//
// $('#checking-deposit').on('click', function() {
//   depositFunds(checkTotal, 'checking');
// });
//
// $('#checking-withdraw').on('click', function() {
//   depositFunds(savingsTotal, 'savings');
// });
//
// $('#savings-deposit').on('click', function() {
//   depositFunds(savingsTotal, 'savings');
// });
//
// const backgroundColor = function (total, account) {
//   if (total === 0) {
//     $(`#${account}-balance`).css('background-color',  '#F52F4F');
//   } else {
//     $(`#${account}-balance`).css('background-color',  '#E3E3E3');
//   }
// };
