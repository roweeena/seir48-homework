
// Warmup - Simon Says
// Create a function that takes an input and returns Simon's response as follows:
//  Simon answers 'Sure.' if you ask him a question.
//  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//  He says 'Fine. Be that way!' if you address him without actually saying anything.
//  He answers 'Whatever.' to anything else.

const simonSays = function (str) {
  if( str[str.length-1] == "?"){
    console.log(`${str} -- Sure ask me`);
  }  else if ( str === ``){
        console.log(`${str} -- Fine be that way`);
  } else if ( str === str.toUpperCase()){
    console.log(`${str} -- Woah, Chill out `);
  }else{
    console.log(`${str} -- What ever`);
  }
}
simonSays(`What day is today?`);
simonSays(`WHAT ARE YOU DOING HERE`);
simonSays("");
simonSays("asdsdads");
