const shoppingCart = {
    banana: 1.25,
    handkerchief: 0.99,
    Tshirt: 25.01,
    apple: 0.60,
    nalgene: 10.34,
    proteinShake: 22.36
};

//console.log(Object.keys(shoppingCart).toString());

function CashRegister(_cartContents)
{
    let _totalSum = 0;
    for (let key in _cartContents)
    {
        //Checks that the inputted value has a required property
        //Key returns an array of strings containing an objects keys???
        if (_cartContents.hasOwnProperty(key))
        {
            //Stores key value in "value"
            let value = _cartContents[key];
            _totalSum = _totalSum + value;
        }
    }

    return _totalSum;
}

console.log(CashRegister(shoppingCart));

