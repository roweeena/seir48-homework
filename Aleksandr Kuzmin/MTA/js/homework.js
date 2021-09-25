
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


const choiceFrom = prompt("Where would you like to start you journey?");
const indexSearchFromL = lineL.indexOf(choiceFrom);

const choiceTo = prompt("Where would you like to go?");
const indexSearchToL = lineL.indexOf(choiceTo);

function planTrip (choiceFrom, choiceTo) {

   let numberOfStops  = Math.abs(indexSearchToL - indexSearchFromL);
   console.log(numberOfStops + " stops in total.");
   if(numberOfStops < 0) {
  const reverseL = lineL.reverse()
  console.log(reverseL);
  const printedStations = lineL.slice(indexSearchFromL,indexSearchToL);
  }
   const printedStations = lineL.slice(indexSearchFromL,indexSearchToL);
   const separatedStations = printedStations.join();


   console.log("Your journey continues through the following stops:" + separatedStations + ".");

   const reverseL = lineL.reverse()
   console.log(reverseL);

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
