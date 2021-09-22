console.log("hello world");
//
// The Calculator
// Part 1
//task 1
  /* Write a function called squareNumber that will take one argument (a number),
  square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9." */


const squareNumber = function (number) {
  const squaredNum = number * number;
  console.log(`The result of squaring the number ${ number } is ${squaredNum}`);
  return squaredNum;

  };

  squareNumber(5);


// Task 2
/* Write a function called halfNumber that will take one argument (a number),
 divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.". */

const halfNumber = function (numToHalf) {
  const halfedNumber = numToHalf / 2;
  console.log(`Half of ${numToHalf} is ${halfedNumber}.`)
  return halfedNumber;
}

halfNumber(100);


// Task 3
/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4." */

const percentOf = function (a, b) {
  const numToDivide = (a / b) * 100
  console.log(`${a} is ${numToDivide} of ${b}`)
  return numToDivide;
};

percentOf(4, 6);

// Task 4
/* Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that,
and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." */
// Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function (radius) {
  const area = Math.PI * (radius * radius);
  console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
  return area;
}

areaOfCircle(1);




// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Task 5  --- Take half of the number and store the result.
const newFunction = function (squaredNum, halfedNumber, numToDivide, area) {
 num1 = squaredNum / 2;
 num2 = halfedNumber * num1;
 num3 = (numToDivide * numToDivide) * Math.PI;
 num4 = area / num3 * 100;
    console.log(num1, num2, num3, num4);
};

newFunction(5, 6, 7, 8);







// Task 6
//Task 7
// Calculate the area of a circle with the result of #2 as the radius.
// Task 8
// Calculate what percentage that area is of the squared result (#3).
