
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
////////////////////////////////// Arrays////////////////////////////////////
const lineL = ["8th", "6th", "Union Square", "3rd","1st"];
const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square","8th"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

const linesObj = {
  line6: ["8th", "6th", "Union Square", "3rd","1st"],
  lineN: ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
  lineL: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

};

//////////////////////////////////////////Choosing lines/////////////////////
const linesArr =["N" , "6" , "L"];

const choiceFromLine = prompt("Please choose the line where you start your journey?");

let indexSearchLineFrom = linesArr.indexOf(choiceFromLine); // choosing a start line // working

/////////////////////////indexes from stations //////////////////////////////////
const choiceFromStation = prompt("Where would you like to start you journey?");


//const indexLinefromArr = [ indexSearchStationFromL, indexSearchStationFrom6, indexSearchStationFromN]; ///stations






////////////////destinatino line //////////////////////////////

const choiceToLine = prompt("Please choose the line of your final stop");
let indexSearchLineTo = linesArr.indexOf(choiceToLine); // choosing a destination line// working

////////////////////////////// to stations //////////////////////////////////////
const choiceToStation = prompt("Which station would you like to go?");

//

//let indexLineToArr = [ indexSearchToL, indexSearchTo6, indexSearchToN]; // stations  to








function planTrip (choiceFromLine, choiceFrom, choiceToLine, choiceTo) {
///////////////////////////////////////////////////////////
function searchStations() {
//Checking LineIndex = StationIndex





if (indexSearchLineFrom === 0)
{ let indexSearchStationFromN = lineN.indexOf(choiceFromStation);
console.log(indexSearchLineFrom);

}
if (indexSearchLineTo === 0) {
  let indexSearchStationTo = lineN.indexOf(choiceToStation);
  console.log(indexSearchStationTo);

}
if (indexSearchLineFrom === 1)
{ let indexSearchStationFrom6 = line6.indexOf(choiceFromStation);

console.log(indexSearchLineFrom);

}
if (indexSearchLineTo === 1) {
  let indexSearchStationTo = line6.indexOf(choiceToStation);
  console.log(indexSearchStationTo);

}
if (indexSearchLineFrom === 2)
{ let indexSearchStationFromL = lineL.indexOf(choiceFromStation);
console.log(indexSearchLineFrom);

}
if (indexSearchLineTo === 2) {
  let indexSearchStationTo = lineL.indexOf(choiceToStation);
  console.log(indexSearchStationTo);

}


return indexSearchLineFrom,indexSearchLineTo, indexSearchStationTo; // lines = station


}

searchStations()
// If choice not found on L line go to Union Square
function needUs(indexSearchLineTo) {

  if(indexSearchLineTo.indexOf("-1")) {
    indexSearchToL = lineL.indexOf("Union Square");
    indexSearchTo6 = line6.indexOf("Union Square");
    indexSearchToN = lineN.indexOf("Union Square");
  console.log(indexLineToArr);
  }

  return indexSearchToL,indexSearchTo6,indexSearchToN;
  }
   indexSearchToL = needUs(indexLineToArr);



  let numberOfStopsL  = indexSearchToL - indexSearchFromL;
  let printedNumStopsL = Math.abs(numberOfStopsL) - 1;
  //let printedNumStops6 = Math.abs(numberOfStops6) - 1;
  if(printedNumStopsL=== 1) {
  console.log(printedNumStopsL + " stop in total.");
} if (printedNumStopsL >= 1) {
  console.log(printedNumStopsL + " stops in total.");

}
////////////////////////////////////////////////////////////// One line


/*
   if(numberOfStopsL < 0 || ) {
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
*/
////////////////////////////////////////////////////////////////


//for(let i = indexSearchFrom ; i < indexSearchTo; i++) {

  //console.log("Your journey continues through the following stops:" , i );

//




}


planTrip(choiceFromLine, choiceFromStation, choiceToLine, choiceToStation);













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
