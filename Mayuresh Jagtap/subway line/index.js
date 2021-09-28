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
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
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



// #1 write 3 array's for 3 diff lines.

const subwayLineN = ['Times Square', '34th', '28th', '23rd', 'Union Square',  '8th'];

const subwayLineL = ['8th', '6th', 'Union Square', '3rd','1st'];

const subwayLine6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

// #2 write a function with parameters.

const planTrip= function(startLine, startStation, endLine, endStation){
console.log(startLine, startStation, endLine, endStation);

// #3 check if both start and end lines are same.
if(startLine === endLine){

// #4 check if the line is N.
  if (startLine === 'N'){
    console.log(`This is line N.`);

// #startIndex is the index of start station.
// #endIndex is the index of end station.
// #Math.abs = to convert negative value into positive.
    let startIndex =  subwayLineN.indexOf(startStation)
    let endIndex =  subwayLineN.indexOf(endStation)
    let numOfStations = Math.abs(endIndex - startIndex)
    let stationNames = ''
    if (startIndex > endIndex) {
      for (let i= startIndex; i>= endIndex; i--){
        stationNames = stationNames + (subwayLineN[i] + `, `)
      }

    } else {
      for (let i= startIndex; i<= endIndex; i++){
        stationNames = stationNames + (subwayLineN[i] + `, `)
      }
    }

    console.log(`You must travel through the following stops on the N line: ${stationNames}`);
  console.log(`Number of stations travelled are ${numOfStations}.`);

 // #5 check if the line is L.
  } else if (startLine === 'L'){
    console.log(`This is line L.`);

    let startIndex = subwayLineL.indexOf(startStation)
    let endIndex = subwayLineL.indexOf(endStation)
    let numOfStations = Math.abs(endIndex - startIndex)

    let stationNames = ''
    if (startIndex > endIndex) {
      for (let i= startIndex; i>= endIndex; i--){
        stationNames = stationNames + (subwayLineL[i] + `, `)
      }

    } else {
      for (let i= startIndex; i<= endIndex; i++){
        stationNames = stationNames + (subwayLineL[i] + `, `)
      }
    }

    console.log(`You must travel through the following stops on the L line: ${stationNames}`);
console.log(`Number of stations travelled are ${numOfStations}.`);

 // #6 check if the line is 6.
  } else {
    console.log(`This is line 6.`);

    let startIndex = subwayLine6.indexOf(startStation)
    let endIndex = subwayLine6.indexOf(endStation)
    let numOfStations = Math.abs(endIndex - startIndex)

    let stationNames = ''
    if (startIndex > endIndex) {
      for (let i= startIndex; i>= endIndex; i--){
        stationNames = stationNames + (subwayLine6[i] + `, `)
      }

    } else {
      for (let i= startIndex; i<= endIndex; i++){
        stationNames = stationNames + (subwayLine6[i] + `, `)
      }
    }

    console.log(`You must travel through the following stops on the 6 line: ${stationNames}`);
console.log(`Number of stations travelled are ${numOfStations}.`);

// prompt(`Number of stations travelled are ${numOfStations}.`);
  }
}else {
  console.log("Lines are different.")
}

};
planTrip('N', '8th', 'N', '34th');






















// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)




/**
step 1. look into start line and station.
2. decide the direction  based on the information of lines
3. in a loop traverse to the destination.
    increment the station no. as we passes through loop
    if Uni Square then look for the end line and change the line of the iteration
    decide the direction of the line based on the information of lines
    traverse.
    found the line - . Print all info. EXIT




*/
