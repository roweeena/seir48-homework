// Contains all backend bank-related functions
const BANK = {
  cheque: 0,
  savings: 0,

  deposit: function (accountName) {
    const amount = DOM.getInputValue(accountName);
    this[accountName] += amount;
    DOM.updateBalanceDisplay(accountName);
  },

  withdraw: function (accountName) {
    const amount = DOM.getInputValue(accountName);

    if (amount <= this[accountName]) {
      this[accountName] -= amount;
      DOM.updateBalanceDisplay(accountName);
    }
    // Overdraft; withdraws from the other account if possible
    else if (amount <= this.cheque + this.savings) {
      const otherAccount = accountName === 'cheque' ? 'savings' : 'cheque';
      this[otherAccount] -= amount - this[accountName];
      this[accountName] = 0;
      DOM.updateBalanceDisplay(accountName);
      DOM.updateBalanceDisplay(otherAccount);
    }
  }
};

// Contains all frontend DOM-related functions
const DOM = {
  getInputValue: function (accountName) {
    return Number( $(`#${accountName}-amount`).val() );
  },

  updateBalanceDisplay: function (accountName) {
    const $div = $(`#${accountName}-balance`);
    $div.text(`$${BANK[accountName]}`);
    if (BANK[accountName] === 0) {
      $div.addClass('zero');
    } else {
      $div.removeClass('zero');
    }
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
});
