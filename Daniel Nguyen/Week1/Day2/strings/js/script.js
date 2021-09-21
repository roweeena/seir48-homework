// Week 1, Day 2
// Strings

// DrEvil

const drEvil = function(amount) {
  let string = `DrEvil(${amount}): ${amount} dollars`;
  // '==' rather than '===' to allow for string arguments
  if (amount == 1000000) {
    string += ' (pinky)';
  }
  console.log(string);
  return string;
}

console.log("Dr Evil tests:");
drEvil(999999);
drEvil(1000000);
drEvil("1000000");
drEvil(1000001);


// MixUp

const mixUp = function(stringOne, stringTwo) {
  const firstWord = stringTwo.slice(0,2) + stringOne.slice(2);
  const secondWord = stringOne.slice(0,2) + stringTwo.slice(2);
  const originalWords = stringOne + ' ' + stringTwo;
  const spoonerism = firstWord + ' ' + secondWord;
  console.log(`${originalWords} becomes ${spoonerism}`);
  return spoonerism;
}

mixUp("mix", "pod");
mixUp("dog", "dinner");
mixUp("Java", "Script");


// FixStart

function fixStart(string) {
  
}
