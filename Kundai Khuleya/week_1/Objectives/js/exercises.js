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
const rectangle = {
   length: 4,
   width: 4,
 };

const isSquare = function(rectangle){
  const result = (rectangle.length === rectangle.width);
    return result;
  };

const area = function (rectangle){
  const rectangleArea = (rectangle.length * rectangle.width);
  return rectangleArea;
};

const parameter = function (rectangle){
  const rectangleParameter = (2 * (rectangle.length * rectangle.width));
  return rectangleParameter;
};

console.log(area(rectangle));
console.log(parameter(rectangle));
console.log(isSquare(rectangle));


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

 const isEquilateral = function(triangle){
   if (triangle.sideA === triangle.sideB === triangle.sideC);
     return result;
   };

  const isIsosceles = function(triangle){
     if (triangle.sideA === triangle.sideB && ! triangle.sideC);
       return result;
  };

  const isObtuse = function (triangle){
    if (triangle.sideA != triangle.sideB != triangle.sideC !=triangle.sideA);
      return result;
  };

const areaTriangle = function(triangle){
   const triangleArea = (Math.sqrt(perimeter * ((perimeter- triangle.sideA)* (perimeter - triangle.sideB)* (perimeter - triangle.sideC)));
 };

 console.log(areaTriangle(triangleA));
 console.log(isEquilateral(triangleA));
 console.log(isIsosceles(triangleA));
 console.log(isObtuse(triangleA));

 // # The Cash Register
 //
 // Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
 // Example
 //
 // ```
 Input
 const cartForParty = {
   banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
   apple: "0.60",
  nalgene: "10.34",
 proteinShake: "22.36"
  };
 //
 Output
cashRegister(cartForParty));  60.55
 // ```

const cashRegister = function (cartValuevalue){
  let cartValue = cartForParty.cashRegister( "total" );
};
return sum;

console.log((cashRegister)total);
