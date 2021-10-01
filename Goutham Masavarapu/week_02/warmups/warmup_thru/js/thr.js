// # Prize wheel
//
// Write a function that announces 'Spinning the prize wheel', then randomly chooses a string from
// the array similar to the one below, and prints it to console.
//
// const prizes = [
//   "🚗 New car",
//   "🌴 Holiday",
//   "🥁 Drum machine",
//   "❌ You lose"
// ]
//
// --------------
const prizes = [
  "🚗 New car",
  "🌴 Holiday",
  "🥁 Drum machine",
  "❌ You lose"
];
// const winner = function (prize) {
//         // Returns a random integer between o and prize.length
//           let one =   Math.floor(Math.random() * prize.length);
//           return prize[one];
//
//       };
//
// console.log(winner(prizes));
//
// ### Bonus 1:
//
// Modify the function to remember the prizes the user has won so far, and
// log them in the console on each spin.
// If the user spins the wheel and lands on "❌ You lose", laugh at them in the console and remove all prizes
// they have won so far.
const winner = function (prize) {
        // Returns a random integer between o and prize.length
        console.log('Spinning the Wheel ....');
          let one =   Math.floor(Math.random() * prize.length);
            const value = prize[one];
            console.log("You have won " + value);


      };

console.log(winner(prizes));

const prizesWon = [];

const SpinPrize2 = function () {
        console.log("Spinning the wheel again.");


        //simple

        console.log("-prizes so far :" + prizesWon.toString());
}
//
// --------------
//
// ### Bonus 2:
//
// Add a delay between spinning the wheel and showing the results for suspense.
//
//
// --------------
//
// ### Bonus 3:
//
// Play the following sounds when the user spins the wheel, wins and loses:
// [Sounds](https://drive.google.com/drive/folders/1_bZd5VntKCXoPhDsOkkPWEd495w2IXNV?usp=sharing)
