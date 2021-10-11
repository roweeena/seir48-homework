//setColor takes in an account and adds the class of zero to make the background red if the balance is $0
const setColor = (account = 'checking') => {
	if ($(`div#${account}-balance`).text() === '$0') {
	$(`div#${account}-balance`).addClass('zero');
	}
	else {
	$(`div#${account}-balance`).removeClass('zero');
	}
}

//getBalance retrieves the current balance of an account, strips out the '$' and converts the value to an integer.
const getBalance = (account) => {
	let balance = $(`div#${account}-balance`).text();
	let regex = /\d+/g; 
	let found = balance.match(regex);
	let initialAmount = parseInt(found[0]);
	return initialAmount;
}

// getInput retrieves the input from a specified account
const getInput = (account) => {
	return parseInt($(`input#${account}-amount`).val());
}

//Calling set colour on page load as initial values are zero and therefore the background should be red
setColor();
setColor('savings');

//deposit takes in an account and amount and adds that amount to that account using the input field as a default for amount
const deposit = (account = 'checking', amount = getInput(account)) => {
	let newAmount = `$${amount + getBalance(account)}`;
	$(`div#${account}-balance`).html(newAmount);
}

$('input#checking-deposit').on('click', function() {
	deposit();
	setColor();
});

$('input#savings-deposit').on('click', function() {
	deposit('savings');
	setColor('savings');
});

// withdraw takes an account and an amount. It sets the specified account as primary and declares the alternative account.
// It then checks to see if there is enough money in the primary account to make the withdrawal. If so, it processes the withdrawal.
// If there are insufficient funds in the primary account it checks whether the sum of both accounts is greater than the withdrawal amount.
// If this is true then it processes the withdrawal and changes the state of both account balances appropriately. 

const withdraw = (account = 'checking', amount = getInput(account)) => {
	let primaryBalance = 0;
	let altBalance = 0;
	let altAccount = '';
	if (account === 'checking') {
		primaryBalance = getBalance('checking')
		altAccount = 'savings'
		altBalance = getBalance('savings')
		}
	else {
		primaryBalance = getBalance('savings')
		altAccount = 'checking'
		altBalance = getBalance('checking')
	}	

	if (primaryBalance - amount >= 0) {
		$(`div#${account}-balance`).html(`$${primaryBalance - amount}`);
	}
	else if (primaryBalance + altBalance - amount >= 0) {
		let diff = primaryBalance - amount;
		$(`div#${account}-balance`).html(`$0`);
		$(`div#${altAccount}-balance`).html(`$${getBalance(altAccount) + diff}`);
	}
}

$('input#checking-withdraw').on('click', function() {
	withdraw();
	setColor()
	setColor('savings');
});

$('input#savings-withdraw').on('click', function() {
	withdraw('savings');
	setColor();
	setColor('savings');
});
