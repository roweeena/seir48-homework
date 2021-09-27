function translatePigLatin(sentence) {
    let wordAmount = 0;
    let words = [];
    let wordsTranslated = 0;
    let translation = "";
    let translatedFirstWord = false;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            words.push(i);
        }
    }

    wordAmount = words.length;

    for (let j = 0; j < wordAmount + 1; j++) {
        let word = "";
        let initialLetter = "";
        let newWord = "";

        if (translatedFirstWord === false) {
            word = sentence.substring(0, words[0]);
            initialLetter = word.substring(0, 1);
            newWord = word;
            newWord = newWord.replace(initialLetter, "");
            newWord = newWord + initialLetter + "ay";
            translation = translation + newWord;
            translatedFirstWord = true;
        }
        else {
            word = sentence.substring(words[wordsTranslated] + 1, words[wordsTranslated + 1]);

            if (word.includes("!") || word.includes("?"))
            {
                translation = translation + word;
                continue;
            }

            initialLetter = word.substring(0, 1);
            newWord = word;
            newWord = newWord.replace(initialLetter, "");
            newWord = newWord + initialLetter + "ay";
            translation = translation + ` ${newWord}`;
            wordsTranslated++;
        }
    }

    return translation
}

console.log(translatePigLatin("Pig Latin is cool !"));