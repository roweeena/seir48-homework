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

const rectangleA = {
  length: 4,
  width: 4
};

const rectangleB = {
  length: 6,
  width: 4
};

const rectangleC = {
  length: 4,
  width: 6
};

const rectangleD = {
  length: 15,
  width: 8
};

// const isSquare = (rectangle) => {
//   if (rectangle.length === rectangle.width) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isSquare = rectangle => (rectangle.length === rectangle.width) ? true : false;

const areaRectangle = rectangle => rectangle.length * rectangle.width;

const perimeterRectangle = rectangle => 2 * (rectangle.length + rectangle.width);

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
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const triangleB = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

const triangleC = {
  sideA: 8,
  sideB: 6,
  sideC: 10
};

const triangleD = {
  sideA: 20,
  sideB: 60,
  sideC: 39
};

const isEquilateral = (triangle) => {
  if (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC) {
    return true;
  } else {
    return false;
  }
}

const isIsosceles = (triangle) => {
  if (triangle.sideA === triangle.sideB) {
    return true;
  } else if (triangle.sideB === triangle.sideC) {
    return true;
  } else if (triangle.sideC === triangle.sideA) {
    return true;
  } else {
    return false;
  }
}

const areaTriangle = (triangle) => {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  // semi-perimeter
  const s = (a + b + c) / 2;

  // heron's formula
  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
}


const isObtuse = (triangle) => {
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;

  if (a * a + b * b < c * c) {
    return true;
  } else if (c * c + b * b < a * a) {
    return true;
  } else if (a * a + c * c < b * b) {
    return true;
  } else {
    return false;
  }
}
