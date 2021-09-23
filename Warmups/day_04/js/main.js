// console.log("Hello");
// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = function(message){
  //if question simon answer Sure
  if(message.endsWith("?")){
  // if (message[message.length-1] === "?"){
    return 'Sure';
    // He says 'Fine. Be that way!' if you address him without actually saying anything.
  } else if (message === '') {
    return "Fine, be that way!";
    // He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
  } else if (message === message.toUpperCase()){
    return "Woah chill out";
    // He answers 'Whatever.' to anything else.
  } else {
    return "Whatever";
  }
}

console.log(simonSays("Hello, how are you?"));
console.log(simonSays("Hello, how are you!"));
console.log(simonSays(""));
console.log(simonSays("45"));
console.log(simonSays("HEYYYYY"));
