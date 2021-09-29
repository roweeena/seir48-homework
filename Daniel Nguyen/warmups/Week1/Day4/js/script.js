// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = function(string) {
  if (!string) {
    return 'Fine. Be that way!';
  } else if (string[string.length-1] === '?'){
    return 'Sure.';
  } else if (string === string.toUpperCase()) {
    return 'Woah, chill out!';
  } else {
    return 'Whatever.'
  }
}

console.log(simonSays(''));
console.log(simonSays('Hello?'));
console.log(simonSays('HELLO'));
console.log(simonSays('Hello'));
