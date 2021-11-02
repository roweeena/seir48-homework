// console.log('It\'s working!');
//Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"

// //define the function
// const translator = function(str) {
//     // variable to store the new array of split up words from the sentence
//     const result = [];
//     const array = str.split(' ');
//     // iterate through all the words i to ensure that each of the words
//     for (let i = 0; i < array.length; i++)
//         if ( array[i].includes("!") || array[i].includes("?")){
//             result.push(array[i]);
//         } else {
//                 const firstChar = array[i].charAt(0);
//                 const restOfStr = array[i].substr(1);
//                 let newWord = restOfStr + firstChar + "ay";
//                 result.push(newWord) //push neword to the array
//               //  console.log(result)
//         }
//         return result.join(" "); 
//     }

// console.log(translator("Pig Latin is cool !"))

const pigLatin = function(str){
    const result = [];
    const array = str.split(' ');

    array.forEach(word => { word.match(/[?!]/) ? result.push(word) : result.push(word.substr(1) + word.charAt(0) + "ay");

    })
    return result.join(" ");
}
console.log(pigLatin("Pig Latin is cool !"))