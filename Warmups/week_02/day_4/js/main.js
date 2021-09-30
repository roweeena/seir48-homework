
console.log('spinTheWheel();');
const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ]


//-----------------------------------------
// basic excercise
const spinTheWheelBasic = function(){
  console.log('Spinning the wheel...')

  const randomNum = Math.floor(Math.random() * prizes.length);
  const prize = prizes[randomNum];

  console.log("You won: " + prize);
}


//-----------------------------------------
// bonus 1 and 2
let prizesWon = []

// get the audio file spin.wav and store it in the const 'spinSound'
const spinSound = new Audio('audio/spin.wav');

// get the audio file spin.wav and store it in the const 'loseSound'
const loseSound = new Audio('audio/lose.wav');

// get the audio file spin.wav and store it in the const 'winSound'
const winSound = new Audio('audio/win.wav');



const spinTheWheel = function(){
  spinSound.play();
  console.log('Spinning the wheel...')

  // simple
  // console.log( "- prizes so far: " + prizesWon.toString() )

  // ternary
  console.log(
    prizesWon.length ?
      "- So far you've won: " + prizesWon.toString()
      : "- no prizes yet..."
  )

  // after 500ms console.log("....")
  setTimeout(function(){
    console.log("....");
  }, 500);

  // after 1000ms console.log(".....")
  setTimeout(function(){
    console.log(".....");
  }, 1000);

  // after 1500ms console.log("It's landing on...")
  setTimeout(function(){
    console.log("It's landing on...");
  }, 1500);

  // after 3000ms run getPrize
  setTimeout(getPrize, 3000);

}


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
