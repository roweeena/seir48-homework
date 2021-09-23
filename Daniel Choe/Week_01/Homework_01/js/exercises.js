
const squareNumber = function (number) {
  square = number * number;
  result = `The result of squaring the number ${ number } is ${ square }.`;
  console.log(result);
};

const halfNumber = function (number) {
  half = number / 2;
  result = `Half of ${ number } is ${ half }`;
  console.log(result);
};

const percentOf = function (a,b) {
  calc = (a / b) * 100;
  result = `${ a } is ${ calc }% of ${ b }.`;
  console.log(result);
};

const areaOfCircle = function (radius) {
  area = Math.PI * radius * radius;
  area = area.toFixed(2);
  result = `The area for a circle with radius ${ radius } is ${ area }.`;
  console.log(result);
};

const megaFunction = function(number) {
  resultHalf = number / 2;
  resultSquare = resultHalf * resultHalf;
  resultSquareRound = Math.round(resultSquare);
  resultArea = Math.PI * resultSquare * resultSquare;
  resultAreaRound = Math.round(resultArea);
  resultA = `The area of the circle is ${ resultAreaRound }`;
  console.log(resultA);
  resultPercent = (resultArea / resultSquare) * 100;
  resultPercentRound = Math.round(resultPercent);
  resultB = `${ resultAreaRound } is ${ resultPercentRound }% of ${ resultSquareRound }.`;
  console.log(resultB);
};

// Strings Homework

const drEvil = function (amount) {
  if (amount >= 1000000) {
    result = `${ amount } dollars (pinky).`;
    console.log(result);
  }
  else {
    result = `${ amount } dollars.`;
    console.log(result);
  };
};

const mixUp = function (str1, str2) {
  a = str1;
  b = str2;
  result = b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
  console.log(result);
};

const fixStart = function (str) {
  let newString = [];
  for (i=1; str.length; i++) {
    if (str[i] == str[0]) {
      result = str.replace([i],"*");
      newString.push(result);
    } else {
      newString.push(str[i]);
    }
  }
console.log(newString);
};
