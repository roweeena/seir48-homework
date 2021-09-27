// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//

const validateCreditCard = function(number) {
  const numWithoutDash = number.replace(/-/g, "");

  let numArr = [];
  let sum = 0;

  for ( let i = 0; i < numWithoutDash.length; i++) {
    numArr.push(+numWithoutDash.charAt(i));
  }
  for ( let a = 0; a < numArr.length; a++ ) {
    sum = sum + numArr[a];
  }

  const isDiff = function(arr) {
    for ( let n = 0; n < arr.length; n++ ) {
      for ( let k = n + 1; k < arr.length; k++ ) {
        if ( arr[n] !== arr[k]) {
          return true;
        }
      }
    }
    return false;
  };

  // if (
  //     (numArr.length === 16) &&
  //     (!numArr.some(isNaN)) &&
  //     (numArr[ numArr.length -1 ] % 2 === 0) &&
  //     (sum > 16) &&
  //     (isDiff(numArr))
  //   ) {
  //     return true;
  // } else {
  //   return false;
  // }

  //#Bonus

  if ( numArr.length !== 16 ) {
    return `{ valid: ${false}, number: "${number}", error: "wrong_length" }`;
  } else if ( numArr.some(isNaN) ) {
    return `{ valid: ${false}, number: "${number}", error: "invalid_charaters" }`;
  } else if ( numArr[ numArr.length -1 ] % 2 !== 0 ) {
    return `{ valid: ${false}, number: "${number}", error: "odd_final_number" }`;
  } else if ( sum <= 16 ) {
    return `{ valid: ${false}, number: "${number}", error: "sum_less_than_16" }`;
  } else if ( !isDiff(numArr) ) {
    return `{ valid: ${false}, number: "${number}", error: "only_one_type_of_number" }`;
  } else {
    return `{ valid: ${true}, number: "${number}" }`;
  }

}

console.log( validateCreditCard("9999-9999-8888-0000") );
console.log( validateCreditCard("6666-6666-6666-6661") );
console.log( validateCreditCard("6666-6666-6666-1666") );
console.log( validateCreditCard("a923-3211-9c01-1112") );
console.log( validateCreditCard("4444-4444-4444-4444") );
console.log( validateCreditCard("1111-1111-1111-1110") );
//
// Double Bonus:
// Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const checkDigit = function(cardNum) {
  let numArr = [];

  const numWithoutDash = cardNum.replace(/-/g, "");
  console.log(numWithoutDash);

  for ( let n = 0; n < numWithoutDash.length; n++) {
    numArr.push(+numWithoutDash.charAt(n));
  }

  let newArr = [];

  for ( let i = 0; i < numArr.length; i++) {
    if ( i % 2 === 0) {
      newArr.push(numArr[i] * 1);
      }
  }

  for ( let a = 0; a < numArr.length; a++) {
    if ( a % 2 !== 0) {
      newArr.push(numArr[a] * 2);
      }
  }

  const newStr = newArr.join();
  const sumDigit = newStr.replace(/,/g, "");
  let sumArr = [];
  let sum = 0;

  for ( let b = 0; b < sumDigit.length; b++) {
    sumArr.push(+sumDigit.charAt(b));
  }
  for ( let c = 0; c < sumArr.length; c++ ) {
    sum = sum + sumArr[c];
  }

  const check = 10 - sum % 10;
  const validationNum = cardNum - check;

  return `Your validationNum for your creditcard is ${ validationNum }. Keep it safe!`;
}

console.log(checkDigit("45678954346734568"));
