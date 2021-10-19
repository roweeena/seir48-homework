// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```

const rectangles = [{
  id: 'a',
  length: 4,
  width: 4
},
{
  id: 'b',
  length: 4,
  width: 6
}];

const isSquare = (rectangle) => {
  if(rectangle.length === rectangle.width) {
    return true;
  }
  else {
    return false;
  }
}

const area = (rectangle) => {
  return rectangle.length * rectangle.width;
}

const perimeter = (rectangle) => {
  return (2 * rectangle.length) + (2 * rectangle.width);
}


// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ``

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 3
}

const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 5
}

const isEquilateral = (triangle) => {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC){
    return true;
  }
  else {
    return false;
  }
}

const isIsosceles = (triangle) => {
  if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC){
    return true;
  }
  else {
    return false;
  }
}

// area = base * height * .5
// for isos triangle the base is the shortest side
// height = squareRoot(largerSideSquared - halfShorterSideSquared)

// returns sides shortest to longest
const sortedTriangle = (triangle) => {
  const array = [triangle.sideA, triangle.sideB, triangle.sideC];
  const sorted = array.sort();
  return sorted;
}

const largestSide = (triangle) => {
  return sortedTriangle(triangle)[2];
}

const shortestSide = (triangle) => {
  return sortedTriangle(triangle)[0];
}

const otherSide = (triangle) => {
  return sortedTriangle(triangle)[1];
}

//workout the height
const height = (triangle) => {
  let largeSideSquared = largestSide(triangle) * largestSide(triangle);
  let halfShortSideSquared = shortestSide(triangle) * shortestSide(triangle) * 0.5;
  let squareRoot = Math.sqrt((largeSideSquared - halfShortSideSquared));
  return squareRoot;
}

const areaOfTriangle = (triangle) => {
  return shortestSide(triangle) * height(triangle) * 0.5;
}


// triangle is obtuse is the side with the longest length c^2 is greater than the other sum of the other sides squared.
// i.e. if c^2 > a^2 + b^2

const isObtuse = (triangle) => {
  if (Math.pow(largestSide(triangle), 2) === Math.pow(shortestSide(triangle), 2) + Math.pow(otherSide(triangle), 2)) {
    return true;
  }
  else {
    return false;
  }
}

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// // Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const cashRegister = (cart) => {
  const keyArray = Object.keys(cart);
  // console.log(keyArray);
  let total = 0;
  for (let i=0; i<keyArray.length; i++) {
      let key = keyArray[i]
      let amountString = cart[key];
      // console.log(amountString);
      let itemNum = parseFloat(amountString);
      // console.log(itemNum);         
      total += itemNum;
      // console.log(total);
  }
  return total;
}

console.log(cashRegister(cartForParty));

// # Credit Card Validation

// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```

// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.

// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is 

// ```
// { valid: true, number: 'a923-3211-9c01-1112' } 
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validNumbers = ['1','2','3','4','5','6','7','8','9','0'];
const hiphen = ['-'];

// function which ensures the card has 16 valid numbers.
const check16Valid = (cardNumber) => {
  let validDigits = 0;
  for (let i=0; i<cardNumber.length; i++) {
    if(validNumbers.includes(cardNumber[i])) {
      validDigits += 1;
    }
    else if (cardNumber[i] === '-') {    
    }
    else {
      return false;
    }
  }
  if (validDigits === 16) {
    return true;
  }
  else {
    return false;
  }
}

// puts card into an array and sorts lowest to highest
const sortedCard = (cardNumber) => {
  const cardAsArray = [];
  for (let i=0; i<cardNumber.length; i++) {
    if (cardNumber[i] !== '-') {
    cardAsArray.push(parseInt(cardNumber[i]));
    }
  }
  const sortedCard = cardAsArray.sort();
  return sortedCard;
}

// sorts card into an array and checks the last digit does not equal the first digit
const atLeastTwo = (cardNumber) => {
  const sorted = sortedCard(cardNumber);
  const lastDigit = sorted[sorted.length-1];
  const firstDigit = sorted[0];
  if (firstDigit === lastDigit) {
    return false;
  }
  else {
    return true;
  }
}

// checks if the final digit is even
const finalDigitEven = (cardNumber) => {
  const cardAsArray = [];
  for (let i=0; i<cardNumber.length; i++) {
    if (cardNumber[i] !== '-') {
    cardAsArray.push(cardNumber[i]);
    }
  }
  const finalDigit = cardAsArray[cardAsArray.length-1];
  if (finalDigit % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

// checks if the sum is greater than 16
const sumGreater16 = (cardNumber) => {
  let sum = 0;
  const sorted = sortedCard(cardNumber);
  for (let i=0; i<sorted.length; i++) {
    sum += sorted[i];
  }
  if (sum > 16) {
    return true;
  }
  else {
    return false;
  }
}

// validates creditCard
const validateCreditCard = (cardNumber) => {
  if(check16Valid(cardNumber) && atLeastTwo(cardNumber) && finalDigitEven(cardNumber) && sumGreater16(cardNumber)) {
    return true;
  }
  else {
    return false;
  }
}

//TESTS
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`

// The following credit card numbers are invalid:

// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number

console.log(validateCreditCard(`9999-9999-8888-0000`));
console.log(validateCreditCard(`6666-6666-6666-1666`));

console.log(validateCreditCard(`a923-3211-9c01-1112`));
console.log(validateCreditCard(`4444-4444-4444-4444`));
console.log(validateCreditCard(`1111-1111-1111-1110`));
console.log(validateCreditCard(`6666-6666-6666-6661`));

