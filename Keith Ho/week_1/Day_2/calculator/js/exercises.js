// #Part 1

const squareNumber = function(num) {
  const squareNum = num ** 2;
  const result = `The result of squaring the number ${ num } is ${ squareNum }.`;
  console.log(result);
}

squareNumber(3);

const halfNumber = function(num) {
  const halfNum = num / 2;
  const result = `Half of ${ num } is ${ halfNum }.`;
  console.log(result);
}

halfNumber(5);

const percentOf = function(num1, num2) {
  const percentage = ( num1 / num2 ) * 100;
  const result = `${ num1 } is ${ percentage}% of ${ num2 }.`;
  console.log(result);
}

percentOf(2, 4);

const areaOfCircle = function(radius) {
  const pi = Math.PI;
  const area = pi * ( radius ** 2 );
  // const result = `The area for a circle with radius ${ radius} is ${ area }.`;
  // console.log(result);
  const roundArea = Math.round( area * 100 ) / 100;
  // const roundArea = +( Math.round( area + "e+2" )  + "e-2" ); // best way
  const result = `The area for a circle with radius ${ radius} is ${ roundArea }.`;
  console.log(result);
}

areaOfCircle(2);

// #Part 2

const calculation = function(num) {
  const halfNum = num / 2;
  const squareNum = halfNum ** 2;
  const pi = Math.PI;
  const area = pi * ( squareNum ** 2 );
  const percentage = ( area / squareNum ) * 100;
  const result = `The area of a circle with the result of squared number as the radius ${ area} and percentage that area is of the squared number is ${ percentage }%.`;
  console.log(result);
}

calculation(1);
calculation(9.6);
