// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const response = function (input) {
   var ch = input.slice(-1);
   // if(input[input.lenght-1] === "?")
   if(ch ===  "?"){
     return `Sure`;
   } else if (input === "") {
     return `Fine. Be that way!`;
   }else if (input === input.toUpperCase() ) {
      return  `Woah, chill out!`;
   } else {
     return `Whatever`;
   }
};

console.log(response('How are you?'));
 console.log(response('HOW ARE YOU'));
// console.log(response('How are you'));
console.log(response('asd'));
