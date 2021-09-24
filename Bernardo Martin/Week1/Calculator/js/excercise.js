// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
 // It should also log a string like "The result of squaring the number 3 is 9."
// const squareNumber = function (number) {
//     const square = number * number;
//     console.log(`The result of squaring the number ${number} is ${square}`);
// };
// squareNumber(8);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
// It should also log a string like "Half of 5 is 2.5.".

// const halfNumber = function (number) {
//   const dividenum = number / 2 ;
//   console.log(`Half of ${number} is ${dividenum}`);
// };
// halfNumber(16);
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
 // and return the result. It should also log a string like "2 is 50% of 4."
// const percentOf = function (x , y) {
//   const calculation = x / y * 100 ;
//   console.log(`${x} is ${calculation}% of ${y}.`);
// }
// percentOf(10,100);
// percentOf(40,200);
// percentOf(7,10);
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
// const areaOfCircle = function (radius) {
//   const calcArea = Math.PI * radius * radius;
//   console.log(`The area for a circle with radius ${radius} is ${calcArea}.`);
// }
// areaOfCircle(1);
// areaOfCircle(2);

// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
var dividenum;
const halfNumber = function (number) {
  dividenum = number / 2 ;
  console.log(`Half of ${number} is ${dividenum}`);
};
halfNumber(16);
console.log(dividenum);
// - Square the result of #1 and store that result.
var square;
const squareNumber = function (number) {
    square = number * number;
    console.log(`The result of squaring the number ${number} is ${square}`);
};
squareNumber((dividenum));
console.log(square);

// - Calculate the area of a circle with the result of #2 as the radius.
var calcArea;
const areaOfCircle = function (radius) {
  calcArea = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${calcArea}.`);
}
areaOfCircle((square));
console.log(calcArea);

// - Calculate what percentage that area is of the squared result (#3).

const percentOf = function (x , y) {
  const calculation = x / y * 100 ;
  console.log(`${x} is ${calculation}% of ${y}.`);
}
percentOf((calcArea),(square));
