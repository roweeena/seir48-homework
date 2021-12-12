
const simpleSymbols = function (str){

let result;
let array = str.split('');

const letter = /[a-zA-Z]/

array.forEach((char, i) => {
// console.log(char, i);

if (char.match(letter)){
  // console.log(i);
  if(str[i - 1] !== "+" || str[i - 1] !== "+"){
    result = false;
  } else {
    result = true
  }
}
})
return result
}

console.log(simpleSymbols("++d+===+c++==a"))
// expect to return false
console.log(simpleSymbols("++d+===+c++==d"))
 // expect to return false
console.log(simpleSymbols("++d+===+c++==+a+=="))
// // expect to return true



// const simpleSymbols = function (str){
//   // console.log(str);
//   let letters = str.match(/[a-z]/gi);
//   let matches = str.match(/\+[a-z]\+/gi);
//
//  if( ! str.length || matches){
//     return false;
//   }
//     return letters.length = match.length;
//
// }

// console.log(simpleSymbols("++d+===+c++==a"))
// // expect to return false
// console.log(simpleSymbols("++d+===+c++==d"))
//  // expect to return false
// console.log(simpleSymbols("++d+===+c++==+a+=="))
// // // expect to return true
