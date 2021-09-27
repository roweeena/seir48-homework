// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
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
//
const rectangle = {
  length: 4,
  width: 4
};

const isSquare= function (){
if (rectangle.length === rectangle.width){
  console.log(`It is a square.`);
} else {
  console.log(`It is not a square.`);
}
}
isSquare();

  const area= function (){
    const areaOfRectangle = rectangle.length * rectangle.width;
    console.log(`The area for a rectangle is ${areaOfRectangle}.`);
  return areaOfRectangle
  }
area( );

const perimeter= function (){
  const perimeterOfRectangle = 2 * (rectangle.length + rectangle.width);
  console.log(`The perimeter for a rectangle is ${perimeterOfRectangle}.`);
return perimeterOfRectangle
}
perimeter( );




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
//   sideB: 4,
//   sideC: 4
// };
// ```
//
const triangle = {
   sideA: 3,
   sideB: 4,
   sideC: 4
};

const areaOfTri= function (){
  var s = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const areaOftriangle = Math.sqrt(s*((s-triangle.sideA)*(s-triangle.sideB)*(s-triangle.sideC)));
  console.log(`The area for a triangle is ${areaOftriangle}.`);
return areaOftriangle
}
areaOfTri( );



const isEquilateral= function (){
  if ( triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC && triangle.sideC === triangle.sideB ){
    console.log(`It is an equilateral triangle.`);
  } else {
    console.log(`It is not an equilateral triangle.`);
}
};
isEquilateral ();



const isIsosceles= function (){
  if ( triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideC === triangle.sideB ){
    console.log(`It is an isosceles triangle.`);
  } else {
    console.log(`It is not an isosceles triangle.`);
}
};
isIsosceles ();


const isObtuse= function (){
  if ( (triangle.sideA * triangle.sideA) + (triangle.sideB * triangle.sideB) < (triangle.sideC * triangle.sideC) || (triangle.sideA * triangle.sideA) + (triangle.sideC * triangle.sideC) < (triangle.sideB * triangle.sideB) || (triangle.sideC * triangle.sideC) + (triangle.sideB * triangle.sideB) < (triangle.sideA * triangle.sideA)){
  console.log(`It is an abtuse triangle.`);
} else {
  console.log(`It is not an abtuse triangle.`);
}
};
isObtuse ();



//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
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
//


  const cartForCricSeason = {
    bat: 250,
    shoes: 100,
    tshirt: 50,
    kitbag: 75,
    gloves: 35,
    pads: 65,
    cap: 15
  }
    console.log(Object.values (cartForCricSeason )); //Objects.values = to print only values.

const sumArray= function (numArray){
  sum = 0;
  for (let i=0; i<numArray.length; i++){
    sum= sum + parseFloat (numArray[i]);
  }
  return sum
};
const xyz = sumArray (Object.values (cartForCricSeason ));
console.log (xyz);































//
//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
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
