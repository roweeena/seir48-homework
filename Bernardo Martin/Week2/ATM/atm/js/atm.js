$(document).ready(function (){
  let currentDep = 0;
  var currentSave = 0;
//Making a deposit in the checking account
  $('#checking-deposit').on('click' , function () {
    let $amountDep = parseInt($('#checking-amount').val());
    currentDep = currentDep + $amountDep;
    $('#checking-balance').text(`$${currentDep}`);
    if (currentDep > 0) {
      $('div.balance#checking-balance').removeClass('zero');
    }
  });
//Widrawing from checking account
  $('#checking-withdraw').on('click' , function () {
    let $amountWith = parseInt($('#checking-amount').val());
    if (currentDep < $amountWith ) {
      if ((currentDep + currentSave) < $amountWith) {
        alert(`Insuficient funds.`) //Can't withdraw more than deposited amount
      } if ((currentDep + currentSave) >= $amountWith) {
          let difneeded = $amountWith - currentDep
          currentDep = 0;
          $('#checking-balance').text(`$${currentDep}`);
          currentSave = currentSave - difneeded;
          $('#savings-balance').text(`$${currentSave}`)
        };

    } if (currentDep >= $amountWith){
        currentDep = currentDep - $amountWith;
        $('#checking-balance').text(`$${currentDep}`);
      } if (currentDep === 0 ) {
          $('div.balance#checking-balance').addClass('zero');
        } if (currentSave === 0 ) {
                $('div.balance#savings-balance').addClass('zero');
          };
  });

  $('#savings-deposit').on('click' , function () {
    let $saveAmountDep = parseInt($('#savings-amount').val());
    currentSave = currentSave + $saveAmountDep;
    $('#savings-balance').text(`$${currentSave}`);
    //If saving are greater than O, then it shouldn't be red
    if (currentSave > 0) {
      $('div.balance#savings-balance').removeClass('zero');
    };
  });

  $('#savings-withdraw').on('click' , function () {
    let $saveAmountWith = parseInt($('#savings-amount').val());
    if (currentSave < $saveAmountWith) {
      if ((currentDep + currentSave) < $saveAmountWith) {
          alert('Insuficient funds.')
      } if ((currentDep + currentSave) >= $saveAmountWith) {
          let difneededSave = $saveAmountWith - currentSave;
          currentSave = 0;
          $('#savings-balance').text(`$${currentSave}`);
          currentDep = currentDep - difneededSave;
          $('#checking-balance').text(`$${currentDep}`);
        };
    } if ($saveAmountWith <= currentSave) {
        currentSave = currentSave - $saveAmountWith;
        $('#savings-balance').text(`$${currentSave}`)
    }  if (currentSave === 0 ) {
            $('div.balance#savings-balance').addClass('zero');
      } if (currentDep === 0 ) {
              $('div.balance#checking-balance').addClass('zero');
        };
    });
  });
