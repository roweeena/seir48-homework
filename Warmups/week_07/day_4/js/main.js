// Create a function that takes in a sentence and outputs the letter that's repeated most frequently.
//
// ```js
// recurringLetter('just a simple sentence chilling');
// // => The recurring letter of "just a simple sentence chilling" is e
// ```
//
// Use simple sentences with regular spaces between each word (like in the sentence you are reading) but if you want you can account for other characters such as !@#$%^&*? etc..
//
// *Hint:* You'll need to loop and count each of the letters.
//
// **Bonus:** Create another function that capitalises a letter within the sentence.
// ```js
// capitaliseLetter('just a simple sentence chilling', 'e');
// // => just a simplE sEntEncE chilling

console.log('aaa bbbb ccccc');

const recurringLetter = function (string) {
  let letterNums = _(string).countBy();

  letterNums = _(letterNums).omit(' ');
  console.log(letterNums);

  const maxScore = _(letterNums).max()
  console.log(maxScore);

  let maxLetter = '';

  _(letterNums).map((value, letter) => {
    console.log(value, letter);
    if (value === maxScore) {
      maxLetter = letter;
      console.log(maxLetter);
    }
  })
  return `The recurring letter of ${string} is the letter ${maxLetter}, for ${maxScore} times`
}

console.log(recurringLetter('just a simple sentence chilling'));


const capitaliseLetter = function (string, letter) {
  let result = _(string).map( c => {
    console.log(c);
    if (c === letter){
      return c.toUpperCase();
    } else {
      return c
    }
  })
  return result.join('');
}

console.log(capitaliseLetter('just a simple sentence chilling', 'e'));
