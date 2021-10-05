// Contains all backend bank-related functions
const BANK = {
  cheque: 0,
  savings: 0,

  deposit: function (accountName) {
    const amount = DOM[accountName + 'Input'];
    this[accountName] += amount;
  },

  withdraw: function (accountName) {
    const amount = DOM[accountName + 'Input'];

    if (amount <= this[accountName]) {
      this[accountName] -= amount;
    }
    // Overdraft; withdraws from the other account if possible
    else if (amount <= this.cheque + this.savings) {
      const otherAccount = accountName === 'cheque' ? 'savings' : 'cheque';
      this[otherAccount] -= amount - this[accountName];
      this[accountName] = 0;
    }
  }
};

// Contains all frontend DOM-related functions
const DOM = {
  // The current input values
  chequeInput: 0,
  savingsInput: 0,

  // Re-renders account balance UIs
  updateBalanceDisplay: function (accountName) {
    const $div = $(`#${accountName}-balance`);
    $div.text(`$${BANK[accountName]}`);
    if (BANK[accountName] === 0) {
      $div.addClass('zero');
    } else {
      $div.removeClass('zero');
    }
  },

  enableWithdrawButton: function (acccountName) {
    $(`#${acccountName}-withdraw`).prop('disabled', false);
  },

  disableWithdrawButton: function (acccountName) {
    $(`#${acccountName}-withdraw`).prop('disabled', true);
  }
};

// Event handlers
const HANDLER = {
  depositButton: function (accountName) {
    BANK.deposit(accountName);
    DOM.updateBalanceDisplay(accountName);
    this.toggleWithdrawButtons();
  },

  withdrawButton: function (accountName) {
    BANK.withdraw(accountName);
    DOM.updateBalanceDisplay(accountName);
    this.toggleWithdrawButtons();
  },

  // TODO: Prevent non-numbers from being typed
  keyUp: function (accountName) {
    const inputAmount = Number( $(`#${accountName}-amount`).val() );
    DOM[accountName + 'Input'] = inputAmount;
    this.toggleWithdrawButtons();
  },

  // Enables/disables withdraw buttons whenever input or balance changes
  toggleWithdrawButtons: function () {
    if (DOM.chequeInput <= BANK.cheque + BANK.savings && DOM.chequeInput > 0) {
      DOM.enableWithdrawButton('cheque');
    } else {
      DOM.disableWithdrawButton('cheque');
    }

    if (DOM.savingsInput <= BANK.cheque + BANK.savings && DOM.savingsInput > 0) {
      DOM.enableWithdrawButton('savings');
    } else {
      DOM.disableWithdrawButton('savings');
    }
  }
};

// Event listeners
$(document).ready(function () {
  $('#cheque-amount').on('keyup', function () {
    HANDLER.keyUp('cheque');
  });

  $('#cheque-deposit').on('click', function () {
    HANDLER.depositButton('cheque');
  });

  $('#cheque-withdraw').on('click', function () {
    HANDLER.withdrawButton('cheque');
  });

  $('#savings-amount').on('keyup', function (event) {
    HANDLER.keyUp('savings');
  });

  $('#savings-deposit').on('click', function () {
    HANDLER.depositButton('savings');
  });

  $('#savings-withdraw').on('click', function () {
    HANDLER.withdrawButton('savings');
  });
});
