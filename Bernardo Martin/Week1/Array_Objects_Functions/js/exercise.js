// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
const rectangleA = {
  length: 3,
  width: 5
};
const isSquare = function (rect) {
  if(rect.length === rect.width) {
    console.log(`This is a square`);
  } else {
    console.log(`This is a rectangle`);
  };
};
isSquare(rectangleA);
const area = function (rect) {
  console.log(`The area of this rectangle is ${rect.length * rect.width} square centimiters`);
};
area(rectangleA);

const perimeter = function (rect) {
  console.log(`The perimeter of this rectangle is ${rect.length*2 + rect.width*2}cm.`);
};
perimeter(rectangleA);
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle

// ```javascript
// const rectangleA = {
//   length: 4,
//   width: 4
// };
// ```
//
// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 3,
};
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 2,
};
const triangleC = {
  sideA: 3,
  sideB: 3,
  sideC: 3,
};
const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    console.log(`This triangle is Equilateral`);
  } else if (triangle.sideA === triangle.sideB || triangle.sideA === triangle.sideC || triangle.sideB === triangle.sideC) {
    console.log('This triangle is Isosceles');
  } else {
    console.log(`This triangle is Scalene`);
  };
};
isEquilateral(triangleA);
isEquilateral(triangleB);
isEquilateral(triangleC);


const areaOfTri = function (tri) {
  const s = ((tri.sideA + tri.sideB + tri.sideC)/2);
  const calcArea = Math.sqrt(s * (s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC));
  console.log(`The area of this triangle is ${Math.round(calcArea * 100)/100}`);
};
areaOfTri(triangleA);
areaOfTri(triangleB);
areaOfTri(triangleC);
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not

// ```javascript
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
// ```

// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.
// Example
const myCart = {banana: 3.9,
  watermelon: 7.3,
  mushrooms: 4.5,
  soyMilk: 2.3,
  dumplings:7.4};
const test = function (cart) {
  for (let key in cart) {
  let total= 0 += cart[key];
  console.log(total);
  };
};

test(myCart);

// ```
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
