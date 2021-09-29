// // # Geometry Function Lab
// //
// // ### Part 1, Rectangle
// //
// // Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
// const rectangleA = {
//   length: 3,
//   width: 5
// };
const rectangleA = {
  length: 4,
  width: 4
};
const isSquare = function (rect) {
  if(rect.length === rect.width) {
    console.log(`This is a square`);
  } else {
    console.log(`This is a rectangle`);
  };
};
isSquare(rectangleA);
const area = function (rect) {
  console.log(`The area of this rectangle is ${rect.length * rect.width} square centimiters`);
};
area(rectangleA);

const perimeter = function (rect) {
  console.log(`The perimeter of this rectangle is ${rect.length*2 + rect.width*2}cm.`);
};
// perimeter(rectangleA);
// // * isSquare - Returns whether the rectangle is a square or not
// // * area - Returns the area of the rectangle
// // * perimeter - Returns the perimeter of the rectangle
//
// // ```javascript

// // ```
// //
// // ### Part 2, Triangle
// //
// // Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 3,
};
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 2,
};
const triangleC = {
  sideA: 3,
  sideB: 3,
  sideC: 3,
};
const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    console.log(`This triangle is Equilateral`);
  } else if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    console.log('This triangle is Isosceles');
  } else {
    console.log(`This triangle is Scalene`);
  };
};
isEquilateral(triangleA);
isEquilateral(triangleB);
isEquilateral(triangleC);
//
//
const areaOfTri = function (tri) {
  const s = ((tri.sideA + tri.sideB + tri.sideC)/2);
  const calcArea = Math.sqrt(s * (s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC));
  console.log(`The area of this triangle is ${Math.round(calcArea * 100)/100}`);
};
areaOfTri(triangleA);
areaOfTri(triangleB);
areaOfTri(triangleC);
// // * isEquilateral - Returns whether the triangle is equilateral or not
// // * isIsosceles - Returns whether the triangle is isosceles or not
// // * area - Returns the area of the Triangle
// // * isObtuse - Returns whether the triangle is obtuse or not
//
// // ```javascript
// // const triangleA = {
// //   sideA: 3,
// //   sideB: 4,
// //   sideC: 4
// // };
// // ```
//
// // # The Cash Register
// //
// // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice).
// // The function should return the total price of the shopping cart.
// // Example
const myCart = {banana: 3.9,
  watermelon: 7.3,
  mushrooms: 4.5,
  soyMilk: 2.3,
  dumplings:7.4};

  const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
const test = function (cart) {
    let total = 0;
    const cartPrice = Object.values(cart);
    for (let i=0; i<cartPrice.length ; i++) {
      total = total + Number(cartPrice[i]);
    };
    return total;
};
test(myCart);
//


const miCasa = {
  habitacions: 4,
  banos: 3,
  cocinas: 1,
  lounge: 2,
  patios: 1
}

const totalAmbientes = function (inmueble) {
  let ambientes = 0;
  const keyAmbientes = Object.values(inmueble)
  for (let i=0 ; i<keyAmbientes.length ; i++) {
    ambientes = ambientes + keyAmbientes[i];
  };
  console.log(`El total de ambientes es ${ambientes}`);
  return ambientes;
}

//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard
// that returns true or false.
//
// Here are the rules for a valid number:
// - Number must be 16 digits, all of them must be numbers



const sixteenDigits = function (card) {
  let cardIsArray = Array.from(card);
  if (cardIsArray.length === 16) {
     return true;
  } else {
    return false;
  };
};
// - You must have at least two different digits represented (all of the digits cannot be the same)
//THIS ONE NOT WORKING -- Returns false all the time
const twoDifferent = function (card) {
  let keArray = Array.from(card);
  for (let i = 0 ; i < keArray.length ; i++) {
      if ((Number(keArray[i])) !== (Number(keArray[i-1]))) {
        return true;
      } else {
        return false;
      };
    };
  };

// - The final digit must be even

const lastEven = function (card) {
  if ((Number(card))%2 === 0) {
    return true
  } else {
    return false
  };
};


// - The sum of all the digits must be greater than 16

const sumOfAll = function (card) {
    let makeArray = Array.from(card);
    let thisSum = 0;
    for (let i = 0; i<makeArray.length ; i++) {
      thisSum = thisSum + Number(makeArray[i]);
    } if (thisSum > 16) {
      return true;
    } else {
      return false;
    };

};

const checkCard = function (card) {
  if (sixteenDigits(card) === true && lastEven(card) === true && sumOfAll(card) === true) {
    return `The card number ${card} is valid`
  } else {
    return `This card is not valid`
  };
};

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
