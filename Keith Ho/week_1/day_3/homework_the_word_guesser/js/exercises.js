// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//

const lettersOfWorld = ["H", "E", "L", "L", "O"];
const guessedLetterArr = [];

const guessLetter = function(guessedLetter) {

  let reward = 0;
  let randomAmount = Math.round( ( Math.random() * 100 ) );
  let numOfGuessRight = 0;
  let numOfGuessWrong = 0;

  for (let i = 0; i<lettersOfWorld.length; i++) {
    if (guessedLetter ===lettersOfWorld[i]) {
      guessedLetterArr.push(guessedLetter);
      console.log("Your found new letter.");
      console.log(guessedLetterArr);
      let numOfRemainLetters = lettersOfWorld.length - guessedLetterArr.length;
      console.log(`You got ${numOfRemainLetters} letters to guess`);
      // numOfGuessRight = numOfGuessRight + 1;
      // reward = reward + randomAmount * numOfGuessRight;
      // console.log(`${numOfGuessRight} times in a row! Good job`);
      // console.log(`Your reward is: ${reward}.`);
      if ( numOfRemainLetters === 0 ) {
        console.log("You win!");
      }
    }
  }
}

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
