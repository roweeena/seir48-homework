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

function evenOddSums(array) {
  evens = 0;
  odds = 0;
  squashed = [];

  array.forEach((e) => {
    if (e % 2 == 1) {
      odds += e;
    }
    if (e % 2 == 0) {
      evens += e;
    }
  });

  squashed.push(evens);
  squashed.push(odds);

  return squashed;
}

console.log(evenOddSums([50, 60, 60, 45, 71])); // => [170, 116]
console.log(evenOddSums([5, 68, 38, 4, 71]));