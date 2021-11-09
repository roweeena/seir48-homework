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

const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ];
let winnings = [];
let prize;

const spinSound = new Audio('sounds/spin.wav');
const winSound = new Audio('sounds/win.wav');
const loseSound = new Audio('sounds/lose.wav');

const displayPrizes = function() {

  if (prize === "❌ You lose") {
    loseSound.play();
    console.log(`HAHAHA no prizes for you: ${prize}`)
    winnings = [];
  } else {
    winSound.play();
    console.log('You have won the following prizes:');
    winnings.forEach(p => console.log(p));
  }
}

const spinWheel = function () {
  spinSound.play();
  console.clear();
  console.log('Spinning the prize wheel');
  prize = prizes[Math.floor(prizes.length * Math.random())];
  setTimeout(displayPrizes, 2000);
  winnings.push(prize);

}


document.getElementById("spin").addEventListener("click", spinWheel);
