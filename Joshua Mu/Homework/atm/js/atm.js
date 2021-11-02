// Checkings Functions

function depositCheckings() {
    console.log("Working");
    let deposit = $("#checking-deposit");
    let balance = $("#checking-balance").text();

    balance.replaceAll("$", "");
    balance = parseInt(balance);
    deposit = parseInt(deposit);

    let newBalance = balance + deposit;

    $("#checking-balance").html(`$${newBalance}`);
}

function withdrawCheckings() {
    let withdraw = $("#checking-deposit");
    let balance = $("#checking-balance").text();

    balance.replaceAll("$", "");
    balance = parseInt(balance);
    withdraw = parseInt(withdraw);

    let newBalance = balance - deposit;

    if (newBalance < 0) {
        console.log(`Current balance would be ${newBalance} if you withdrawed ${withdraw}.`);
    }

    else if (newBalance >= 0) {
        $("#checking-balance").html(`$${newBalance}`);
    }
}

$(document).ready(() => {
    $("#checking-deposit").on("click", function () {
        let deposit = $("#checking-amount").val();
        let balance = $("#checking-balance").html();

        let test = balance.replace("$", "");
        test = parseInt(test);
        deposit = parseInt(deposit);

        let newBalance = test + deposit;

        $("#checking-balance").html(`$${newBalance}`);
    });

    $("#checking-withdraw").on("click", function () {
        console.log("Test");
        let withdraw = $("#checking-amount").val();
        let balance = $("#checking-balance").html();

        let test = balance.replace("$", "");
        console.log(test);
        test = parseInt(test);
        withdraw = parseInt(withdraw);
        console.log(withdraw);

        let newBalance = test - withdraw;

        if (newBalance < 0) {
            console.log(`Current balance would be ${newBalance} if you withdrawed ${withdraw}.`);
        }

        else if (newBalance >= 0) {
            $("#checking-balance").html(`$${newBalance}`);
        }
    });

    $("#savings-withdraw").on("click", () => {
        console.log("Test");
        let withdraw = $("#savings-amount").val();
        let balance = $("#savings-balance").html();

        let test = balance.replace("$", "");
        console.log(test);
        test = parseInt(test);
        withdraw = parseInt(withdraw);
        console.log(withdraw);

        let newBalance = test - withdraw;

        if (newBalance < 0) {
            console.log(`Current balance would be ${newBalance} if you withdrawed ${withdraw}.`);
        }

        else if (newBalance >= 0) {
            $("#savings-balance").html(`$${newBalance}`);
        }
    })

    $("#savings-deposit").on("click", function () {
        let deposit = $("#savings-amount").val();
        let balance = $("#savings-balance").html();

        let test = balance.replace("$", "");
        test = parseInt(test);
        deposit = parseInt(deposit);

        let newBalance = test + deposit;

        $("#savings-balance").html(`$${newBalance}`);
    });
})


