//////////////////////////////////////////////////////////////////////////
// ---------------------------22/09/21------------------------------------

// function raindrop(input) {
//     let string = "";
//     // concatenate onto string
//     if (input % 3 == 0) {
//         string += "Pling";
//     }
//     if (input % 5 == 0) {
//         string += "Plang";
//     }
//     if (input % 7 == 0) {
//         string += "Plong";
//     }
//     // return as a conditional stascorent:
//     return string || input.toString();
// }

// console.log(raindrop(28));
// console.log(raindrop(34));
// console.log(raindrop(1755));

//////////////////////////////////////////////////////////////////////////
// ---------------------------23/09/21------------------------------------

// // Warmup - Simon Says
// // Create a function that takes an input and returns Simon's response as follows:
// //  Simon answers 'Sure.' if you ask him a question.
// //  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// //  He says 'Fine. Be that way!' if you address him without actually saying anything.
// //  He answers 'Whatever.' to anything else

// function simonSays(input) {
//     if (input.includes("?") && input !== input.toUpperCase()) {
//         return "Sure";
//     } else if (input === "") {
//         return "Fine. Be that way!;";
//     } else if (input == input.toUpperCase()) {
//         return "Woah, chill out!";
//     } else {
//         return "Whatever";
//     }
// }

// console.log(simonSays("Hey are you there?")); // Sure
// console.log(simonSays("LISTEN TO ME")); // Whoa chill out!
// console.log(simonSays("")); // Fine. Be that way!
// console.log(simonSays("Do your laundry.")); // Whatever
// console.log(simonSays("I'M TALKING TO YOU?")); // Whoa chill out!

//////////////////////////////////////////////////////////////////////////
// ---------------------------24/09/21------------------------------------

// // # Leap Year Warmup Exercise

// function isLeapYear() {
//     let year = document.getElementById("text1").value;
//     if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//         const resultText = document.querySelector(".result");
//         resultText.innerText = "True!";
//     } else {
//         const resultText = document.querySelector(".result");
//         resultText.innerText = "False!";
//     }
// }

//////////////////////////////////////////////////////////////////////////
// ---------------------------27/09/21------------------------------------

// function pigLatin(input) {
//   let wordArray = input.split(" ");
//   let result = [];

//   for (i = 0; i < wordArray.length; i++) {
//     if (wordArray[i].includes("!") || wordArray[i].includes(".") || wordArray[i].includes("?")) {
//       result.push(wordArray[i]);
//     } else {
//       const firstLetter = wordArray[i].charAt(0);
//       const restOfString = wordArray[i].substr(1);
//       let newWord = restOfString + firstLetter + "ay";
//       // console.log("new word: " + newWord);
//       result.push(newWord);
//       // console.log(result);
//     }
//   }
//   return result.join(" ");
// }

// console.log(pigLatin("Cat breath smells like cat food !"));
// console.log(pigLatin("Derrick smells like eggs ."));

//////////////////////////////////////////////////////////////////////////
// ---------------------------28/09/21------------------------------------

// sum any number of arrays using argument, numbers or arrays:
// function arraySum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (Array.isArray(arguments[i])) {
//             sum += arguments[i].reduce((previous, current) => previous + current);
//         } else {
//             sum += Number(arguments[i]);
//         }
//     }
//     console.log(sum);
// }

// arraySum([1, 1, 1, 1, 1.5], [1, 1, 1.5, 1, 1], [1, 1, 1.5, 1, 1], 1);

//////////////////////////////////////////////////////////////////////////
// ---------------------------29/09/21------------------------------------

// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of names you can go to the beach.
// example:
// with the following forecast:

// Mon: the temperature is 20 and there is 12mm of rain
// Tues: the temperature is 25 and there is 6mm of rain
// Wed: the temperature is 27 and there is 24mm of rain
// Thurs: the temperature is 32 and there is 65mm of rain
// Fri: the temperature is 18 and there is 2mm of rain
// Sat: the temperature is 26 and there is 0mm of rain
// Sun: the temperature is 27 and there is 14mm of rain

// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain,
// the output of the program should be: Tuesday and Saturday

// function beachday() {
//   const data = {
//     dayName: [
//       {
//         name: "Monday",
//         score: 20,
//         rain: 12,
//       },
//       {
//         name: "Tuesday",
//         score: 25,
//         rain: 6,
//       },
//       {
//         name: "Wednesday",
//         score: 27,
//         rain: 24,
//       },
//       {
//         name: "Thursday",
//         score: 32,
//         rain: 65,
//       },
//       {
//         name: "Friday",
//         score: 18,
//         rain: 2,
//       },
//       {
//         name: "Saturday",
//         score: 26,
//         rain: 0,
//       },
//       {
//         name: "Sunday",
//         score: 27,
//         rain: 14,
//       },
//     ],
//   };

//   // console.log(data.dayName[1].name);
//   // console.log(data.dayName[1].score);

//   let beachdays = [];

//   for (let i = 0; i < data.dayName.length; i++) {
//     if (data.dayName[i].score >= 24 && data.dayName[i].rain < 8) {
//       beachdays.push(data.dayName[i].name);
//     }
//   }
//   console.log(`We can go to the beach on: ${beachdays.join(", ")}.`);
// }

// beachday();

//////////////////////////////////////////////////////////////////////////
// ---------------------------30/09/21------------------------------------
// Write a function that announces 'Spinning the prize wheel', then randomly chooses a
// string from the array similar to the one below, and prints it to console.

// const prizes = [ "🚗 New car", "🌴 Holiname", "🥁 Drum machine", "❌ You lose" ]

// Bonus 1:

// Modify the function to remember the prizes the user has won so far, and log them in the
//  console on each spin. If the user spins the wheel and lands on "❌ You lose", laugh at
//  them in the console and remove all prizes they have won so far.

// Bonus 2:

// Add a delay between spinning the wheel and showing the results for suspense.

// Bonus 3:

// Play the following sounds when the user spins the wheel, wins and loses: Sounds (see gist for link)

// const prizes = ["🚗 New car", "🌴 Holiname", "🥁 Drum machine", "❌ You lose"];

// const wheelButton = document.getElementById("wheelbutton");
// const prizeArea = document.getElementById("prize");
// const prizesWon = [];

// function spinWheel() {
//   let yourPrize = prizes[Math.floor(Math.random() * prizes.length)];

//   // after click, waits 500ms to select the prize
//   setTimeout(function () {
//     document.getElementById("prize").innerText = yourPrize;
//     if (yourPrize !== "❌ You lose") {
//       prizesWon.push(yourPrize);
//       let audio = new Audio("win.wav");
//       audio.play();
//     } else {
//       let audio = new Audio("lose.wav");
//       audio.play();
//       // empty array on lose:
//       prizesWon.length = 0;
//       console.log(prizesWon);
//     }
//   }, 1000);

//   document.getElementById("cache").innerText = prizesWon.join(" \n ");
//   document.getElementById("prize").innerText = " Spinning... ";
// }

// wheelButton.addEventListener("click", spinWheel);

//////////////////////////////////////////////////////////////////////////
// ---------------------------01/10/21------------------------------------
// Write a function called mumble that accepts a single string argument:

// The function should return a string that has each character repeated the number of
// times according to its position within the string argument.Additionally, each
// repeated section of characters should be separated by a hyphen(-).
// Bonus: Capitalise the first character e.g. mumble('abc'); //=> 'A-Bb-Ccc'

// function mumble(string) {
//   let array = string.split("");
//   let result = [];
//   array.forEach(function (value, i) {
//     result.push(string[i].repeat(i + 1));
//   });
//   return result.join("-");
// }

// console.log(mumble("bears"));

//////////////////////////////////////////////////////////////////////////
// ---------------------------11/10/21------------------------------------
//
// Add scores up to reach a target number, using object.keys:

// const allergen = {
//   1: "eggs",
//   2: "peanuts",
//   4: "shellfish",
//   8: "strawberries",
//   16: "tomatoes",
//   32: "chocolate",
//   64: "pollen",
//   128: "cats",
// };

// function badFoods(value) {
//   let allergies = [];
//   // Object.entries() method returns an array of a given object's own enumerable
//   // string - keyed property[key, value] pairs.
//   // assigning to two variables at once here:
//   for (const [id, name] of Object.entries(allergen)) {
//     //  console.log(`${id}: ${name}`);
//     if (id & value) {
//       allergies.push(name);
//     }
//   }
//   return allergies;
// }

// console.log(badFoods(34));
// console.log(badFoods(30));
// console.log(badFoods(13));

//////////////////////////////////////////////////////////////////////////
// ---------------------------01/11/21------------------------------------
// Arrays - Flatten and Reverse

// The goal of this exercise is to manipulate arrays by creating a function
//   that can reverse an array and by creating a function that can flatten an array.
//   Do not use any libraries to complete this task - write this stuff from scratch using
//   standard JS methods and objects.

// Make two functions:
// - reverse
// - flatten

// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]

// -----------------------------
//   You only need to make flatten work to one level deep! You should be able to flatten
// this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]

// -----------------------------
// Bonus
// Make one that flattens any array that you pass into it: ["Hello", [[["World"], 42]]] ->
//   ["Hello", "World", 42]

// function reversedArray(array) {
//   // quick way:
//   // let backwards = array.reverse();
//   let reversedArray = [];

//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArray.push(array[i]);
//   }

//   return reversedArray;
// }

// function flatten(array) {
//   // quick way:
//   let flatBoi = array.flat(1); // specify levels of array to flatten
//   return flatBoi;
// }

// console.log(reversedArray([1, 2, 3, 4]));

// console.log(flatten(["Hello", ["World", 42]]));

//////////////////////////////////////////////////////////////////////////
// ---------------------------02/11/21------------------------------------

// # Counting Valleys
// An avid hiker keeps meticulous records of their hikes.During the last hike that took exactly
// some number of steps, for every step it was noted if it was an uphill`U`, or a downhill, `D`
// step.Hikes always start and end at sea level, and each step up or down represents a 1 unit
// change in altitude.We define the following terms:
// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from
// sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down from
// sea level and ending with a step up to sea level.
// Write a function that accepts a string as a sequence of up and down steps during a hike, return
// the number of valleys walked through.
// ```js
// counting_valleys('UDDDUDUU')
// // => expect to return 1
// ```
// ### Explanation
// If we represent `_` as sea level, a step up as `/`, and a step down as `\`, the hike can be drawn as:
// ```
// _/\      / \
//    \    /   \ /
//     \/\/
// ```

// function counting_valleys(string) {
//   let elevation = 0;
//   let valleys = 0;

//   string.split("").forEach((letter) => {
//     if (letter == "U") {
//       elevation++;
//       if (elevation == 0) {
//         valleys++;
//       }
//     } else {
//       elevation--;
//     }
//   });
//   return valleys;
// }

// console.log(counting_valleys("UDDDUDUU"));
// console.log(counting_valleys("DDUUDDUDUUUD"));

//////////////////////////////////////////////////////////////////////////
// ---------------------------03/11/21------------------------------------
// Even and Odd sums
// Take in an array and return an array of the sums of even and odd numbers.
// For bonus points, use forEach in your solution.
// evenOddSums([50, 60, 60, 45, 71]); => [170, 116]

// function evenOddSums(array) {
//   evens = 0;
//   odds = 0;
//   squashed = [];

//   array.forEach((e) => {
//     if (e % 2 == 1) {
//       odds += e;
//     }
//     if (e % 2 == 0) {
//       evens += e;
//     }
//   });

//   squashed.push(evens);
//   squashed.push(odds);

//   return squashed;
// }

// console.log(evenOddSums([50, 60, 60, 45, 71])); // => [170, 116]
// console.log(evenOddSums([5, 68, 38, 4, 71]));

//////////////////////////////////////////////////////////////////////////
// ---------------------------04/11/21------------------------------------

// ## Recurring Letters

// Create a function that takes in a sentence and outputs the letter that's repeated
// most frequently.

// ```js
// recurringLetter('just a simple sentence chilling');
// // => The recurring letter of "just a simple sentence chilling" is e
// ```

// Use simple sentences with regular spaces between each word(like in the sentence
//   you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..

// *Hint:* You'll need to loop and count each of the letters.

// **Bonus:** Create another function that capitalises a letter within the sentence.
// ```js
// capitaliseLetter('just a simple sentence chilling', 'e');
// => just a simplE sEntEncE chilling

// function recurringLetter(string) {
//   string.split("").forEach((letter) => {

// }

// recurringLetter('just a simple sentence chilling');

//////////////////////////////////////////////////////////////////////////
// ---------------------------04/11/21------------------------------------

// Given a number, return a string with dash '-' marks before and after each odd integer,
// but do not begin or end the string with a dash mark.

// -----------------
// Tests:

// dashatize(274), "2-7-4", "Should return 2-7-4");
// dashatize(5311), "5-3-1-1", "Should return 5-3-1-1");
// dashatize(86320), "86-3-20", "Should return 86-3-20");
// dashatize(974302), "9-7-4-3-02", "Should return 9-7-4-3-02");
// dashatize(NaN), "NaN", "Should return NaN");
// dashatize(0), "0", "Should return 0");
// dashatize(-1), "1", "Should return 1");
// dashatize(-28369), "28-3-6-9", "Should return 28-3-6-9");

// function dashatize(num) {
//   if (isNaN(num)) {
//     return num;
//   }

//   let digits = num.toString().split("");
//   let result = "";

//   digits.forEach((e) => {
//     if (e % 2 !== 0) {
//       result += "-";
//       result += e;
//       result += "-";
//     } else {
//       result += e;
//     }
//   });

//   result = result.replace(/--/g, "-");

//   if (result.startsWith("-")) {
//     // result = result.substr(1, 5); ???? hmm
//   }

//   if (result.endsWith("-")) {
//     result = result.substr(0, result.length - 1);
//   }

//   console.log(result);
// }

// dashatize(-28369);
// dashatize(86320);
// dashatize(974302);
// dashatize(274);
// dashatize(NaN);
// dashatize(0);
// dashatize(-1);
// dashatize(5311);
// dashatize("pony");

//////////////////////////////////////////////////////////////////////////
// ---------------------------08/11/21------------------------------------
//  # Pairwise

//  Write a function that accepts an array and a number, from the array find the element
//  pairs whose sum equal to that number, and return the sum of their indices.

//  If there are multiple valid pairs that have the same numeric elements but different
// indices, return the smallest sum of indices.Once an element has been used, it cannot
// be reused to pair with another.

// For example:
// ```js
// pairwise([7, 9, 11, 13, 15], 20)
// // => return 6
// // The pairs that sum to 20 are [7, 13], [9, 11] at indices: 0, 3, 1, 2 (total: 6).

// // pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10)
// // // => returns 11.
// // // The pairs that sum to 10 are [1, 9], [12, -2] at indices: 0, 6, 2, 3 (total: 11).
// ```
// ## Bonus

// Find and return all the pairs of indices in the array when the sum is equal to a specific number.
// For example, pairwise([7, 9, 11, 13, 15], 20) returns:

// There is a pair at indices: [0, 3]
// There is a pair at indices: [1, 2]

// const pairwise = function (array, num) {
//   const indexList = []; // store indices

//   array.forEach((element, index) => {
//     const value = num - element; //
//     const indexNum = array.indexOf(value); // get index of value

//     console.log(
//       `The ${num} subtracted from the ${element} is ${value} at index ${indexNum}`
//     );

//     // if indexNum is -1, there is no corresponding value in array
//     if (indexNum >= 0) {
//       if (!indexList.includes(indexNum) && !indexList.includes(index)) {
//         indexList.push(index, indexNum);
//         console.log(indexList);
//       }
//     }
//   });
//   let sum = indexList.reduce((a, b) => a + b);
//   return sum;
// };

// // test here
// console.log(pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10));
// console.log(pairwise([7, 9, 11, 13, 15], 20));

/////////////////////// D's solution:
// function pairwise(array, sum) {
//   let indexSum = 0;
//   let indexPairs = [];
//   // putting unique numbers in a Set():
//   let valueHits = new Set();

//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (
//         array[i] + array[j] === sum &&
//         !(valueHits.has(array[i]) && valueHits.has(array[j]))
//       ) {
//         indexSum += i + j;
//         valueHits.add(array[i]);
//         valueHits.add(array[j]);
//         indexPairs.push([i, j]);
//       }
//     }
//   }

//   return [indexSum, indexPairs];
// }

// console.log(pairwise([7, 9, 11, 13, 15], 20));
// console.log(pairwise([1, 6, 12, -2, 0, 7, 9, 9], 10));

//////////////////////////////////////////////////////////////////////////
// ---------------------------22/11/21------------------------------------

// # The Collatz conjecture
// The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed
// it in 1937. It's also known as the 3n + 1 conjecture, the Ulam conjecture, the Kakutani's problem,
//     the Thwaites conjecture, Hasse's problem or the Syracuse problem, the sequence of numbers that
// results is referred to as the hailstone numbers or the wondrous numbers.

// The problem is defined as follows:

// ```
// Take any positive integer n. If n is even, divide it by 2 to get n / 2.
// If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
// Repeat the process indefinitely.
// ```
// The conjecture is that no matter what number you start with, you will always eventually reach 1.

// Your aim to create a function that will count how many times it takes for a particular number to reach 1.

// ## Task
// Write a program that given a number, verifies this conjecture for all positive numbers greater than
// one.Ideally your program will output when it has completed, how many cycles it ran for and all the
// steps it took to reach the end.

// Examples to verify your program can be found https://en.wikipedia.org/wiki/Collatz_conjecture.

function collatz(num) {
  let counter = 0;
  while (num !== 1) {
    if (num % 2 == 0) {
      num = num / 2;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
    counter++;
  }
  console.log(`Final num is ${num} and counter is ${counter}`);
}

collatz(12); // 1, 9

function collatz_recursive(num, count = 0) {
  if (num === 1) {
    console.log(`The final count is ${count}`);
    return count;
  }

  if (num % 2 == 0) {
    return collatz_recursive(num / 2, count + 1);
  } else {
    return collatz_recursive(num * 3 + 1, count + 1);
  }
}

collatz_recursive(12); // 9

//////////////////////////////////////////////////////////////////////////
// ---------------------------23/11/21------------------------------------
