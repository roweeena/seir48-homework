console.log("working");

const translate = function(input) {
  const inputArr = input.split(" ");
  let firstLetter = [];
  let withoutFirstLetter = [];
  let conversedStr = [];
  let result;

  if ( !inputArr.includes("?") || !inputArr.includes("!") || !inputArr.includes(".") ) {
    for (let i = 0; i < inputArr.length - 1; i ++) {
        firstLetter.push(inputArr[i][0]);
        withoutFirstLetter.push(inputArr[i].slice( 1, inputArr[i].length ));
    }
  }

  for (let n = 0; n < withoutFirstLetter.length; n ++) {
      conversedStr.push(withoutFirstLetter[n].concat(firstLetter[n]) + "ay") ;
  }

  conversedStr.push(inputArr[inputArr.length - 1]);

  result = conversedStr.join(" ");

  return result;
}

console.log(translate("Pig Latin is cool !"));
