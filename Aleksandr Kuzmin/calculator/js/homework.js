// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number),
//  square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number
// represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
function squareNumber(number) {
  const numberSquared = number * number;
  console.log(`The result of squaring the number ${number} is ${numberSquared}`);

  return numberSquared;
};

squareNumber(1);

function halfNumber(number) {
  const divNumber = number / 2;
  console.log( ` Half of ${number} is ${divNumber}`);
  return divNumber;
}


halfNumber(5);

function percentOf(num1, num2){
  const numPercent = num1/num2*100;
  console.log(`${num1} is ${numPercent} of ${num2}`);
  return numPercent;
}

percentOf(5,10);

function areaOfCircle(radius) {
  const area = Math.round(Math.PI* radius*radius);
console.log(`The area for a circle with radius ${radius} is ${area}.`)
  return area;

};

areaOfCircle(10);






// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).

function part2(number) {
  const halfNumber = number /2;
  const squaredNum = halfNumber*halfNumber;
  const areaOfSquaredNum = Math.PI*squaredNum*squaredNum;
  const percenfOfArea = squaredNum/areaOfSquaredNum *100;
  console.log (halfNumber,squaredNum,areaOfSquaredNum,percenfOfArea);
}

part2(10);

//
