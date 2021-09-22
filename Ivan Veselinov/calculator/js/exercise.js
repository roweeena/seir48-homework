// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// - Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// - Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// - Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
//
// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).
//

console.log("try is it working");
// First exercise
const squareNum = function (a, result) {
  result= a * a;
  console.log(`Square of ${a} is ${result}`);
}
squareNum(4);

// Secound exercise
const halfNum = function (b, half){
  half = b /2;
  console.log (`Half number of ${b} is number ${half}`);
}
halfNum(4);

// Third exercise
const persentOfCircle = function (a, b, sum){
  sum = a / b * 100;
  console.log(`Number ${a} is ${sum}% of ${b}`);
}
persentOfCircle(10, 11);

// Fourth exercise
const areaOfCircle = function (radius, a){
  radius = 2 * radius * Math.PI;
  radius= radius.toFixed(2);
  console.log(`The area of circle ${a} is ${radius}`);
}
areaOfCircle(2);

//BONUS!!
const overFall = function (a, b){
  squareNum(a);
  halfNum(a);
  persentOfCircle(a, b);
  areaOfCircle(a);
}

//Other ones!

const drEvil = function(a){
  if( a < 1000000){
    console.log(`You have ${a} $ Dollars`);
  }else {
    console.log(`You have ${a} Pinky`);
  }
}
drEvil();

// Didnt finish it :(
const mixUp = function(a, b){
  const first = Math.floor( Math.random() * a.length );
  const second = Math.floor( Math.random() * b.length );
  console.log(`Original words are ${a} and ${b} and mixed one are ${first} and ${second}`);

}
mixUp("Ivan", "Veselinov");
