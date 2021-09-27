// # MTA Lab

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

const lines = [
{
  name: 'N',
  stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
},
{
  name: 'L',
  stops: ['8th', '6th', 'Union Square', '3rd', '1st']
},
{
  name: '6',
  stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
]

// Check if lines are the same
const lineCheck = (l1, l2) => {
  if(l1 === l2) {
    return true;
  }
  else {
    return false;
  }
}

// Get the array value for the correct line
const getLineArrayKey = (l) => {
  for (let i=0; i<lines.length; i++){
    if(lines[i].name === l) {
      return i;
    }
  }
}

// Grabs all stops on a given line
const getLineStops = (l) => {
  let lineStops = lines[getLineArrayKey(l)].stops;
  return lineStops;
}


// Get position in array of a stop
const getStationPosition = (l,s) => {
  const lineStops = getLineStops(l);
  for (i=0; i<lineStops.length; i++) {
    if(lineStops[i] === s) {
      return i;
    }
  }
}

// Compare station positions which are on the same line
const compareStationPositions = (l,s1,s2) => {
  let positionOne = getStationPosition(l,s1);
  let positionTwo = getStationPosition(l,s2);
  if(positionTwo > positionOne) {
    return 'forwards'
  }
  else if(positionTwo < positionOne){
    return 'backwards'
  }
}

// returns an array of stations to travel between station 1 and station 2 if travel direction is forwards
const stationsToTravelForwards = (l1, s1, l2, s2) => {
    let stations = [];
    let stationPositionOne = getStationPosition(l1,s1); //Retrives position in the array of station 1
    let stationPositionTwo = getStationPosition(l2,s2); // Retrieves position in the array of station 2
    for (let i=stationPositionOne+1; i<=stationPositionTwo; i++) {
      stations.push(lines[getLineArrayKey(l1)].stops[i]);
    }
  return stations;
}

// returns an array of stations to travel between station 1 and station 2 if travel direction is backwards
const stationsToTravelBackwards = (l1, s1, l2, s2) => {
    let stations = [];
    let stationPositionOne = getStationPosition(l1,s1); //Retrives position in the array of station 1
    let stationPositionTwo = getStationPosition(l2,s2); // Retrieves position in the array of station 2
    for (let i=stationPositionOne-1; i>=stationPositionTwo; i--) {
      stations.push(lines[getLineArrayKey(l1)].stops[i]);
    }
  return stations;
}

const travelInstructionsSameLine = (l1, s1, l2, s2) => {
    let stationsToTravel =[]
    let travelDirection = compareStationPositions(l1,s1,s2);  //Checks whether direction of travel is forwards or backwards
    if (travelDirection === 'forwards') {  //Runs following code if the direction is forwards
        stationsToTravel.push(stationsToTravelForwards(l1,s1,l2,s2));
      }
    else if (travelDirection === 'backwards') {
        stationsToTravel.push(stationsToTravelBackwards(l1,s1,l2,s2));       
    }
  return stationsToTravel;  
}


const directions = (l1, s1, l2, s2) => {
  let stationsToTravelFirst = []; //creates an empty array to store stations to travel in
  let stationsToTravelSecond = []; //creates an empty array to store stations to travel in
  if(lineCheck(l1,l2)) { //Checks if stations are in the same line.
    stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l2,s2); //Sets stations to travel first as stations to travel
    console.log(`You must travel through the following stops on the ${lines[getLineArrayKey(l1)].name} line: ${stationsToTravelFirst}`); 
  }
  else { //what do we do if they're not on the same line?
    stationsToTravelFirst = travelInstructionsSameLine(l1,s1,l1,'Union Square');
    console.log(`You must travel through the following stops on the ${lines[getLineArrayKey(l1)].name} line: ${stationsToTravelFirst}`);
    console.log('Change at Union Square');
    stationsToTravelSecond = travelInstructionsSameLine(l2,'Union Square',l2,s2);
    console.log(`You must travel through the following stops on the ${lines[getLineArrayKey(l2)].name} line: ${stationsToTravelSecond}`);
  }
}


directions('N','34th','L','8th');

directions('N','34th','6','Astor Place');

directions('L','3rd','L','8th');

directions('6','Grand Central','N','Times Square');


// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."