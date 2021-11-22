// Write a function that announces 'Spinning the prize wheel', then randomly chooses a string from the array similar to 
// the one below, and prints it to console.

// const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ]


// Bonus 1:

// Modify the function to remember the prizes the user has won so far, and log them in the console on each spin. If the user spins the wheel and lands on "❌ You lose", laugh at them in the console and remove all prizes they have won so far.


// Bonus 2:

// Add a delay between spinning the wheel and showing the results for suspense.


// Bonus 3:

// Play the following sounds when the user spins the wheel, wins and loses: Sounds (see gist for link)

const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ];

var audio = new Audio('audio/spin.wav');
audio.play();

const getRandomInt = () => {
  return Math.floor(Math.random() * 4);
}

let alreadyWon = [];

const wheel_of_fortune = () => {
  setTimeout(() => {console.log('Spin that wheel')}, 1000);
  setTimeout(() => {console.log('Spinning')}, 2000);
  // console.log('Spinning!');
  let item = prizes[getRandomInt()];

  alreadyWon.push(item);
  setTimeout(() => {console.log(item)}, 5000);
}

wheel_of_fortune();