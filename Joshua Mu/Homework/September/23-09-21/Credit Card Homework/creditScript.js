const validCredit1 = "9999-9999-8888-0000";
const validCredit2 = "6666-6666-6666-1666";
const invalidCredit1 = "a923-3211-9c01-1112";
const invalidCredit2 = "4444-4444-4444-4444";
const invalidCredit3 = "1111-1111-1111-1110";
const invalidCredit4 = "6666-6666-6666-6661";

function IsCreditCardValid(_creditNumber) {
    let lastNumber = _creditNumber.slice(-1);
    lastNumber = parseInt(lastNumber);
    let previousLetter = _creditNumber[0];
    let totalSum = 0;
    let reoccuringNumber = 0;
    let hasLetters = false;

    for (let i = 0; i < _creditNumber.length; i++) {
        convertToNum = parseInt(_creditNumber[i]);

        if (isNaN(convertToNum) && _creditNumber[i] !== "-") {
            hasLetters = true;
            break;
        }
        if (_creditNumber[i] !== "-" && !isNaN(convertToNum)) {
            totalSum = totalSum + convertToNum;
        }
        if (_creditNumber[i] === previousLetter) {
            reoccuringNumber++;
        }
    }

    if (hasLetters === true) {
        return `${_creditNumber.toString()} is not a valid credit number`;
    }
    else if (totalSum < 16) {
        return `${_creditNumber.toString()} is not a valid credit number`;
    }
    else if ((reoccuringNumber + 3) === _creditNumber.length) {
        return `${_creditNumber.toString()} is not a valid credit number`;
    }
    else if (lastNumber % 2 === 0) {
        return (`${_creditNumber.toString()} is a valid credit number`);
    }
}

console.log(IsCreditCardValid(validCredit1));
console.log(IsCreditCardValid(validCredit2));
console.log(IsCreditCardValid(invalidCredit1));
console.log(IsCreditCardValid(invalidCredit2));
console.log(IsCreditCardValid(invalidCredit3));
console.log(IsCreditCardValid(invalidCredit4));