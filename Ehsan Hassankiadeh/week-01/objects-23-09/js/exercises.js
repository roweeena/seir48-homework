console.log("IS THIS WORKING OR WHAT ?");
// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions
// which accept a `rectangle` object as an argument:

// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
const rectangleA = {
  length: 3,
  width: 2,
};
const isSquare = function () {
  if (rectangleA.length === rectangleA.width) {
    return "square";
  } else {
    return "rectangular";
  }
};
console.log(isSquare());
//are function
const area = function () {
  return rectangleA.length * rectangleA.width;
};
console.log("~ area", area()); // area function
//aree function
const perimeter = function () {
  return (rectangleA.length + rectangleA.width) * 2;
};
console.log("~ perimeter", perimeter());

// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions
// which accept a `triangle` object as an argument:

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
// ```
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};
const isIsosceles = function () {
  if (
    triangleA.sideA === triangleA.sideB ||
    triangleA.sideA === triangleA.sideC ||
    triangleA.sideB === triangleA.sideC
  ) {
    return "the Triangle is isosceles.";
  } else {
    return "the triangle is not isosceles.";
  }
};
console.log(isIsosceles());
//Returns whether the triangle is isosceles or not
const isEquilateral = function () {
  if (
    triangleA.sideA === triangleA.sideB &&
    triangleA.sideB === triangleA.sideC
  ) {
    return "triangle is equilateral";
  } else {
    return "triangle is not equilateral";
  }
};
console.log("~ isEquilateral", isEquilateral());
//Returns whether the triangle is equilateral or not
const areaOfTriangle = function () {
  const s = (triangleA.sideA + triangleA.sideB + triangleA.sideC) / 2;
  const areaOfTri = Math.sqrt(
    s * (s - triangleA.sideA) * (s - triangleA.sideB) * (s - triangleA.sideC)
  );
  return areaOfTri;
};
console.log(areaOfTriangle());
// * area - Returns the area of the Triangle
const isObtuse = () => {
  if (triangleA.sideA ** 2 + triangleA.sideB ** 2 < triangleA.sideC ** 2) {
    return "The triangle is obtuse";
  } else {
    return "The triangle is not obtuse";
  }
};
console.log(isObtuse());
// * isObtuse - Returns whether the triangle is obtuse or not

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice). The function
//  should return the total price of the shopping cart.
// Example

// ```
// // Input
const cartForParty = {
  banana: "1",
  handkerchief: "2",
  Tshirt: "3",
  apple: "4",
  nalgene: "5",
  proteinShake: "6",
};
const cashRegister = () => {
  let sum = 0;
  //   let j = 0;
  for (let i in cartForParty) {
    sum += parseInt(cartForParty[i]);
    // j++;
    // console.log(j);
  }
  return sum;
};
console.log(cashRegister());

// // Output

// You're starting your own credit card business. You've come up with
//  a new way to validate credit cards with a simple function called
//  validateCreditCard that returns true or false.

// Here are the rules for a valid number:

// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented
// (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16

const validateCreditCard = (cardNumber) => {
  if (cardNumber.toString().length !== 16) {
    return false;
  }
  if (cardNumber % 2 === 0) {
    return false;
  }
  let saeed = cardNumber.toString().split("");
  let total = 0;
  for (let i = 0; i < saeed.length; i++) {
    total += parseInt(saeed[i]);
  }
  if (total <= 16) {
    return false;
  }
  let kus = false;
  for (let j = 0; j < saeed.length; j++) {
    for (let k = 0; k < saeed.length; k++) {
      if (saeed[j] !== saeed[k]) {
        kus = true;
      }
    }
  }
  if (kus === false) {
    return false;
  }
  return true;
};
console.log(validateCreditCard(1111111111111121));
