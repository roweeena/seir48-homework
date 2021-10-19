console.log("working");

const simonSays = function(answer) {
  if ( answer[ answer.length - 1 ] === "?") {
    return "Sure.";
  } else if ( answer === "") {
    return "Fine. Be that way!";
  } else if ( answer === answer.toUpperCase() ) {
    return "Woah, chill out!";
  } else {
    return "Whatever";
  }
}

// const simonResponse = function() {
//   let firstAnswer = prompt("You can ask me any questions!");
//
//    if ( firstAnswer.endsWith("?")) {
//     alert("Sure.");
//    } else if ( firstAnswer === "" ) {
//      alert("Fine. Be that way!");
//    } else if ( firstAnswer === firstAnswer.toUpperCase() ) {
//     alert("Woah, chill out!");
//   }  else {
//     alert("Whatever.");
//   }
// }

// console.log( simonResponse() );
