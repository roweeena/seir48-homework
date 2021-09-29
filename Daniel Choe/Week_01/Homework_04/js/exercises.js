// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number
// of stops for the trip in the console:
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
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
//   (For example, this means the 28th stop on the N line is different than the 28th street stop on
//     the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working.
// You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)

// console.log(typeof Object.keys(stations)[0]);
//console.log(Object.keys(stations));
// console.log(stations.L.indexOf('8th'));
// console.log(Object.keys(stations)[0]);
// console.log(stations[6].indexOf('Union Square'));
// console.log(stations[6].length);
// console.log(stations[lineStart][0])
// console.log(a);
// console.log(stations.a)
// console.log(b);
//console.log(typeof a);
//console.log(stations[a].indexOf(b));
//console.log(stations[6].indexOf('33rd'));

const stations = {
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  N: ['Terminal Station', '34th', '28th', '23rd', 'Union Square', '8th'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

const currLine = prompt("Please enter the line you are are at:");
const currSta  = prompt("Please enter the station you are at:");
const destLine = prompt("Please enter the line you wish to travel to:");
const destSta = prompt("Please enter the station you wish to travel to:");

const planTrip = function (lineStart, staStart, lineEnd, staEnd) {

  a = lineStart;
  b = staStart;
  c = lineEnd;
  d = staEnd;


  //Travelling a different line:

  //If travelling different line forwards on both lines.
  if ( a !== c && stations[a].indexOf(b) < stations[a].indexOf('Union Square') && stations[c].indexOf(d) > stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) + 1; i <= stations[a].indexOf('Union Square'); i++){
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line: ${ stationList }.`);
      console.log(`Change at Union Square.`);
    let stationList2 = [];
    for (let i = stations[c].indexOf('Union Square') + 1; i < stations[c].length; i++){
      stationList2.push('' + stations[c][i]);
    } console.log(`Your journey continues through the following stops on the ${ c } line: ${ stationList2 }.`);
      console.log(`${ stationList.length + stationList2.length } stops in total.`);
  }

  //If travelling different line forwards on the first then backwards on the other.
  else if ( a !== c && stations[a].indexOf(b) < stations[a].indexOf('Union Square') && stations[c].indexOf(d) < stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) + 1; i <= stations[a].indexOf('Union Square'); i++){
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line: ${ stationList }.`);
      console.log(`Change at Union Square.`);
    let stationList2 = [];
    for (let i = stations[c].indexOf('Union Square') - 1; i >= stations[c].indexOf(d); i--) {
      stationList2.push(' ' + stations[c][i]);
    } console.log(`You must travel through the following stops on the ${ c } line: ${ stationList2 }.`);
      console.log(`${ stationList.length + stationList2.length } stops in total.`);
  }

  //If travelling different line backwards on one then forwards on the other.
  else if (a !== c && stations[a].indexOf(b) > stations[a].indexOf('Union Square') && stations[c].indexOf(d) > stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) - 1; i >= stations[a].indexOf('Union Square'); i--) {
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line:${ stationList }.`);
      console.log(`Change at Union Square.`);
    let stationList2 = [];
    for (let i = stations[c].indexOf('Union Square') + 1; i < stations[c].length; i++){
      stationList2.push(' ' + stations[c][i]);
    } console.log(`Your journey continues through the following stops on the ${ c } line:${ stationList2 }.`);
      console.log(`${ stationList.length + stationList2.length } stops in total.`);
  }

  //If travelling different line backwards on one and backwards on the other.
  else if (a !== c && stations[a].indexOf(b) > stations[a].indexOf('Union Square') && stations[c].indexOf(d) < stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) - 1; i >= stations[a].indexOf('Union Square'); i--) {
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line:${ stationList }.`);
      console.log(`Change at Union Square.`);
    let stationList2 = [];
    for (let i = stations[c].indexOf('Union Square') - 1; i >= stations[c].indexOf(d); i--) {
      stationList2.push(' ' + stations[c][i]);
    } console.log(`You must travel through the following stops on the ${ c } line: ${ stationList2 }.`);
      console.log(`${ stationList.length + stationList2.length } stops in total.`);
  }


  //Starting or Ending at union square:

  //Starting at union square and going forwards.
  else if ( stations[a].indexOf(b) === stations[a].indexOf('Union Square') && stations[c].indexOf(d) > stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[c].indexOf('Union Square') + 1; i <= stations[c].indexOf(d); i++) {
      stationList.push(' ' + stations[c][i]);
    } console.log(`At Union Square ensure you are on line ${ c }.`);
      console.log(`You must travel through the following stops on the ${ c } line:${ stationList }.`);
      console.log(`${ stationList.length } stops in total.`);
  }

  //Starting at union square and going backwards.
  else if ( stations[a].indexOf(b) === stations[a].indexOf('Union Square') &&  stations[c].indexOf(d) < stations[c].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[c].indexOf('Union Square') - 1; i >= stations[c].indexOf(d); i--) {
      stationList.push(' ' + stations[c][i]);
    } console.log(`At Union Square ensure you are on line ${ c }.`);
      console.log(`You must travel through the following stops on the ${ c } line:${ stationList }.`);
      console.log(`${ stationList.length } stops in total.`);
  }

  //Going to union square going forwards.
  else if ( stations[c].indexOf(d) === stations[c].indexOf('Union Square') && stations[a].indexOf(b) < stations[a].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) + 1; i <= stations[a].indexOf('Union Square'); i++) {
      stationList.push(' ' + stations[c][i]);
    } console.log(`You must travel through the following stops on the ${ a } line:${ stationList }.`);
      console.log(`${ stationList.length } stops in total.`);
  }

  //Going to union square going backwards.
  else if ( stations[c].indexOf(d) === stations[c].indexOf('Union Square') && stations[a].indexOf(b) > stations[a].indexOf('Union Square') ) {
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) - 1; i >= stations[a].indexOf('Union Square'); i--) {
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line:${ stationList }.`);
      console.log(`${ stationList.length } stops in total.`);
  }


  //Travelling the same line:

  //If travelling the same line forwards.
  else if ( a === c && stations[c].indexOf(d) > stations[a].indexOf(b)){
    console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
    let stationList = [];
    for (let i = stations[a].indexOf(b) + 1; i <= (stations[c].indexOf(d) - stations[a].indexOf(b)); i++){
      stationList.push(' ' + stations[a][i]);
    } console.log(`You must travel through the following stops on the ${ a } line:${ stationList }.`);
      console.log(`${ stationList.length } stops in total.`);
  }

  //If travelling the same line backwards.
  else if (a === c && stations[c].indexOf(d) < stations[a].indexOf(b)) {
      console.log(`In order to travel from line ${ a } ${ b } to line ${ c } ${ d }:`);
      let stationList = [];
      for (let i = stations[a].indexOf(b) - 1; i >= stations[c].indexOf(d); i--) {
        stationList.push(' ' + stations[a][i]);
      } console.log(`You must travel through the following stops on the ${ a } line: ${ stationList }.`);
        console.log(`${ stationList.length } stops in total.`);
    }

  //Everything else catches here, just incase none of the conditions above fit.
  else {
    console.log(`Please enter the correct information.`);
  }
};

planTrip(currLine,currSta,destLine,destSta); //calling the function with user inputs.

//Asks the user if they want to search another route.
while (x = true){
  const tryAgain = prompt(`Would you like to search another route?`);
  if (tryAgain === 'No' || 'no'){ //if input is either no or No x will redefine itself and break from the while loop.
    x = 'no';
    console.log(`Thank you for your time.`);
    break;
  }
  const currLine = prompt("Please enter the line you are are at:");
  const currSta  = prompt("Please enter the station you are at:");
  const destLine = prompt("Please enter the line you wish to travel to:");
  const destSta = prompt("Please enter the station you wish to travel to:");
  planTrip(currLine,currSta,destLine,destSta);
};
