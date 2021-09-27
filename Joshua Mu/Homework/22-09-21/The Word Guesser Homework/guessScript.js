const toBeGuessed = "hello world";
const lettersInWord = ["h", "e", "l", "o", "w", "r", "d"];
let hiddenWord = "_____ _____";
let guessedLetters = [];
let reward = 0;
let lives = 6;

function GuessWord(_guessedLetter) {

    let length = 0;
    if (lives === 0)
    {
        return ("Game Over");
    }

    for (let o = 0; o < lettersInWord.length; o++)
    {
        if (_guessedLetter === lettersInWord[o])
        {
            break;
        }
        else if (length === lettersInWord.length - 1)
        {
            lives--;
            return(`You've lost a life. You have ${lives} remaining`);
        }
        else{
            length++;
        }
    }

    if (guessedLetters.length === 0) {
        for (let i = 0; i < toBeGuessed.length; i++) {
            if (_guessedLetter === toBeGuessed[i]) {
                reward = reward + Math.floor(Math.random() * 100);
                let newWord = hiddenWord;
                newWord = hiddenWord.substring(i, i + 1);
                newWord = newWord.replace(newWord, _guessedLetter);
                hiddenWord = hiddenWord.substring(0, i) + newWord + hiddenWord.substring(i + 1, hiddenWord.length);
                console.log("Congratulations, you found a letter");
                console.log(`Your reward is now $${reward}`)
            }
        }

        guessedLetters.push(_guessedLetter);
        console.log(guessedLetters);
        return hiddenWord;
    }
    else if (hiddenWord == toBeGuessed)
    {
        return `Congratulations, you have figured out the word ${toBeGuessed}. Your final prize is $${reward}.`
    }
    else {
        for (let i = 0; i < guessedLetters.length; i++) {
            if (guessedLetters[i] === _guessedLetter) {
                console.log("You've used this letter before");
                break;
            }
            else {
                for (let j = 0; j < toBeGuessed.length; j++) {
                    if (_guessedLetter === toBeGuessed[j]) {
                        reward = reward + Math.floor(Math.random() * 100);
                        let newWord = hiddenWord;
                        newWord = hiddenWord.substring(j, j + 1);
                        newWord = newWord.replace(newWord, _guessedLetter);
                        hiddenWord = hiddenWord.substring(0, j) + newWord + hiddenWord.substring(j + 1, hiddenWord.length);
                        console.log("Congratulations, you found a letter");
                        console.log(`Your reward is now $${reward}`)
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
console.log(GuessWord("p"));
console.log(GuessWord("p"));
console.log(GuessWord("p"));
console.log(GuessWord("p"));
console.log(GuessWord("p"));
console.log(GuessWord("p"));
console.log(GuessWord("w"));
console.log(GuessWord("g"));
console.log(GuessWord("r"));
console.log(GuessWord("d"));
console.log(GuessWord("h"));
console.log(GuessWord("h"));



