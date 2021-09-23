const toBeGuessed = "hello world";
let hiddenWord = "_____ _____";
let guessedLetters = [];

function GuessWord(_guessedLetter) {
    if (guessedLetters.length === 0) {
        for (let i = 0; i < toBeGuessed.length; i++) {
            if (_guessedLetter === toBeGuessed[i]) {
                let newWord = hiddenWord;
                        newWord = hiddenWord.substring(i, i+1);
                        newWord = newWord.replace(newWord, _guessedLetter);
                        hiddenWord = hiddenWord.substring(0, i) + newWord + hiddenWord.substring(i + 1, hiddenWord.length);
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
                        let newWord = hiddenWord;
                        newWord = hiddenWord.substring(j, j+1);
                        newWord = newWord.replace(newWord, _guessedLetter);
                        hiddenWord = hiddenWord.substring(0, j) + newWord + hiddenWord.substring(j + 1, hiddenWord.length);
                        console.log("Congratulations, you found a letter");
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


