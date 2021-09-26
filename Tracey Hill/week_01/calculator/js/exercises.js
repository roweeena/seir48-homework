// # The Calculator
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (numToBeSquared) {
    const squaredResult = numToBeSquared * numToBeSquared;
    console.log(
      `The result of squaring the number ${numToBeSquared} is ${squaredResult}.`
    );
    return squaredResult;
  };
  // - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
  const halfNumber = function (numToBeHalved) {
    const halvedResult = numToBeHalved / 2;
    console.log(`Half of ${numToBeHalved} is ${halvedResult}.`);
    return halvedResult;
  };
  // - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
  const percentOf = function (wholeNum, divisor) {
    const percentage = (divisor / wholeNum) * 100;
    console.log(`${divisor} is ${percentage}% of ${wholeNum}.`);
    return percentage;
  };
  // - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
  const areaOfCircle = function (radius) {
    const area = Math.PI * radius * radius;
    const areaRoundedDown = area.toFixed(2);
    console.log(
      `The area for a circle with radius of ${radius}cm is ${areaRoundedDown}cm`
    );
    return areaRoundedDown;
  };
  // - Bonus: Round the result so there are only two digits after the decimal.
  // ## Part 2
  // Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
  const bestCalculator = function (magicNumber) {
    // - Take half of the number and store the result.
    const halfMagicNumber = halfNumber(magicNumber);
    // - Square the result of #1 and store that result.
    const squareHalfMagicNumber = squareNumber(halfMagicNumber);
    // - Calculate the area of a circle with the result of #2 as the radius.
    const areaSquareHalfMagicNumber = areaOfCircle(squareHalfMagicNumber);
    // - Calculate what percentage that area is of the squared result (#3).
    const percentOfAreaSquareHalfMagicNumber = percentOf(
      squareHalfMagicNumber,
      areaSquareHalfMagicNumber
    );
    console.log(`The magic calculation is ${percentOfAreaSquareHalfMagicNumber}`);
  };