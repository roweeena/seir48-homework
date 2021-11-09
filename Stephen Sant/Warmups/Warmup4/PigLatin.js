// Create a function that will translate your input to Pig Latin!
const pigLatinifyWord = function(str)
{
    //Got this part off the internet
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return newStr;
}

const englishToPigLatin = function(str)
{
    //I made this part
    let newStr = '';
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) 
    {
        if(words[i] !== '!')
        {
            newStr += pigLatinifyWord(words[i]);
            newStr += " ";
        }
        else
        {
            newStr += words[i];
        }
    }
    return newStr;
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
    // Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
    // E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"