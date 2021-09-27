// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(input) {
  const result = input * input;
  console.log(`The result of squaring the number ${input} is ${result}.`);
  return result;
}

squareNumber(3);
squareNumber(12);
squareNumber(50.2);

// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(input) {
  const result = input / 2;
  console.log(`Half of ${input} is ${result}.`);
  return result;
}

halfNumber(4);
halfNumber(11);
halfNumber(61.2);

// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(input1, input2) {
  const result = input1 / input2 * 100;
  console.log(`${input1} is ${result}% of ${input2}.`);
  return result;
}

percentOf(2,4);
percentOf(3,100);
percentOf(50,20);

// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
  const result = Math.round(100 * Math.PI * radius * radius) / 100;
  console.log(`The area of a circle with radius ${radius} is ${result}.`);
  return result;
}

areaOfCircle(5);
areaOfCircle(-5);
areaOfCircle(26);


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

const calculate = function(input) {
  const halved = halfNumber(input);
  const squared = squareNumber(halved);
  const circle = areaOfCircle(squared);
  const result = percentOf(circle, squared);
  console.log(result);
  return result;
}

calculate(1);
calculate(2);
calculate(10.5);
calculate(20);
calculate(50);
