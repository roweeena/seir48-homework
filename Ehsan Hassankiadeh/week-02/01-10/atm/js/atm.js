$(document).ready(function () {
  //   console.log(amountValue);
  $("#checking-deposit").on("click", function () {
    const moneyIn = $("#checking-amount").val();
    let amountValue = $("#checking-balance").html();
    let total = parseInt(moneyIn) + parseInt(amountValue.slice(1));
    console.log(total);
    $("#checking-balance").html("$" + total);
    $("#checking-balance").removeClass("zero");
    $("#checking-amount").val("");
  });
  $("#savings-deposit").on("click", function () {
    const moneyIn = $("#savings-amount").val();
    let amountValue = $("#savings-balance").html();
    let total = parseInt(moneyIn) + parseInt(amountValue.slice(1));
    $("#savings-balance").html("$" + total);
    $("#savings-balance").removeClass("zero");
    $("#savings-amount").val("");
  });
  $("#checking-withdraw").on("click", function () {
    const moneyOut = parseInt($("#checking-amount").val());
    let amountValue = parseInt($("#checking-balance").html().slice(1)); //checking amount
    let amountValueSaving = parseInt($("#savings-balance").html().slice(1)); // saving amount
    // console.log(amountValueSaving);
    let total = amountValue - moneyOut;
    let subTotal = amountValue + amountValueSaving;
    if (total >= 0) {
      $("#checking-balance").html("$" + total);
      $("#checking-balance").removeClass("zero");
      $("#checking-balance").addClass("balance");
    }
    if (total < 0 && subTotal > moneyOut) {
      $("#checking-balance").html("$" + 0);
      $("#savings-balance").html("$" + (subTotal - moneyOut));
      $("#checking-balance").removeClass("zero");
      $("#checking-balance").addClass("balance");
    }
    if (total < 0 || total === 0) {
      $("#checking-balance").addClass("zero");
    }
    $("#checking-amount").val("");
  });

  $("#savings-withdraw").on("click", function () {
    const moneyOut = parseInt($("#savings-amount").val());
    let amountValue = parseInt($("#savings-balance").html().slice(1)); //saving amount
    let amountValueChecking = parseInt($("#checking-balance").html().slice(1)); // checking amount
    // console.log(amountValueSaving);
    let total = amountValue - moneyOut;
    let subTotal = amountValue + amountValueChecking;
    if (total >= 0) {
      $("#savings-balance").html("$" + total);
      $("#savings-balance").removeClass("zero");
      $("#savings-balance").addClass("balance");
    }
    if (total < 0 && subTotal > moneyOut) {
      $("#savings-balance").html("$" + 0);
      $("#checking-balance").html("$" + (subTotal - moneyOut));
      $("#savings-balance").removeClass("zero");
      $("#savings-balance").addClass("balance");
    }
    if (total < 0 || total === 0) {
      $("#savings-balance").addClass("zero");
    }

    $("#savings-amount").val("");
  });
});
// console.log("EEEE");
