// # Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, 
// or like Wheel of Fortune without the wheel and fortune).

// - Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), 
//   and one to hold the current guessed letters (e.g. it would start with '\_', '\_', '\_' and end with 'F', 'O', 'X').

const letters = ['F','O','X'];
const guessedLetters = ['_','_','_'];

// - Write a function called guessLetter that will:
// - Take one argument, the guessed letter.
const guessLetter = function (letterGuessed) 
{
    let gotALetter = false;
    // - Iterate through the word letters and see if the guessed letter is in there.
    for(i = 0; i < letters.length; i++)
    {
        // - If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
        if(letterGuessed === letters[i])
        {
            guessedLetters[i] = letters[i];
            gotALetter = true;
        }
    }
    // - When it's done iterating, it should log the current guessed letters ('F__')
    let temp = '';
    for(i = 0; i < guessedLetters.length; i++)
    {
        temp+=guessedLetters[i];
    }
    if(gotALetter)
    {
        //and congratulate the user if they found a new letter.
        console.log('You got a letter!');
    }
    else
    {
        console.log('Nope. Try again.');
    }
    console.log(temp);
    
    // - It should also figure out if there are any more letters that need to be guessed,
    //   and if not, it should congratulate the user for winning the game.
    let j = 0;
    for(i = 0; i < guessedLetters.length; i++)
    {
        if(guessedLetters[i] === letters[i])
        {
            j++;
            
        }
    }

    if(j === 3)
    {
        console.log('You Win!');
    }
}

// - Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
guessLetter('A');
guessLetter('E');
guessLetter('O');
guessLetter('G');
guessLetter('L');
guessLetter('F');
guessLetter('P');
guessLetter('R');
guessLetter('X');
