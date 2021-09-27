// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions
// which accept a `rectangle` object as an argument:
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
// ```

let rectangleA = {
  length1: 4,
  width:4
};

function isSquare() {
  if (rectangleA.length1 === rectangleA.width) {
    console.log("it is",true);
    return true;
  }

}
isSquare();


function area() {
  const calcArea = rectangleA.length1 * rectangleA.width;
  console.log(calcArea);
  return calcArea;

}

area();

function perimeter() {
  const calcPerimeter = 2 *(rectangleA.length1 + rectangleA.width );
  console.log(calcPerimeter);
  return calcPerimeter;

}
perimeter();









// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following
// functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// ```
function isIsosceles () {
if(triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC ) {
  console.log(false);
} else { (triangleA.sideB === triangleA.sideC)
  console.log("It is",true);
}

}
isIsosceles();

function isEquilateral () {
if(triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC ) {
  console.log("it is", true);
} else {
  console.log("It is",false);
}

}
isEquilateral();

// * area - Returns the area of the Triangle ½[√(a2 − b2 ⁄4) × b]

function areaT () {
  const sideC = triangleA.sideC*triangleA.sideC;
  const sideB = triangleA.sideB*triangleA.sideB;
  const calcArea = 1/2 * ( Math. sqrt( sideC - sideB/4) * triangleA.sideB);
  console.log(calcArea);
};

areaT();



// * isObtuse - Returns whether the triangle is obtuse or not cos A = (b2 + c2 − a2) / 2bc

function isObtuse() {
  const sideC = triangleA.sideC;
  const sideB = triangleA.sideB;
  const sideA = triangleA.sideA;
  const calcSides = 2*sideA*sideC;
  let cos1 = sideA*sideA + sideB*sideB - sideC*sideC;
  cos1 = cos1/calcSides;
  const calcCos = Math.cos(cos1);
 let degreeA = (180/Math.PI) * calcCos;
 let degreeB = degreeA; // isosceles
    // obtuse = 120, sum of angles = 180


  if (degreeA +degreeB > 60) {
    console.log("it is", false);
  }else {
    console.log("it is",true);
  }



}
isObtuse();




// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.
// Example
//

//
// // Output
// cashRegister(cartForParty)); // 60.55

// ```

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};



 function cashRegister(cartForParty) {

let result = 0;
let tempObj = Object.values(cartForParty);
for (let i = 0; i < tempObj.length; i ++)

result = result + Number(tempObj[i]);


  console.log(result);





}
// string turn numbers for(key in data) {


// function cashRegister() {
//
// const sumCart = cartForParty.
//
// //   let result = 0 ;
// //   let oKeys = Object.keys(cartForParty);
// //   for(let i = 0; i < oKeys.length; i++){
// //     result = result + oKeys[i];
// //   }
// // console.log(oKeys[i]);
//
// }
 cashRegister(cartForParty);


//  # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to
// validate credit cards with a simple function called validateCreditCard that returns true or false.
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
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules,
// and what are some numbers that pass or fail? Ideas: check expiration date! Check out
// the Luhn Algorithm for inspiration.




function validateCreditCard (cardNumber) {
 let noDash = "";
  //remove dashes
 noDash = cardNumber.replaceAll("-", "")
// if 16 digits, all of them must be numbers

let num = Number(noDash);

function onlyNums(num) {
  for (let i = num.length - 1; i >= 0; i--) {
    const checker = num.charCodeAt(i);
    if (checker < 48 || checker > 57) return false
  }
  console.log(true)
  return true
}
onlyNums(num);

  // if at least two different digits
  function twoDifnums(num) {

    num.match()
//     for (let i = num.length - 1; i >= 0; i--) {
//       if (num[i] === num[i]){
// console.log(false)
//        }
//
//
//
//     return true
  }
  twoDifnums(num);

  // if final digit must be even
  // The sum of all the digits must be greater than 16


}
}











validateCreditCard ("1999-9999-9999-9992")
