// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item
// names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const shoppingCart = {
  coors: 50.00,
  great_northern: 45.99,
  james_boags: 62.95,
  somethingnotbeeriguess: 4.99
}

const cashRegister = function(items) {
  let total = 0;
  const cartValues = Object.values(items);
  for (let i = 0; i < cartValues.length; i++) {
    total = total + cartValues[i];
  }
  return total;
}

console.log('The total for your order is: $' + cashRegister(shoppingCart));

// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a
// simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// const creditCardA = "1111-2222-3333-4444";
// const creditCardB = "1111-1111-2";
// const creditCardC = "8888-8888-8888-8888";
// const creditCardD = "1111-1122-2233-3333";

const cardTotal = function(card) {
  let total = 0;
  let totalEnough = false;
  for (let i = 0; i < card.length; i++) {
    total = total + card[i];
  }
  if (total > 16) {
    totalEnough = true;
  }
  return totalEnough;
}

const checkDifferentNumbers = function(card) {
  let yesDifferent = false;
  for (let i = 0; i < card.length; i++) {
    for (let x = 0; x < card.length; x++) {
      if (card[i] !== card[x]) {
        yesDifferent = true;
      }
    }
  }
  return(yesDifferent);
}

const countNumbers = function(card) {
  let enoughNumbers = false;
  if (card.length === 16) {
    enoughNumbers = true;
  }
  return enoughNumbers;
}

const checkEven = function(card) {
  let yesEven = false;
  if (card[card.length-1] % 2 === 0) {
    yesEven = true;
  }
  return yesEven;
}

const validateCreditCard = function(card) {
  card = Array.from(card);
  let valid = false;
  if (cardTotal(card) === true && checkDifferentNumbers(card) === true
  && countNumbers(card) === true && checkEven(card) === true) {
    valid = true;
  }
  return valid;
}

console.log(validateCreditCard(creditCardA));
// console.log(validateCreditCard(creditCardB));
// console.log(validateCreditCard(creditCardC));
// console.log(validateCreditCard(creditCardD));
