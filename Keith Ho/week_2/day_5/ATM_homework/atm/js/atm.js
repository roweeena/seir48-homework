const zero = function() {
  $(".zero").removeClass("zero");

  if (+$("#checking-balance").html().slice(1) <= 0) {
    $("#checking-balance").addClass("zero");
  }

  if (+$("#savings-balance").html().slice(1) <= 0) {
    $("#savings-balance").addClass("zero");
  }
};

$(document).ready(function(){

  $("#checking-deposit").click(function(){
    zero();
    const balance = $("#checking-balance").html().slice(1);
    const checkingAmount = $("#checking-amount").val();
    const checkingBalance = +balance + +checkingAmount;
    if ( checkingBalance >= 0 ) {
      $("#checking-balance").html(`$${checkingBalance}`);
    }
    zero();
  });

  $("#checking-withdraw").click(function(){
    zero();
    const balance = $("#checking-balance").html().slice(1);
    const checkingAmount = $("#checking-amount").val();
    const checkingBalance = +balance - +checkingAmount;
    const savingsBalance = $("#savings-balance").html().slice(1);
    const totalBalance = +balance + +savingsBalance;

    if (checkingBalance >= 0) {
      $("#checking-balance").html(`$${checkingBalance}`);
    } else if (totalBalance - +checkingAmount >= 0) {
      $("#checking-balance").html("$0");
      $("#savings-balance").html(`$${totalBalance - +checkingAmount}`);
    }
    zero();
  });

  $("#savings-withdraw").click(function(){
    zero();
    const balance = $("#savings-balance").html().slice(1);
    const savingsAmount = $("#savings-amount").val();
    const savingsBalance = +balance - +savingsAmount;
    const checkingBalance = $("#checking-balance").html().slice(1);
    const totalBalance = +balance + +checkingBalance;
    if (savingsBalance >= 0) {
      $("#savings-balance").html(`$${savingsBalance}`);
    } else if (totalBalance - +savingsAmount >= 0) {
      $("#savings-balance").html("$0");
      $("#checking-balance").html(`$${totalBalance - +savingsAmount}`);
    }
    zero();
  });

  $("#savings-deposit").click(function(){
    zero();
    const balance = $("#savings-balance").html().slice(1);
    const savingsAmouont = $("#savings-amount").val();
    const savingsBalance = +balance + +savingsAmouont;
    if ( savingsBalance >= 0 ) {
      $("#savings-balance").html(`$${savingsBalance}`);
    }
    zero();
  });
});
