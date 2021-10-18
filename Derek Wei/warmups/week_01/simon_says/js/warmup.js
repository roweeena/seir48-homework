// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = (str) => {
    if (str[str.length - 1] === '?') {
      return 'Sure.';
    } else if (str === "") {
      return 'Fine. Be that way!';
    } else if (str === str.toUpperCase()) {
      return 'Woah, chill out!';
    } else {
      return 'Whatever.';
    }
}
