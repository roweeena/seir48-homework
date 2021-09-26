// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions
// which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
//

const rectangleA = {
  recLength: 4,
  recWidth: 2
}

const rectangleB = {
  recLength: 5,
  recWidth: 5
}

const isSquare = function(shape) {
  if (shape.recLength === shape.recWidth) {
    console.log("This is a square");
  } else {
    console.log("This is not a square stupid");
  }
}

const findArea = function(shape) {
  area = shape.recLength * shape.recWidth;
  console.log('The area is: ' + area);
}

const findPerimeter = function(shape) {
  perimeter = shape.recLength * 2 + shape.recWidth * 2;
  console.log('The perimeter is: ' + perimeter);
}

isSquare(rectangleA);
isSquare(rectangleB);

findArea(rectangleA);
findArea(rectangleB);

findPerimeter(rectangleA);
findPerimeter(rectangleB);

// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

const triangleA = {
  sideA: 2,
  sideB: 2,
  sideC: 2
}

const triangleB = {
  sideA: 5,
  sideB: 3,
  sideC: 3
}

const triangleC = {
  sideA: 5,
  sideB: 4,
  sideC: 8
}

const isEquilateral = function (shape) {
  if (shape.sideA === shape.sideB && shape.sideA === shape.sideC) {
    console.log('This is an equilateral');
  } else {
    console.log('Equilateral triangles have sides all the same length, GO BACK TO SCHOOL!');
  }
}

const isIsosceles = function (shape) {
  if (shape.sideA === shape.sideB && shape.sideA !== shape.sideC) {
    console.log('This is an isosceles triangle');
  } else  if (shape.sideA === shape.sideC && shape.sideA !== shape.sideB) {
    console.log('This is an isosceles triangle');
  } else if (shape.sideB === shape.sideC && shape.sideA !== shape.sideC) {
    console.log('This is an isosceles triangle');
  } else {
    console.log('This is not an isosceles triangle - Is this your first day?');
  }
}

const triangleArea = function(shape) {
  const area = 0.25 * Math.sqrt( (shape.sideA + shape.sideB + shape.sideC) * (-shape.sideA + shape.sideB + shape.sideC) * (shape.sideA - shape.sideB + shape.sideC) * (shape.sideA + shape.sideB - shape.sideC) ); //Heron's Formula
  console.log('The area of your triangle is: ' + area);
}

const isObtuse = function(shape) {
  if (shape.sideA !== shape.sideB && shape.sideA !== shape.sideC) {
    console.log('This bad-boy is an obtuse triangle');
  } else {
    console.log('This is not obtuse. You know nothing about triangles!')
  }

}

isEquilateral(triangleA);
isEquilateral(triangleB);
isEquilateral(triangleC);

isIsosceles(triangleA);
isIsosceles(triangleB);
isIsosceles(triangleC);

triangleArea(triangleA);
triangleArea(triangleB);
triangleArea(triangleC);

isObtuse(triangleA);
isObtuse(triangleB);
isObtuse(triangleC);
