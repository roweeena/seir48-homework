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
//     // return as a conditional statement:
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
// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.
// example:
// with the following forecast:

// Monday: the temperature is 20 and there is 12mm of rain
// Tuesday: the temperature is 25 and there is 6mm of rain
// Wednesday: the temperature is 27 and there is 24mm of rain
// Thursday: the temperature is 32 and there is 65mm of rain
// Friday: the temperature is 18 and there is 2mm of rain
// Saturday: the temperature is 26 and there is 0mm of rain
// Sunday: the temperature is 27 and there is 14mm of rain

// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program should be: Tuesday and Saturday

// function beachDay() {
//   const data = {
//     dayName: [
//       {
//         day: "Monday",
//         temp: 20,
//         rain: 12,
//       },
//       {
//         day: "Tuesday",
//         temp: 25,
//         rain: 6,
//       },
//       {
//         day: "Wednesday",
//         temp: 27,
//         rain: 24,
//       },
//       {
//         day: "Thursday",
//         temp: 32,
//         rain: 65,
//       },
//       {
//         day: "Friday",
//         temp: 18,
//         rain: 2,
//       },
//       {
//         day: "Saturday",
//         temp: 26,
//         rain: 0,
//       },
//       {
//         day: "Sunday",
//         temp: 27,
//         rain: 14,
//       },
//     ],
//   };

//   // console.log(data.dayName[1].day);
//   // console.log(data.dayName[1].temp);

//   let beachDays = [];

//   for (let i = 0; i < data.dayName.length; i++) {
//     if (data.dayName[i].temp >= 24 && data.dayName[i].rain < 8) {
//       beachDays.push(data.dayName[i].day);
//     }
//   }
//   console.log(`We can go to the beach on: ${beachDays.join(", ")}.`);
// }

// beachDay();

//////////////////////////////////////////////////////////////////////////
// ---------------------------30/09/21------------------------------------
// Write a function that announces 'Spinning the prize wheel', then randomly chooses a
// string from the array similar to the one below, and prints it to console.

// const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ]

// Bonus 1:

// Modify the function to remember the prizes the user has won so far, and log them in the ///  console on each spin. If the user spins the wheel and lands on "❌ You lose", laugh at /  them in the console and remove all prizes they have won so far.

// Bonus 2:

// Add a delay between spinning the wheel and showing the results for suspense.

// Bonus 3:

// Play the following sounds when the user spins the wheel, wins and loses: Sounds (see gist for link)

// const prizes = ["🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose"];

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

function mumble(string) {
  let array = string.split("");
  let result = [];
  array.forEach(function (value, i) {
    result.push(string[i].repeat(i + 1));
  });
  return result.join("-");
}

console.log(mumble("bears"));
