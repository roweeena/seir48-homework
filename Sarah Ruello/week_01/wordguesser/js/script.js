// # Homework: The Word Guesser

const secretWord = ["M", "U", "F", "F", "I", "N"];
const correctLetters = ["_", "_", "_", "_", "_", "_"];

function guessLetter(letter) {
    let found = false;
    for (i = 0; i < secretWord.length; i++) {
        if (letter.toUpperCase() === secretWord[i]) {
            correctLetters[i] = letter.toUpperCase();
            found = true;
        }
    }

    if (found) {
        console.log(`You found a letter! ${letter.toUpperCase()}`);
    } else {
        console.log(`WRONG WRONG WRONG ${letter.toUpperCase()}`);
    }
    console.log(correctLetters);

    if (secretWord.toString() === correctLetters.toString()) {
        console.log("YOU ARE A WINNER!!!");
    }
}

guessLetter("a");
guessLetter("f");
guessLetter("i");
guessLetter("n");
guessLetter("z");
guessLetter("m");
guessLetter("u");

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.