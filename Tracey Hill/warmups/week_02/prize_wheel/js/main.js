console.log('Connected!')

// # Prize wheel

// Write a function that announces 'Spinning the prize wheel', then randomly chooses a string from 
// the array similar to the one below, and prints it to console. 

const prizes = [
  "🚗 New car",
  "🌴 Holiday",
  "🥁 Drum machine",
  "❌ You lose"
]

const spinPrizeWheel1 = function() {
    // spin wheel
    console.log('Spinning the wheel...');
    // get random number
    const randomNumber = Math.floor(Math.random() = prizez.length);
    // return a prize from prizes based on the random number returned
    console.log("the random number is " + randomNumber);
    const prize = prizes[randomNumber]
    // console log prize
    console.log("You've won: " + prize);
}

// --------------

// ### Bonus 1:

// Modify the function to remember the prizes the user has won so far, and log them in the console on each spin. 
// If the user spins the wheel and lands on "❌ You lose", laugh at them in the console and remove all prizes 
// they have won so far. 

let prizesWon = [];

const spinPrizeWheel2 = function () {
    console.log('Spinning the wheel...');
    
    // simple
    // console.log("- prizes so far: " + prizesWon.toString()
    
    console.log(
        prizesWon.length ?
        "- so far you've won: " + prizesWon.toString() : "- no prizes yet..." 
    )
}

// --------------

// ### Bonus 2:

// Add a delay between spinning the wheel and showing the results for suspense. 
// after 200ms console.log("....")
//let prizesWon = []

// get the audio file spin.wav and store it in the const 'spinSound'
const spinSound = new Audio('audio/spin.wav');

// get the audio file spin.wav and store it in the const 'loseSound'
const loseSound = new Audio('audio/lose.wav');

// get the audio file spin.wav and store it in the const 'winSound'
const winSound = new Audio('audio/win.wav');
  
  const getPrize = function(){
    const randomNum = Math.floor(Math.random() * prizes.length);
    let prize = prizes[randomNum];
  
    // console.log the prize
    console.log(prize);
  
    if (prize === "❌ You lose"){
      // reset prizesWon
      prizesWon = [];
      loseSound.play();
      console.log("You lost everything, you have 0 prizes")
  
    } else { //player must have won
      // add the new prize to the array prizesWon
      winSound.play();
      prizesWon.push(prize)
      console.log("You now have " + prizesWon.length + " prize(s)")
    }
  }

  setTimeout(function(){
    console.log("....");
  }, 200);

  // after 350ms console.log(".....")
  setTimeout(function(){
    console.log(".....");
  }, 350);

  // after 750ms console.log("It's landing on...")
  setTimeout(function(){
    console.log("Nearly there...");
  }, 750);

  // after 1200ms run getPrize
  setTimeout(getPrize, 1200);

// --------------

// ### Bonus 3:

// Play the following sounds when the user spins the wheel, wins and loses:
// [Sounds](https://drive.google.com/drive/folders/1_bZd5VntKCXoPhDsOkkPWEd495w2IXNV?usp=sharing) 