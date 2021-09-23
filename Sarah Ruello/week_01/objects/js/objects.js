// # Geometry Function Lab

// ### Part 1, Rectangle

const rectangleA = {
  length: 4,
  width: 4,
};

const rectangleB = {
  length: 45,
  width: 30,
};

function isRectangle(shape) {
  // figure this out later str = JSON.stringify(shape);
  let square = false;
  if (shape.length === shape.width) {
    square = true;
  }
  let s = shape.length * shape.width;
  let perimeter = shape.length * 2 + shape.width * 2;

  return `Is this a square? ${square} \n Area: ${s} \n Perimeter: ${perimeter}`;
}

console.log(isRectangle(rectangleA));
console.log(isRectangle(rectangleB));

// ### Part 2, Triangle
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

const triangleB = {
  sideA: 25,
  sideB: 52,
  sideC: 44,
};

const triangleC = {
  sideA: 25,
  sideB: 25,
  sideC: 25,
};

function isTriangle(shape) {
  let equilateral = false;
  if (shape.sideA === shape.sideB && shape.sideB === shape.sideC) {
    equilateral = true;
  }

  // triangle area using Heron's formula:
  let s = (shape.sideA + shape.sideB + shape.sideC) / 2;
  let triArea = Math.sqrt(
    s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC)
  );

  let obtuse = false;
  let aSquared = Math.floor(Math.pow(shape.sideA, 2));
  let bSquared = Math.floor(Math.pow(shape.sideB, 2));
  let cSquared = Math.floor(Math.pow(shape.sideC, 2));

  if (
    aSquared > cSquared + bSquared ||
    bSquared > aSquared + cSquared ||
    cSquared > aSquared + bSquared
  ) {
    obtuse = true;
  }

  let isoceles = false;
  if (
    shape.sideA === shape.sideB ||
    shape.sideA === shape.sideC ||
    shape.sideB === shape.sideC
  ) {
    isoceles = true;
  }

  return `Equilateral? ${equilateral} \n Isoceles? ${isoceles} \n Area: ${triArea.toFixed(
    2
  )} \n Obtuse? ${obtuse}`;
}

console.log(isTriangle(triangleA));
console.log(isTriangle(triangleB));
console.log(isTriangle(triangleC));

// # The Cash Register

// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example

// ```
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
};

function cashRegister(object) {
  const items = Object.values(object);
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += Number(items[i]);
  }

  return sum;
}

// // Output
console.log(cashRegister(cartForParty)); // 60.55

// # Credit Card Validation

// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

function isSumLessThanSixteen(input) {
  let sumOfAll = 0;
  for (let i = 0; i < input.length; i++) {
    sumOfAll += Number(input[i]);
  }
  return sumOfAll < 16;
}

function hasDiffNumbers(input) {
  let firstNum = input[0];
  let diffNumbers = false;

  for (let i = 1; i < input.length; i++) {
    if (firstNum !== input[i]) {
      diffNumbers = true;
    }
  }
  return diffNumbers;
}

function validateCreditCard(input) {
  const numberOnly = input.replaceAll("-", "");
  const numArray = numberOnly.split("");

  if (isNaN(Number(numberOnly))) {
    return { valid: false, error: "Not a valid number - contains letters." };
  }

  if (isSumLessThanSixteen(numArray)) {
    return { valid: false, error: "Not a valid number - sum less than 16" };
  }

  if (!hasDiffNumbers(numArray)) {
    return {
      valid: false,
      error: "Not a valid number - does not have 2 different numbers",
    };
  }

  if (numberOnly.length < 16 || numberOnly.length > 16) {
    return { valid: false, error: "Not a valid number - less than 16 digits" };
  }

  if (Number(numberOnly[numberOnly.length - 1]) % 2 == 1) {
    return { valid: false, error: "Not a valid number." };
  }

  return { valid: true, message: "Number accepted." };
}

console.log("9999-9999-8888-0000", validateCreditCard("9999-9999-8888-0000")); // true
console.log("6666-6666-6666-1666", validateCreditCard("6666-6666-6666-1666")); // true

console.log("a923-3211-9c01-1112", validateCreditCard("a923-3211-9c01-1112")); // false
console.log("4444-4444-4444-4444", validateCreditCard("4444-4444-4444-4444")); // false
console.log("1111-1111-1111-1110", validateCreditCard("1111-1111-1111-1110")); // false
