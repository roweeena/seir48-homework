// Part 1
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = (number) => {
	const squared = number * number;
	console.log(`The result of squaring the number ${ number } is ${ squared }.`);
	return squared;
}

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = (number) => {
	const half = number/2;
	console.log(`Half of ${ number } is ${ half }.`)
	return half;
}

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = (n1,n2) => {
	const percent = n1/n2 * 100;
	const percent_two_decimal = percent.toFixed(2);
	console.log(`${ n1 } is ${ percent_two_decimal }% of ${ n2 }.`);
	return percent_two_decimal;
}

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = (radius) => {
	const area = Math.PI * radius * radius;
	const area_two_decimal = area.toFixed(2);
	console.log(` The area for a circle with radius ${radius} is ${area_two_decimal}.`)
	return area_two_decimal;
}
// Bonus: Round the result so there are only two digits after the decimal.

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const kitchenSink = (n) => {
	const halfOf = halfNumber(n);
	console.log(halfOf);
	const squareOf = squareNumber(halfOf);
	console.log(squareOf);
	const circleArea = areaOfCircle(squareOf);
	console.log(circleArea);
	const percentOfSquared = percentOf(circleArea, squareOf);
	console.log(`Final answer is ${ percentOfSquared}.`);
}





