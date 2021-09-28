console.log('%cMondays, am I right?', "font-size: 40px; color: #b57edc")

// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"
// 


const pigIt = function(str){
    const result = [];
    const array = str.split(' ');
      //console.log(array)
    for (let i = 0; i < array.length; i++){
      if ( array[i].includes("!") || array[i].includes("?")){
        // array[i] === "!" also works

        result.push(array[i]);
        // if array element includes ! or ?, don't do anything and push it to the end of the result array
      } else {
        const firstChar = array[i].charAt(0);
        const restOfStr = array[i].substr(1);
        let newWord = restOfStr + firstChar + "ay";
        //console.log(`firstChar: ${firstChar}, restOfStr: ${restOfStr}, ${newWord}`)
        result.push(newWord) //push newly transformed word to the array
      //  console.log(result)
      }
    }
    return result.join(" "); // return new array as a string
}


//not expected to understand this - RegEx,  forEach, and ternary operator
// const pigIt = function(str){
//     const result = [];
//     const array = str.split(' ');

// //forEach is similar to for loop but uses arrow function syntax.. similar functionality but there’s less chance for accidental spelling errors and it’s easier to read.

// loop over the array and find the "word" variable. if it matches a punctuation mark then push it to the result array as is  OR transform the word to pig latin and push it to the result array

//     array.forEach(word => { word.match(/[?!]/) ? result.push(word) : result.push(word.substr(1) + word.charAt(0) + "ay");
//
//     })
    return result.join(" ");
// }
console.log(pigIt("Pig Latin is cool !"))
