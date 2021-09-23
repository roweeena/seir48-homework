// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (number) 
{
    console.log(`The result of squaring the number ${number} is ${number * number}.`);
    return number * number;
}
squareNumber(5);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (number) 
{
    console.log(`Half of ${number} is ${number/2}.`);
    return number / 2;
}
halfNumber(5);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (number, percent) 
{
    console.log(`${number / (100/percent)} is ${percent}% of ${number}.`);
    return number / (100/percent);
}
percentOf(10,25)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function (radius)
{
    console.log(`The area for a circle with radius ${radius} is ${(Math.PI* (radius*radius)).toFixed(2)}`);
    return Math.PI* (radius*radius);
}
areaOfCircle(3);