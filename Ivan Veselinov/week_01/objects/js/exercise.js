console.log("Objects");
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
 console.log("/////////////////////////////////////////////////////");
console.log("Rectangle");
const rectangleArea = {
  l : 4,
  w : 2
}
const find = function (){
let a=  rectangleArea.l * rectangleArea.w;
console.log(`We are calculateing Area of Rectangle is A = W * L = ${a}`);
// A = l * w
}
find();

const rectanglePerimeter = {
 l : 4,
  w : 2
}
const perimeter = function (){
let p = 2 * (rectanglePerimeter.l + rectanglePerimeter.w);
console.log(`We are calculateing Perimetar of Rectangle is P = 2 * (L + W) = ${p}`);
}
perimeter();
// P=2(l+w)

const rectangleSquare = {
  w : 4
}
const square = function (){
 const q = rectangleSquare.w * rectangleSquare.w;
 console.log(`We are calculateing Square of Rectangle P = 2 * (W * W) = ${q}`);
}
square();
//a*a


// Given the following a triangle object like the one below, write the following functions which accept a triangle object as an argument:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
//

 console.log("/////////////////////////////////////////////////////");

console.log("TRIANGLE");

const triangleHalf = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}
// 2 * ( a / b)  -------->>>>> ( half of triangle middle part )
const halfper = function(half){
half = 2 * (triangleHalf.sideA / triangleHalf.sideB);
// console.log(`Half Triangle a = 2 * ( a / b) and reuslt is = ${half}`);
return half;

}
halfper();


const triangleArea = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}
// area = ( half * b ) / 2 ------->>> AREA FOR TRIANGLE
const areaOutput = function(area) {
 area = (halfper() * triangleArea.sideB) / 2;
console.log(`The Area of Triangle is a = ( half * b ) / 2 = ${area}`);
}
areaOutput();

const triangleEquilateral = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}
const sqr = function (){
let eq = (Math.sqrt(3) / 4 ) * (triangleEquilateral.sideA * triangleEquilateral.sideA);
console.log(`The Equilateral of Triangle is a = ( sqrt(3) /4 ) * ( a * a ) = ${eq}`);
}
sqr();


const triangleIsosceles = {
  sideA: 3,
  sideB: 4,
  sideC: 4
}
  const triangleIso = function(){
    let iso = (triangleIsosceles.sideB * halfper()) /2;
    console.log(`The Isosceles of Triangle is a = (a * half ) / 2 = ${iso}`);
  }
  triangleIso();

  const triangleIsObtuse = {
    sideA: 4,
    sideB: 4,
    sideC: 4
  }

  const obuse = function (){
    let o = ( triangleIsObtuse.sideB * halfper() ) / 2;
    console.log(`The Obtuse of Triangle is a = (b * half ) / 2 = ${o}`);
  }
  obuse();


/////////////////////////////////////////////////////////////////////////////////////

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.
 // The object contains item names and prices (itemName: itemPrice).
 //  The function should return the total price of the shopping cart.
 //  Example
 console.log("/////////////////////////////////////////////////////");
console.log("This is cash Register program!!");

const cardForItStore = {
  ramMemory: 250,
  graphisCard: 450,
  motherBoard: 250,
  ssd: 300,
  processor: 500
}
 const card = cardForItStore.ramMemory + cardForItStore.graphisCard + cardForItStore.motherBoard + cardForItStore.ssd + cardForItStore.processor;

const totalToPay = function(card){
console.log(`Your custom computer setup will be at total = ${card} $`);
  }
  totalToPay(card);

// You're starting your own credit card business.
//You've come up with a new way to validate credit cards with a simple function
//called validateCreditCard that returns true or false.
// Here are the rules for a valid number:


//Returns true or false!!!!!

console.log("///////////////////////////////////////////////////////");

const validateCreditCard = function(a){
    if ( a.length === 16){
    console.log(`Please wait while we checking credit card for you. ` + true);
  }else{
    console.log(`Your credit card is not valid. `  + false);
  }
    if ( a % 2 === 0 ) {
      console.log(`Your credit card is valid please wait for Repiept.`);
    }else{
        console.log("Please enter valid credit card.");
    }console.log(a);
  }

validateCreditCard("1111111111111111");
validateCreditCard("2222222222222222");
