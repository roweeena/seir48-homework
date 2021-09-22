// Strings Homework:

function drEvil(num) {
  if (num == 1000000) {
    console.log(`${num} dollars (pinky)`);
  } else {
    console.log(`${num} dollars`);
  }
}

drEvil(999999);
drEvil(1000000);
drEvil(53454535);

function mixUp(str1, str2) {
  let slice1 = str1.slice(0, 2);
  let slice2 = str1.slice(2);
  let slice3 = str2.slice(0, 2);
  let slice4 = str2.slice(2);
  let mixed = slice3 + slice2 + " " + slice1 + slice4;
  return mixed;
}

console.log(mixUp("run", "rabbit")); // ran rubbit
console.log(mixUp("help", "me")); // melp he
console.log(mixUp("Sarah", "Ruello")); // Rurah Saello

function fixStart(string) {
  const firstLetter = string.charAt(0);
  let newString = string[0] + string.slice(1).replaceAll(firstLetter, "*");
  console.log(newString);
}

fixStart("babble");
fixStart("cyclical");

function verbing(string) {
  if (string.length < 3) {
    return string;
  } else if (string.slice(-3) === "ing") {
    return string + "ly";
  } else {
    return string + "ing";
  }
}

console.log(verbing("jump"));
console.log(verbing("baking"));
console.log(verbing("no"));
console.log(verbing("not"));

function notBad(string) {
  // nope
}
