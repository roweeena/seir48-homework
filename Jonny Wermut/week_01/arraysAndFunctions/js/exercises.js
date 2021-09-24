// # Array and Functions Bonus Material

// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

const maxOfTwo = (num1, num2) => {
 	return Math.max(num1,num2);
}

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = (n1, n2, n3) => {
	return Math.max(n1,n2,n3);
}
// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
const vowelOrNot = (letter) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.includes(letter)) {
		return true;
	}
	else {
		return false;
	}
}
// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

const multiplyArray = (array) => {
	let multiple = 1;
	for (let i = 0; i < array.length; i++) {
		multiple *= array[i];
	}
	return multiple;
}

// ## Bonus

// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
const reverseString = (string) => {
	let reverse = '';
	const max = string.length - 1;
	for (let i = max; i >= 0; i--) {
	 	letterToAdd = string[i];
	 	reverse += string[i];
		}
	return reverse;	
}

// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
const findLongestWord = (wordArray) => {
	longestWord = '';
	for (i = 0; i < wordArray.length; i++) {
		if (wordArray[i].length > longestWord.length) {
			longestWord = wordArray[i];
		}
	}
	return longestWord;
}
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
const findLongestWords = (wordArray2, i) => {
	let newArray = [];
	for (let a = 0; a < wordArray2.length; a++) {
		if (wordArray2[a].length > i) {
			newArray.push(wordArray2[a]);
		}
	}
	return newArray;
}


// // # Homework: The Word Guesser

// // You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// // - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

 const word = ['L','I','V','E','R','P','O','O','L'];
 const guesses = [];
 let allGuesses = [];

// // - Write a function called guessLetter that will:
// // - Take one argument, the guessed letter.
const foundNewLetter = (g) => {
	console.log(`Congratulations, you found a new letter ${g}.`); 
}

//Checks if 2 arrays have the same elements
const arraysMatch = (arr1, arr2) => {
	return arr1.every(elem => arr2.includes(elem));
}

const alreadyGuessed = (arr, guess) => {
	return arr.includes(guess);
}

const guessLetter = (guess) => {
	let reward = 0;
	if (alreadyGuessed(allGuesses, guess)) {
		console.log('You have already guessed that letter')
	}
	else {
		for (i = 0; i < word.length; i++) { //iterates through word array
			if (guess === word[i]) { //checks if guessed letter equals to the current letter in the word array
				guesses.push(guess); //push the guessed letter to the guesses array if there is a match
				allGuesses.push(guess);
				foundNewLetter(guess); //congratulates the user if a new letter has been found
				reward += 20; //increases reward by $20
			}
			else {
				reward -= 5;
				allGuesses.push(guess);
			}
		}
		console.log(`The correct letters you have found so far are ${guesses}`); // - When it's done iterating, it should log the current guessed letters ('F__')
		
		if (arraysMatch(word,guesses)) {
			console.log(`Congratulations you have won the game. The word is ${word}. Your final reward is $${reward}.`);
		}
		else {
			console.log(`You have ${word.length - guesses.length} letters left to find`);
		}
	}	
}

// - Iterate through the word letters and see if the guessed letter is in there.
// - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// - When it's done iterating, it should log the current guessed letters ('F__')
// and congratulate the user if they found a new letter.
// - It should also figure out if there are any more letters that need to be guessed,
// and if not, it should congratulate the user for winning the game.
// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// ## Bonus: Make it more like Wheel of Fortune:
// - Start with a reward amount of $0
// - Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// - When they guess the word, log their final reward amount.

// ## Bonus: Make it like Hangman:
// - Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// - Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// - Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.


