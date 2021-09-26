// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following
//functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// // ```
// //
//
// const isSquare = function (){
//   if (rectangleA.length === rectangleA.width){
//     console.log('This is a square.');
//   } else {
//     console.log('This is a rectangle.');
//   }
// }
//
// isSquare(rectangleA);

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 3,
//   sideC: 3
// };
// // ```
//
// const isEquilateral = function (){
//   if (triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC){
//     console.log('This is an equilateral triangle!')
//   } else {
//     console.log('This is not an equilateral triangle!')
//   }
// }
// isEquilateral(triangleA);
//
// const isIsosceles = function (){
//   if (triangleA.sideA === triangleA.sideB || triangleA.sideB === triangleA.sideC || triangleA.sideC === triangleA.sideA)
//   console.log('This is an isosceles triangle.');
//   else {
//   console.log('This is NOT an isosceles triange.');
//   }
// }
// isIsosceles(triangleA);
//
// const area = function () {
//   semiPer = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2; //Heron's Formula
//   areaCalcSq = (semiPer * (semiPer - triangleA.sideA) * (semiPer - triangleA.sideB) * (semiPer - triangleA.sideC));
//   areaCalc = Math.sqrt(areaCalcSq);
//   console.log(`The area of the triangle is ${ areaCalc.toFixed(2) }.`);
// }
// area(triangleA);

//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: '1.25',
//   handkerchief: '.99',
//   Tshirt: '25.01',
//   apple: '0.60',
//   nalgene: '10.34',
//   proteinShake: '22.36',
//   candles: '.39'
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

// const cashRegister = function (cart) {
//   let totalSum = 0;
//   for (let i = 0; i < Object.keys(cart).length; i++){
//     arrayConv = Object.values(cart);
//     arrayConvNum = arrayConv.map(Number);
//     totalSum += arrayConvNum[i];
//   }
//   console.log(`The total is $${ totalSum }.`);
//   return totalSum;
// }
//
// cashRegister(cartForParty);


// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way
//to validate credit cards with a simple function called validateCreditCard that returns true or false.
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
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
//
//

creditCard1 = '1134-5678-9098-76544'; //17 digits should return false.
creditCard2 = '1134-5678-9098-765a';  //has letters should return false.
creditCard3 = '1134-5678-9098-7655';  //last digit not divisible by 2 should return false.
creditCard4 = '1111-1111-1111-1111';  //last digit not divisible by 2 should return false.
creditCard5 = '1111-1111-0000-1112';  //sum is less than 16 should return false.
creditCard6 = '9999-9999-8888-0002';  //should return true.
creditCard7 = '8888-8888-8888-8888';  //all digits are the same.


//remove dashes from credit card number.
const removeDash = function (cardNum) {
  remDash = cardNum.split('-').join('');
  return remDash;
}

//check the sum of the card numbers.
const checkSum = function (cardNum) {
  let sum = 0;
  for (let i = 0; i < cardNum.length; i++){
    sum += parseInt(cardNum[i]);
  }
  return sum;
}

const validateCreditCard = function (creditCardNum) {
  const formattedNum = removeDash(creditCardNum);
  //check card number is 16 digits and check card number is all numbers and check final digit is even.
  if (formattedNum.length !== 16 || isNaN(formattedNum) || formattedNum[formattedNum.length - 1] % 2 !== 0){
    console.log(false);
  } else if (checkSum(formattedNum) <= 16) {
    console.log(false);
  //check if atleast 2 digits are different.
} else if  (formattedNum === '0000000000000000' ||
            formattedNum === '1111111111111111' ||
            formattedNum === '2222222222222222' ||
            formattedNum === '3333333333333333' ||
            formattedNum === '4444444444444444' ||
            formattedNum === '5555555555555555' ||
            formattedNum === '6666666666666666' ||
            formattedNum === '7777777777777777' ||
            formattedNum === '8888888888888888' ||
            formattedNum === '9999999999999999') {
      console.log(false);
    } else {
      console.log(true);
    }
  }

validateCreditCard(creditCard1);
validateCreditCard(creditCard2);
validateCreditCard(creditCard3);
validateCreditCard(creditCard4);
validateCreditCard(creditCard5);
validateCreditCard(creditCard6);
validateCreditCard(creditCard7);


//
//
// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// ## Additional
//
// Begin exploring the [JavaScript Koans](https://github.com/liammclennan/JavaScript-Koans). Fork, clone and start trying them.

//Class code along exercise.

//global scope
// const globalMessage = 'Hello Cruel World';
//
// const showGlobalMessage = function () {
//   console.log( globalMessage );
// }
//
// showGlobalMessage();
//
//
// //function scope
//
// const showLocalMessage = function () {
//   const localMessage = 'Goodbye Cruel World';
//   console.log( localMessage);
// }
//
// showLocalMessage();
// console.log( localMessage );
