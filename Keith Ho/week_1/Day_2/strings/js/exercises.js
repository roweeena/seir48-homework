//#Part 3 Strings

//DrEvil

const DrEvil = function(num) {
  let amout;

  if(num < 1000000) {
    amount = `${ num } dollars`;
  } else {
    amount = `${ num } dollars (pinky)`;
  }

  console.log(amount);
}

DrEvil(100);
DrEvil(1000000);

//MixUp

const mixUp = function(word1, word2) {
  const lengthOfWord1 = word1.length;
  const lengthOfWord2 = word2.length;
  const word1WithoutFirstTwoLetters = word1.replace(word1[0] + word1[1], "");
  const word2WithoutFirstTwoLetters = word2.replace(word2[0] + word2[1], "")

  if( (lengthOfWord1 && lengthOfWord2) >= 2) {
    const mixedWord = word2[0] + word2[1] + word1WithoutFirstTwoLetters + " " + word1[0] + word1[1] + word2WithoutFirstTwoLetters;
    console.log(mixedWord);
  } else {
    console.log("Please enter at least two characters for each word!");
  }
}

mixUp("Hello", "World");

//FixStart

const fixStart = function(word) {
  const firstLetter = word[0];
  const wordWithoutFirstLetter = word.replace(word[0], "");

  const search = firstLetter;
  const replaceWith = "*";

  const newWord = wordWithoutFirstLetter.split(search).join(replaceWith);

  console.log(firstLetter + newWord);
}

fixStart("bobbb");
fixStart("xxxyyyzzzxxx");

//Verbing

const verbing = function(verb) {
  const length = verb.length;
  const lastThreeLetters = verb.slice(-3);

  let newVerb;

  if( length < 3 ) {
    newVerb = verb;
  } else if( length >= 3 && lastThreeLetters === "ing") {
    newVerb = verb + "ly";
  } else {
    newVerb = verb + "ing";
  }

  console.log(newVerb);
}

verbing("hi");
verbing("walk");
verbing("walking");

//Not Bad

const notBad = function(sentence) {
  let newSentence;
  const indexOfNot = sentence.indexOf("not");
  const indexOfBad = sentence.indexOf("bad");

  if( (indexOfNot && indexOfBad) >0 && (indexOfNot < indexOfBad) ) {
    newSentence = sentence.replace(/not.*?b\ad/gi, "good");
  } else {
    newSentence = sentence;
  }

  console.log(newSentence);
 }

notBad("He is so bad! not good");
notBad("He is NOT that bad!");
