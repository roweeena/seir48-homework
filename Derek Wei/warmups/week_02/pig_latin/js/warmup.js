// Create a function that will translate your input to Pig Latin!
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// Leave punctuation marks untouched (it's fine to keep the space between punctuation marks and the word). Not case sensitive.
// E.g. if your input = "Pig Latin is cool !", your output should look like => "igPay atinLay siay oolcay !"


const pigLatin = (string) => {

    const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/[a-z]/i)) {
      const prefix = words[i].slice(1);
      const suffix = words[i].slice(0, 1);
      words[i] = prefix + suffix + 'ay';
    }
  }
  return words;
}
