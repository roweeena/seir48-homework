// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  Check there is a question mark at the end of the string.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  Check the string is in all caps.
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = (message) => {
    //if a question answer sure - can use endswith
    if (message[message.length-1] === "?") {
        return 'Sure.';
        //else if no answer
    } else if (message === '') { 
        return "Fine. Be that way!"
        //else if chill out
    } else if  (message == message.toUpperCase()){
        return "Whoah, chill out!";
        //else whatever
    } else {
        return "Whatever."
    }
} 

console.log(simonSays('What are your doing?'));
console.log(simonSays('What are your doing'));        
console.log(simonSays('WHAT ARE YOU DOING'));
console.log(simonSays(''));