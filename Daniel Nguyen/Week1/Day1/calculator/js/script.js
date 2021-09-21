// Week 1, Day 2
// The Calculator

// Part 1
// with function statements

function squareNumber(number) {
  const squared = number * number;
  console.log(`${number} squared is ${squared}.`);
  return squared;
}

squareNumber(1212);

function halfNumber(number) {
  const halved = number / 2;
  console.log(`Half of ${number} is ${halved}.`);
  return halved;
}

halfNumber(71);

// returns as a string with the '%' sign
function percentOf(a, b) {
  const percentage = a / b;
  const percentageString = `${Math.round(percentage * 100)}%`;
  console.log(`${a} is ${percentageString} of ${b}.`);
  return percentageString;
}

percentOf(4, 17);

// including the Bonus task
function areaOfCircle(radius) {
  const area = radius * radius * Math.PI;
  // BONUS ROUND:
  const roundedArea = area.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${roundedArea}.`);
  return roundedArea;
}

areaOfCircle(8);



// Part 2
// with function expressions

const magicNumber = function(number) {
  console.log(`The magic number is ${number}`);
  const halved = halfNumber(number);
  const squared = squareNumber(halved);
  const area = areaOfCircle(squared);
  const result = percentOf(area, squared);
  return result;
}

magicNumber(18);


// Thanks for reading!
// – Dan
