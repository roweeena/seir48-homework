
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
const lineL = ["8th", "6th", "Union Square", "3rd","1st"];
const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square","8th"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const linesObj = {
  line6: ["8th", "6th", "Union Square", "3rd","1st"],
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
  lineL: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

};

//////////////////////////////////////////Choosing lines/////////////////////
const linesArr =["N" , "6" , "L"]

const choiceFromLine = prompt("Please choose the line where you start your journey?");
const indexSearchLinefrom = linesArr.indexOf(choiceFromLine); // choosing a start line

const choiceToLine = prompt("Please choose the line of your final stop");
const indexSearchLineTo = linesArr.indexOf(choiceToLine); // choosing a destination line


//////////////////////////////////////
const choiceFrom = prompt("Where would you like to start you journey?");

const choiceTo = prompt("Which station would you like to go?");
const indexSearchFromL = lineL.indexOf(choiceFrom);
const indexSearchFrom6 = line6.indexOf(choiceFrom);
const indexSearchFromN = lineN.indexOf(choiceFrom);

let indexSearchToL = lineL.indexOf(choiceTo);
let indexSearchTo6 = line6.indexOf(choiceTo);
let indexSearchToN = lineN.indexOf(choiceTo);





function planTrip (choiceFrom, choiceTo) {
///////////////////////////////////////////////////////////
// If choice not found on L line go to Union Square
  function needUs(indexSearchToL) {
  if(indexSearchToL < 0) {
    indexSearchToL = lineL.indexOf("Union Square");
  }
  return indexSearchToL;
  }
  indexSearchToL = needUs(indexSearchToL);


  let numberOfStopsL  = indexSearchToL - indexSearchFromL;
  let printedNumStopsL = Math.abs(numberOfStopsL) - 1;
  //let printedNumStops6 = Math.abs(numberOfStops6) - 1;
  if(printedNumStopsL=== 1) {
  console.log(printedNumStopsL + " stop in total.");
} if (printedNumStopsL >= 1) {
  console.log(printedNumStopsL + " stops in total.");

}
////////////////////////////////////////////////////////////// One line



   if(numberOfStopsL < 0) {
  const reverseL = lineL.reverse()
  const indexSearchToL = reverseL.indexOf(choiceTo);
  const indexSearchFromL = reverseL.indexOf(choiceFrom);
  const printedStationsL = lineL.slice(indexSearchFromL,indexSearchToL); // slicing the needed stations
  printedStationsL.shift() // removes the start station
  const separatedStationsL = printedStationsL.join(); // turn array into separate strings
  console.log("You must travel through the following stops on the L line:  " + separatedStationsL + ".");
  return separatedStationsL;

}
  if(numberOfStopsL > 0) {

   const printedStationsL = lineL.slice(indexSearchFromL,indexSearchToL); // slicing the needed stations
   printedStationsL.shift() // removes the start station
   const separatedStationsL = printedStationsL.join(); // turn array into separate strings

   console.log("You must travel through the following stops on the L line: " + separatedStationsL + ".");
   return separatedStationsL;
}

////////////////////////////////////////////////////////////////


//for(let i = indexSearchFrom ; i < indexSearchTo; i++) {

  //console.log("Your journey continues through the following stops:" , i );

//




}


planTrip(choiceFrom, choiceTo);













   //2. Final destination line and station
   // 3. calculate the number of stations in between the stations











  //Tell the user the number of stops
  //1.
  //the stops IN ORDER that they will pass through or change at.








// *  AND
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use
// ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N
//   and on the 6 need to be differentiated)
