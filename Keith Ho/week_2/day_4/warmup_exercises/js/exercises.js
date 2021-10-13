// Write a function that announces 'Spinning the prize wheel', then randomly chooses a string from the array similar to the one below, and prints it to console.
//
// const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ]
//
//
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
//
const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ];

let winPrizes = [];

const prizesWheel = function () {
  if (winPrizes.length) {
    console.log(`Your prizes are: ${winPrizes.toString()}`);
  } else {
    console.log("You don't have any prizes yet...start spin");
  }

  setTimeout(function() {
    console.log("start to spin now...");
  }, 500);

  setTimeout(function() {
    console.log("spinning...");
  }, 1000);

  setTimeout(prizesWon, 3000);

}

const prizesWon = function() {
  const winNum = Math.round( Math.random() * prizes.length );
  let prize = prizes[winNum];

  if ( prize === "❌ You lose") {
    winPrizes = [];
    console.log("You just lost everything...");
  } else {
    winPrizes.push(prize);
    console.log(`You just won ${prizes[winNum]}, so far you have ${winPrizes.length} prizes.`);
  }
};

console.log(prizesWheel());
