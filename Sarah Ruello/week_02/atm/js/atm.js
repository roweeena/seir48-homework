$(document).ready(function () {
  let checkingBalance = 0;
  let savingsBalance = 0;
  updater();

  // Checking deposit function:
  $("#checking-deposit").click(function () {
    let checkingAmount = Number($("#checking-amount").val());
    checkingBalance += checkingAmount;
    updater();
  });

  // Savings deposit function:
  $("#savings-deposit").on("click", function () {
    let savingsAmount = Number($("#savings-amount").val());
    savingsBalance += savingsAmount;
    updater();
  });

  // Checking withdrawal function:
  $("#checking-withdraw").click(function () {
    let checkingAmount = Number($("#checking-amount").val());

    if (checkingAmount > checkingBalance + savingsBalance) {
      updater();
      console.log("not enough funds");
    } else if (
      checkingAmount >= checkingBalance &&
      checkingAmount <= savingsBalance + checkingBalance
    ) {
      let emptyOutChecking = checkingAmount - checkingBalance;
      savingsBalance -= emptyOutChecking;
      checkingBalance = 0;
      updater();
    } else {
      checkingBalance -= checkingAmount;
      updater();
    }
  });

  // Savings withdrawal function:
  $("#savings-withdraw").on("click", function () {
    let savingsAmount = Number($("#savings-amount").val());

    if (savingsAmount > savingsBalance + checkingBalance) {
      updater();
      console.log("not enough funds");
    } else if (
      savingsAmount >= savingsBalance &&
      savingsAmount <= checkingBalance + savingsBalance
    ) {
      let emptyOutSavings = savingsAmount - savingsBalance;
      checkingBalance -= emptyOutSavings;
      savingsBalance = 0;
      updater();
    } else {
      savingsBalance -= savingsAmount;
      updater();
    }
  });

  // Changes the balance display & background CSS:
  function updater() {
    $("#savings-balance").html("$" + savingsBalance);
    if (savingsBalance !== 0) {
      $("#savings-balance").removeClass("zero");
    } else {
      $("#savings-balance").addClass("zero");
    }

    $("#checking-balance").html("$" + checkingBalance);
    if (checkingBalance !== 0) {
      $("#checking-balance").removeClass("zero");
    } else {
      $("#checking-balance").addClass("zero");
    }
  }
});
