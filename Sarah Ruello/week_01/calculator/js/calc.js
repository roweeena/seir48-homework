// Part 1:

/* Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9." */

function squareNumber(num) {
  const sqrd = num * num;
  //console.log(`The result of squaring ${num} is ${sqrd}.`);
  return sqrd;
}

squareNumber(5);
squareNumber(9);
squareNumber(345);

/* Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.". */

function halfNumber(num) {
  const halved = num / 2;
  //console.log(`${num} halved is ${halved}.`);
  return halved;
}

halfNumber(6);
halfNumber(67);
halfNumber(2467);

/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4." */

function percentOf(num1, num2) {
  let percent = (num1 * 100) / num2;
  //console.log(`${num1} is ${percent.toFixed(2)}% of ${num2}.`);
  return percent;
}

percentOf(10, 100);
percentOf(4, 78);
percentOf(80, 598);

/* Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172." 

Bonus: Round the result so there are only two digits after the decimal. */

function areaOfCircle(radius) {
  let area = Math.PI * radius ** 2;
  return area;
}

console.log("The area of the circle is " + areaOfCircle(34).toFixed(2));
console.log("The area of the circle is " + areaOfCircle(89).toFixed(2));
console.log("The area of the circle is " + areaOfCircle(3456).toFixed(2));

console.log("Part 2:");
/* Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier: */

function takeMeToFuncyTown(input) {
  // Take half of the number and store the result.
  const halved = halfNumber(input);
  // Square the result of #1 and store that result.
  const squared = squareNumber(halved);
  // Calculate the area of a circle with the result of #2 as the radius.
  const circleArea = areaOfCircle(squared);
  // Calculate what percentage that area is of the squared result (#3).
  const twoFuncsAtOnce = percentOf(circleArea, squared);

  console.log(
    `${halved}, ${squared}, ${circleArea.toFixed(
      2
    )} and ${twoFuncsAtOnce.toFixed(2)}`
  );
}

takeMeToFuncyTown(100);
