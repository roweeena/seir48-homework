// // # Array and Functions Bonus Material
// //
// // 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// // 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.
// // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// // 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.
// //
// // ## Bonus
// //
// // 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// // 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// // 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
//
// # Homework: The Word Guesser
//
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').
// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
//
// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.
//
// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

//Structure of game
//  word to be guessed
// check validity of letters inputted
// track letters guessed by player
//finish when player has guessed the word


const hangManLetters = ["F", "O", "X"];
 for (let i = 0; i < hangManLetters.length; i++){
   hangManLetters [i] = "_";
 }
 console.log(hangManLetters.length);

const hangManGuessLetters = ["_","_","_","F", "O", "X"];
  for (let i = 0; i < hangManGuessLetters.length; i++){
    hangManGuessLetters [i] = "_";
}
console.log(hangManGuessLetters.length);

//Function + Loop
const guessLetter = function (hangManGuessLetters){
 if (hangManGuessLetters <= 0){
   console.log()
 }

 

 }
