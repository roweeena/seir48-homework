// Week 1, Day 2
// Strings

// DrEvil

const drEvil = function(amount) {
  let string = `${amount} dollars`;
  // '==' rather than '===' to allow for string arguments
  if (amount == 1000000) {
    string += ' (pinky)';
  }
  console.log(string);
  return string;
}

drEvil(999999);
drEvil(1000000);
drEvil("1000000");
drEvil(1000001);


// MixUp

const mixUp = function(stringOne, stringTwo) {
  const firstWord = stringTwo.slice(0,2) + stringOne.slice(2);
  const secondWord = stringOne.slice(0,2) + stringTwo.slice(2);
  const spoonerism = firstWord + ' ' + secondWord;
  console.log(spoonerism);
  return spoonerism;
}

mixUp("mix", "pod");
mixUp("dog", "dinner");
mixUp("Java", "Script");


// FixStart

function fixStart(string) {
  let output = string[0];
  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[0]) {
      output += '*';
    } else {
      output += string[i];
    }
  }
  console.log(output);
  return output;
}

fixStart("babble");
fixStart("fluffer");


// Verbing

function verbing(string) {
  let output = string;
  const lastThreeChars = string.substring(string.length - 3);
  // A "gerund" is the term for verb ending with "ing"
  const gerund = lastThreeChars === "ing";

  if (string.length > 3)
    output += gerund ? "ly" : "ing";

  console.log(output);
  return output;
}

verbing('swim');
verbing('swimming');
verbing('go');


// Not Bad

function notBad(string) {
  const indexOfNOT = string.toLowerCase().search("not");
  const indexOfBAD = string.toLowerCase().search("bad");

  let output = '';
  if (indexOfNOT > -1 && indexOfNOT < indexOfBAD) {
    output += string.substring(0, indexOfNOT);
    output += "good"
    output += string.substring(indexOfBAD + 3);
  } else {
    output = string;
  }

  console.log(output);
  return output;
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
notBad('This dinner is not that bad that not bad!');
notBad('This dinner is not so bad blah blah blah!');
