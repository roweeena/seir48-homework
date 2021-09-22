// # The Calculator
//
// ## Part 1
// - Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function (number) { //function name(parameter1, parameter2, parameter3) {
  // code to be executed }

//Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
// Inside the function, the arguments (the parameters) behave as local variables.

const store = number * number;

 console.log(`The result of squaring the number ${number} is ${store}`);
 return store;
 //When JavaScript reaches a return statement, the function will stop executing.
// If the function was invoked from a statement,
// JavaScript will "return" to execute the code after the invoking statement.
// Functions often compute a return value. The return value is "returned" back to the "caller":
};

squareNumber(3);

// - Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".


const halfNumber = function(number){
  const result = number / 2;
 console.log(`Half of 5 is ${result}`);
 return result;
};

halfNumber(5);

// - Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."

const percentOf = function (a ,b) {
  const result = (a/b) * 100 ;
  console.log(`${a} is ${result}% of ${b}.`);
  return result;
};

percentOf(2,4);


// - Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// - Bonus: Round the result so there are only two digits after the decimal.
//

const areaOfCircle = function (radius) {
  const result =  (Math.PI * radius * radius) .toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${result}.`);
  return result;
};

areaOfCircle(2);


// ## Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// - Take half of the number and store the result.
// - Square the result of #1 and store that result.
// - Calculate the area of a circle with the result of #2 as the radius.
// - Calculate what percentage that area is of the squared result (#3).




const fresh = function (number) {
  const one = halfNumber(number);
  const two = squareNumber(one);
  const three = areaOfCircle(two);
  const four = percentOf(two, three);
};

fresh(5);
