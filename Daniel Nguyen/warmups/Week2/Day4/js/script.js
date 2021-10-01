// Write a function that announces 'Spinning the prize wheel', then randomly chooses a string from the array similar to the one below, and prints it to console.
//

const button = document.getElementById('button');

const prizes = [
  "🚗 New car",
  "🌴 Holiday",
  "🥁 Drum machine",
  "❌ You lose"
];

let userPrizes = [];

const selectPrize = function () {
  const prize = prizes[Math.floor(Math.random() * prizes.length)];
  userPrizes.push(prize);
  return prize;
}

const spinTheWheel = function () {
  console.log("Spinning the prize wheel...");

  const prize = prizes[Math.floor(Math.random() * 4)];

  if (prize === "❌ You lose") {
    userPrizes = [];
    console.log("❌ You lose. HAHAHAHA!!");
  } else {
    userPrizes.push(prize);
    console.log( `You have won these prizes: ${userPrizes.join(', ')}` );
  }
}

spinTheWheel();
spinTheWheel();
spinTheWheel();
spinTheWheel();

// Bonus 1:
//
// Modify the function to remember the prizes the user has won so far, and log them in the console on each spin. If the user spins the wheel and lands on "❌ You lose", laugh at them in the console and remove all prizes they have won so far.
//
//
// Bonus 2:
//
// Add a delay between spinning the wheel and showing the results for suspense.
//
//
// Bonus 3:
//
// Play the following sounds when the user spins the wheel, wins and loses: Sounds (see gist for link)
