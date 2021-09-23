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

let rectangleA = {
  length1: 4,
  width:4
};

function isSquare() {
  if (rectangleA.length1 === rectangleA.width) {
    console.log("it is",true);
    return true;
  }

}
isSquare();


function area() {
  const calcArea = rectangleA.length1 * rectangleA.width;
  console.log(calcArea);
  return calcArea;

}

area();

function perimeter() {
  const calcPerimeter = 2 *(rectangleA.length1 + rectangleA.width );
  console.log(calcPerimeter);
  return calcPerimeter;

}
perimeter();









// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following
// functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript


const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
// ```
function isIsosceles () {
if(triangleA.sideA === triangleA.sideB && triangleA.sideA === triangleA.sideC ) {
  console.log(false);
} else { (triangleA.sideB === triangleA.sideC)
  console.log("It is",true);
}

}
isIsosceles();

function isEquilateral () {
if(triangleA.sideA === triangleA.sideB && triangleA.sideB === triangleA.sideC ) {
  console.log("it is", true);
} else {
  console.log("It is",false);
}

}
isEquilateral();

// * area - Returns the area of the Triangle ½[√(a2 − b2 ⁄4) × b]

function areaT () {
  const sideC = triangleA.sideC*triangleA.sideC;
  const sideB = triangleA.sideB*triangleA.sideB;
  const calcArea = 1/2 * ( Math. sqrt( sideC - sideB/4) * triangleA.sideB);
  console.log(calcArea);
};

areaT();



// * isObtuse - Returns whether the triangle is obtuse or not cos A = (b2 + c2 − a2) / 2bc

function isObtuse() {
  const sideC = triangleA.sideC;
  const sideB = triangleA.sideB;
  const sideA = triangleA.sideA;
  const calcSides = 2*sideA*sideC;
  let cos1 = sideA*sideA + sideB*sideB - sideC*sideC;
  cos1 = cos1/calcSides;
  const calcCos = Math.cos(cos1);
 let degreeA = (180/Math.PI) * calcCos;
 let degreeB = degreeA; // isosceles
    // obtuse = 120, sum of angles = 180


  if (degreeA +degreeB > 60) {
    console.log("it is", false);
  }else {
    console.log("it is",true);
  }



}
isObtuse();
