// # Array and Functions Bonus Material
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwoNumbers = (num1, num2) => {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (num1, num2, num3) => {
    let largest;
    if(num1 >= num2 && num1 >= num3) {
        largest = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
    }
    else {
        largest = num3;
    }
    return largest;
}

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowelTest = (alpha) => {
    if (alpha.toLowerCase() === 'a' | 
        alpha.toLowerCase() === 'e' | 
        alpha.toLowerCase() === 'i' | 
        alpha.toLowerCase() === 'o' | 
        alpha.toLowerCase() === 'u') {
    return true;
    } else {
    return false;
    }
}

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = (array) => {
    let arrayTotal = 0;
    array.forEach (element =>  arrayTotal = arrayTotal + element);
    return arrayTotal;
}
// const sumArray = [1, 2, 3, 4];
// let arrayTotal = 0;
// sumArray.forEach (element =>  arrayTotal = arrayTotal + element);

const multiplyArray = (array) => {
    let arrayTotal = 1;
    array.forEach (element =>  arrayTotal = arrayTotal * element);
    return arrayTotal; 
}

// const multiplyArray = [1, 2, 3, 4];
// let arrayTotal = 0;
// multiplyArray.forEach (element =>  arrayTotal = arrayTotal * element);


// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

const reverseString = (string) => {
    let splitString = string.split("");
    let reversedArray = splitString.reverse();
    let joinedArray = reversedArray.join("");
    return joinedArray;
}

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.

const findLongestWord = (words) => { 
    let wordsSplit = words.split(' ');
    let longestWord = wordsSplit.reduce(function(longest, currentWord) {
        if(currentWord.length > longest.length)
           return currentWord;
        else
           return longest;
      }, "");
   return longestWord.length;
}

// findLongestWord("The circus arrives without warning")
// 7

// findLongestWord("No announcements precede it, no paper notices on downtown posts and billboards, no mentions or advertisements in local newspapers. It is simply there, when yesterday it was not.")
// 14

// findLongestWord("The towering tents are striped in white and black, no golds and crimsons to be seen. No color at all, save for the neighboring trees and the grass of the surrounding fields. Black-and-white stripes on grey sky; countless tents of varying shapes and sizes, with an elaborate wrought-iron fence encasing them in a colorless world. Even what little ground is visible from outside is black or white, painted or powdered, or treated with some other circus trick.")
// 15


// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.

const filterLongWords = (words, i) => {
    return words.filter((word) => {
        return word.length > i;
    });
}

// filterLongWords(['Saturday', 'Sabre', 'Globe', 'Astronomy', 'Thursday', 'Cat'], 6)
// (3) ['Saturday', 'Astronomy', 'Thursday']

