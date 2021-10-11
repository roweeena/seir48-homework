const prizes = [ "🚗 New car", "🌴 Holiday", "🥁 Drum machine", "❌ You lose" ];
let prizesWon = [];

const spinTheWheel = function () {
  console.log(`Spinning the prize wheel...`);
  $('#spin-audio')[0].play();

  // Selects a random prize
  const prize = prizes[Math.floor(Math.random() * prizes.length)];

  // Updates the prizesWon array
  if (prize === "❌ You lose") prizesWon = [];
  else prizesWon.push(prize);

  // After a two-second delay, logs a message and plays audio
  setTimeout(logPrizes, 2000);
};

const logPrizes = function () {
  if (prizesWon.length > 0) {
    $('#win-audio')[0].play();
    console.log(`Prizes won:\n${prizesWon.join('\n')}`);
  } else {
    $('#lose-audio')[0].play();
    console.log('HAHAHA!! ❌ You lose!');
  }
};

// Assigns button-click listener
$(document).ready(function () {
  $('button').on('click', spinTheWheel);
});
