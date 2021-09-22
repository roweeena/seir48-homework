// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const wordBank = ["enfix", "memorial", "particular", "systematic", "cooperate", "incongruous", "material", "transversality", "operational", "fastidious", "competition", "interference", "hypnothize", "autonomy", "celebration", "ideology", "criticism", "coalition", "mathematics", "simplicity", "identity", "disability", "exaggerate", "possibility", "preparation"];

// Returns a random word from the wordBank
const generateMagicWord = function() {
  const index = Math.floor(Math.random() * wordBank.length);
  return wordBank[index].toUpperCase();
}

// The word to be solved
const magicWord = generateMagicWord().split('');

// The player's currently guessed letters
let current = [];
for (let i = 0; i < magicWord.length; i++) {
  current.push('\_ ');
}


// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

const guessLetter = function(letter) {
  let matchFound = false;
  const guess = letter.toUpperCase();

  for (let i = 0; i < magicWord.length; i++) {
    if (magicWord[i] === guess) {
      current[i] = guess;
      matchFound = true;
    }
  }

  console.log(guess, matchFound, displayWord(current));
  console.log(displayMessage(matchFound, guess));
  return matchFound;
}

const displayWord = function(word) {
  return word.join('');
}

const displayMessage = function(matchFound, guess) {
  if (current === magicWord)
    return "Woohoo! You solved it.";
  else if (matchFound)
    return `Yay! ${guess} is in the magic word!`;
  else
    return `Sorry. ${guess} is not in the magic word.`;
}

console.log(displayWord(magicWord));
guessLetter('a');

const guessRandomLetters = function() {
  let randomNum = Math.floor((Math.random() * 26)) + 65;
  // ...
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