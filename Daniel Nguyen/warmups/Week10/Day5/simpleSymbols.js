const simpleSymbols = (str) => str.match(/(?<!\+)\w/) !== null;

console.log( simpleSymbols("++d+===+c++==a") ); // false
console.log( simpleSymbols("++d+===+c++==d") ); // false
console.log( simpleSymbols("++d+===+c++==+a+==") ); // true
