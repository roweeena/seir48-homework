// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
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
//////////////////////
const isSquare = obj => {

  if (obj.length === obj.width) {
    return true;
  }
  return false;
}
//////////
const area = obj => {

  return obj.length * obj.width;
}
////////////

const perimeter = obj => {

  return (2 * obj.width) + (2 * obj.length);
}
///////////////////////
const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 4,
  width: 8
};

// console.log(isSquare(rectangleA));
// console.log(isSquare(rectangleB));
// console.log(area(rectangleA));
// console.log(area(rectangleB));
// console.log(perimeter(rectangleA));
// console.log(perimeter(rectangleB));


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
const isEquilateral = obj => {

  if ( obj.sideA === obj.sideB && obj.sideB === obj.sideC ) {
    return true;
  }
  return false;
};
///////////////////////////
const isIsosceles = obj => {

  let sideCount = 0;


}
///////////////////////
const area = obj => {


}
///////////////////
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};

// console.log(isEquilateral(triangleA));
// console.log(isEquilateral(triangleB));
