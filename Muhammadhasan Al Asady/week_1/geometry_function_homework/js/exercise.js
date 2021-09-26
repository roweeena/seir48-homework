// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
const rectangleA = {
  length: 8,
  width: 4
};
// * isSquare - Returns whether the rectangle is a square or not

const isSquare = function(shape) {
  if (shape.length === shape.width){
    return 'sqaure'
  } else {
    return 'rectangle'
  }
}

console.log(isSquare(rectangleA));

// * area - Returns the area of the rectangle
const isArea = function(shape){
  const area = shape.length * shape.width;
  return area;
}

console.log(isArea(rectangleA));

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function (shape) {
const perimeter = shape.length + shape.length + shape.width + shape.width;
return perimeter;
}
console.log(isArea(rectangleA));


//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//

// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const triangleA = {
 sideA: 3,
 sideB: 4,
 sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not

const isEquilateral = function (shape) {
  const equilateral = shape.sideA === shape.sideB === shape.sideC;
  return equilateral;

}
console.log(isEquilateral(triangleA));



const isEquilateral1 = function (shape) {
  if (shape.sideA === shape.sideB === shape.sideC){
  return 'true'
  }  else {
  return 'false'}
}


console.log(isEquilateral1(triangleA));


// * isIsosceles - Returns whether the triangle is isosceles or not
//I TRIED 2 DIFFERENT WAYS AND COULD NOT GET AN ANSWER
const isIsosceles = function (shape) {
  if (shape.sideA === shape.sideB){
    return 'true'}
    else if (shape.sideA === shape.sideC){
      return 'true'}
      else if (shape.sideA === shape.sideC){
        return 'true'
      } else {
        return 'false'
    }
  }
  console.log(isEquilateral1(triangleA));

  //I TRIED 2 DIFFERENT WAYS AND COULD NOT GET AN ANSWER

  const isIsosceles1 = function (shape){
    if (shape.sideA === shape.sideB && shape.sideA !== shape.sideC) {
      return 'true'
  } else if (shape.sideB === shape.sideC && shape.sideB!==shape.sideC){
  return 'true'}
 else {
  return 'false'}
}
console.log(isEquilateral1(triangleA));


// * area - Returns the area of the Triangle
const isArea1= function (shape){
const area = ((shape.sideA + shape.sideB + shape.sideC)/ 2) {
  return area}
}

}

// The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example


// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```
