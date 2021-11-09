// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below,
// write the following functions which accept a `rectangle` object as an argument:
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
    length : 4,
    width: 4
};

const isSquare = function (input) {
      if(input.length === input.width){
        return  `Its  a sqaure`;
      } else {
        return `its not a square`;
      }
};

console.log(isSquare(rectangle));

const area = function (shape) {
      var total = shape.length * shape.width;
      return total;
};

console.log(area(rectangle));


const perimeter = function (around) {
     var final = around.length + around.width +around.length + around.width;
     return  final;
};

console.log(perimeter(rectangle));


// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below,
// write the following functions which accept a `triangle` object as an argument:
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
const triangle = {
  a : 3,
  b : 3,
  c :3
};


const isEquilateral = function (sides) {
       if(sides.a === sides.b && sides.b === sides.c){
         return `the triangle is equilateral`;
       }
       else {
         return `the triangle is not equilateral`;
       }
};

console.log(isEquilateral(triangle));

const isIsosceles = function (diff) {
       if(diff.a === diff.b && diff.b !== diff.c){
         return `the triangle is isosceles`;
       }
       else {
         return `the triangle is not isosceles`;
       }
};

console.log(isIsosceles(triangle));


const areaTri = function (shape) {
       var tot = (Math.sqrt(3)/4) * shape.a *  shape.a;
       return tot;
};
console.log(areaTri(triangle));

const isObtuse =function (form) {
      if((form.a ** 2 + form.b ** 2) < form.c ** 2 ){
        return `the triangle is obtuse`;
      }else{
        return `the triangle is not obtuse`;
      }
};

console.log(isObtuse(triangle));


//
// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object.
// The object contains item names and prices (itemName: itemPrice).
// The function should return the total price of the shopping cart.
// Example
//
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

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (shop) {
  var newElements = Object.values(shop);

        var key = 0;
        for( i =0 ; i< newElements.length; i++){
          var storeEl = newElements[i];
         key += Number.parseFloat(storeEl); // convert the price to a float and add it to the sum
        }
        return key ;

};

console.log(cashRegister(cartForParty));


//
//
// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way
// to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
 // -----array.lenth ==16
// - You must have at least two different digits represented (all of the digits cannot be the same)
 //---
// - The final digit must be even
//---indexof[15]==even
// - The sum of all the digits must be greater than 16
// --sum of an array > 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//



 const validateCreditCard = function (array) {
   // number must be 16 digits in lenth
             if(array.length !== 16){
                 return false;
               }
               // All of the digits must be numbers
             for(var i = 0; i < array.length; i++){
               // store the current digit
               var currentNumber = array[i];

               // turn the digit from a string to an integer (
               // if the digit is in fact a digit and not anther char)
               currentNumber = Number.parseInt(currentNumber);

               // check that the digit is a number
               if(!Number.isInteger(currentNumber)){// use isInteger to check the numbre or not
                 return false;
               }
             }
             // The credit card number must be composed of at least two different digits
             // (i.e. all of the digits cannot be the same)
           var obj = {};
           for(var i = 0; i < array.length; i++){
             obj[array[i]] = true;
           }
           if(Object.keys(obj).length < 2){
             return false;
           }

           // The final digit of the credit card number must be even
           if(array[array.length - 1] % 2 !== 0){
             return false;
           }

           // The sum of all the digits must be greater than 16
           var sum = 0;
           for(var i = 0; i < array.length; i++){
             sum += Number(array[i]);
           }
           if(sum <= 16){
             return false;
           }

           return true;
         };



console.log(validateCreditCard('9999999988880000'));
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules,
 // and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
