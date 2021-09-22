// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string
// like "The result of squaring the number 3 is 9."

const squareNumber = function(numToSquare) {
  const numSquared = numToSquare * numToSquare;
  console.log(`The result of squaring the number ${numToSquare} is ${numSquared}`);
  return numSquared;
}

squareNumber(3);
squareNumber(9);


// Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(numToHalf) {
  const numHalved = numToHalf / 2;
  console.log(`Half of ${numToHalf} is ${numHalved}`);
  return numHalved;
}

halfNumber(10);
halfNumber(50);

// Write a function called percentOf that will take two numbers, figure out what
//percent the first number represents of the second number, and return the result.
//It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2) {
  const numPercent = num1 / num2 * 100
  console.log(`${num1} is ${numPercent}% of ${num2}`);
  return numPercent;
}

percentOf(50,100);
percentOf(5,50);

// Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result. It should also log a
//string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
  const circleArea = radius * radius * Math.PI;
  const circleAreaRounded = Math.round((circleArea + Number.EPSILON) * 100) / 100;
  console.log(`The area for a circle with a radius ${radius} is ${circleAreaRounded}`);
  return circleAreaRounded;
}

areaOfCircle(5);
areaOfCircle(1);

// Bonus: Round the result so there are only two digits after the decimal.


// Write a function that will take one argument (a number) and perform the following operations,
// using the functions you wrote earlier
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const partTwo = function(initialNumber) {
  const secondNumber = halfNumber(initialNumber);
  console.log(secondNumber);
  const thirdNumber = squareNumber(secondNumber);
  console.log(thirdNumber);
  const fourthNumber = areaOfCircle(thirdNumber);
  console.log(fourthNumber);
  const fifthNumber = percentOf(fourthNumber, thirdNumber);
  console.log(fifthNumber);
}

  partTwo(5);
  partTwo(10);
