const accounts = [];

const account1 = {
    name: "George Pathman",
    balance: 2000
};
const account2 = {
    name: "Jonathan Lin",
    balance: 2000
};
const account3 = {
    name: "Picasso Di Caprio",
    balance: 2000
};
const account4 = {
    name: "Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso ",
    balance: 2000
};

function AddAccounts(_account)
{
    accounts.push(_account);
    return `A card held by ${_account.name} with a balance of ${_account.balance} has been added to the database`;
}

console.log(AddAccounts(account1));
console.log(AddAccounts(account2));
console.log(AddAccounts(account3));
console.log(AddAccounts(account4));

function DepositFunds(_accountID, _value)
{
    console.log(accounts[_accountID].balance);
    accounts[_accountID].balance = accounts[_accountID].balance + _value; 

    return `You have deposited $${_value}. Your current balance is $${accounts[_accountID].balance}`
}

console.log(DepositFunds(1, 100));

function WithdrawFunds(_accountID, _value)
{
    let _currentBalance = accounts[_accountID].balance - _value;
    console.log(_currentBalance);
    if (_currentBalance < 0)
    {
        return `You have attempted to withdraw $${_value}. Your account currently contains $${accounts[_accountID].balance}, making this withdrawal impossible`;
    }

}

console.log(WithdrawFunds(1, 200000000));
