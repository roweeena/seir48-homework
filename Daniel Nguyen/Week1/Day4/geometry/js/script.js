// # Geometry Function Lab

// ### Part 1, Rectangle

// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:

const rectangleA = {
  length: 4,
  width: 4
};

// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function(rectangle) {
  return rectangle.length === rectangle.width;
}

console.log('isSquare', isSquare(rectangleA));

// * area - Returns the area of the rectangle
const areaOfRectangle = function(rectangle) {
  return rectangle.length * rectangle.width;
}

console.log('areaOfRectangle', areaOfRectangle(rectangleA));

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function(rectangle) {
  return (rectangle.length + rectangle.width) * 2;
}

console.log('perimeter', perimeter(rectangleA));


// ### Part 2, Triangle

// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function(triangle) {
  return triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC;
}

console.log('isEquilateral', isEquilateral(triangleA));

// * isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function(triangle) {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  return (a === b && a !== c) || (a !== b && a === c);
}

console.log('isIsosceles', isIsosceles(triangleA));

// * area - Returns the area of the Triangle
const areaOfTriangle = function(triangle) {
  const base = triangle.sideA;
  const height = Math.sqrt(triangle.sideC - triangle.sideA/2);
  return base * height / 2;
}

console.log('areaOfTriangle', areaOfTriangle(triangleA));

// * isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function(triangle) {
  const sides = Object.values(triangle);
  const sortedSides = Object.values(triangle).sort((a, b) => a - b);

  // Where a < b < c...
  const a = sortedSides[0];
  const b = sortedSides[1];
  const c = sortedSides[2];

  return c*c > (a*a + b*b)
}

console.log('isObtuse', isObtuse(triangleA));
