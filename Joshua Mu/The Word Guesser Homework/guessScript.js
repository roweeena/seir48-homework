const toBeGuessed = "Hello World";
let hiddenWord = "aaaaa aaaaa";
let guessedLetters = [];

function GuessWord(_guessedLetter) {
    if (guessedLetters.length === 0) {
        for (let i = 0; i < toBeGuessed.length; i++) {
            if (_guessedLetter === toBeGuessed[i]) {
                hiddenWord[i] = hiddenWord[i].replace(/a/g, _guessedLetter);
            }
        }

        guessedLetters.push(_guessedLetter);
        console.log(guessedLetters);
        return hiddenWord;
    }
    else {
        for (let i = 0; i < guessedLetters.length; i++) 
        {
            if (guessedLetters[i] === _guessedLetter)
            {
                console.log("You've used this letter before");
                break;
            }
            else
            {
                for (let j = 0; j < toBeGuessed.length; j++) {
                    if (_guessedLetter === toBeGuessed[j]) {
                        hiddenWord = hiddenWord.replace(/a/g, _guessedLetter);
                        console.log("Congratulations");
                    }
                }
                guessedLetters.push(_guessedLetter);
                console.log(guessedLetters);
                return hiddenWord;
            }
        }
    }
}

console.log(GuessWord("e"));
console.log(GuessWord("l"));
console.log(GuessWord("o"));


