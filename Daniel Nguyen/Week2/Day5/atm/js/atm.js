const BANK = {
  cheque: 0,
  savings: 0,

  deposit: function (accountName) {
    const amount = DOM.getInputValue(accountName);
    this[accountName] += amount;
    DOM.updateBalance(accountName);
  },

  withdraw: function (accountName) {
    const amount = DOM.getInputValue(accountName);
    if (amount <= this[accountName]) {
      this[accountName] -= amount;
      DOM.updateBalance(accountName);
    }
  },
};

const DOM = {
  getInputValue: function (accountName) {
    return Number( $(`#${accountName}-amount`).val() );
  },

  updateBalance: function (accountName) {
    const $div = $(`#${accountName}-balance`);
    $div.text(`$${BANK[accountName]}`);
    if (BANK[accountName] === 0) {
      $div.addClass('zero');
      // this.disableWithdrawButton(accountName);
    } else {
      $div.removeClass('zero');
      // this.enableWithdrawButton(accountName);
    }
  },

  disableWithdrawButton: function (accountName) {
    $(`#${accountName}-withdraw`).prop('disabled', false);
  },

  enableWithdrawButton: function (accountName) {
    $(`#${accountName}-withdraw`).prop('disabled', true);
  },
};

// Event listeners
$(document).ready(function () {
  $('#cheque-deposit').on('click', function() {
    BANK.deposit('cheque');
  });

  $('#cheque-withdraw').on('click', function() {
    BANK.withdraw('cheque');
  });

  $('#savings-deposit').on('click', function() {
    BANK.deposit('savings');
  });

  $('#savings-withdraw').on('click', function() {
    BANK.withdraw('savings');
  });





  $('button').on('click', function() {
    console.log('clicked');
  });

  $('button').on('click', console.log('clicked'));






});


$(document).ready(function () {
  $('#cheque-deposit').on('click', function() {
    console.log('clicked');
  });
});
