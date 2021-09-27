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

const mta = {

  lines: {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  },

  stations: {
  'N Times Square': { name: 'Times Square', index: 0, line: 'N',},
  'N 34th': { name: '34th', index: 1, line: 'N',},
  'N 28th': { name: '28th', index: 2, line: 'N',},
  'N 23rd': { name: '23rd', index: 3, line: 'N',},
  'N Union Square': { name: 'Union Square', index: 4, line: 'N',},
  'N 8th': { name: '8th Street', index: 5, line: 'N',},
  'L 8th': { name: '8th', index: 0, line: 'L',},
  'L 6th': { name: '6th', index: 1, line: 'L',},
  'L Union Square': { name: 'Union Square', index: 2, line: 'L',},
  'L 3rd': { name: '3rd', index: 3, line: 'L',},
  'L 1st': { name: '1st', index: 4, line: 'L',},
  '6 Grand Central': { name: 'Grand Central', index: 0, line: '6',},
  '6 33rd': { name: '33rd', index: 1, line: '6',},
  '6 28th': { name: '28th', index: 2, line: '6',},
  '6 23rd': { name: '23rd', index: 3, line: '6',},
  '6 Union Square': { name: 'Union Square', index: 4, line: '6',},
  '6 Astor Place': { name: 'Astor Place', index: 5, line: '6',},
  },

  //methods
  singleLineJourney: function ( fromStation, toStation ) {

    const startStationIdx = this.stations[fromStation].index;
    const endStationIdx = this.stations[toStation].index;
    const line = this.lines[this.stations[toStation].line];

    if (startStationIdx < endStationIdx) {
      let journeyArray = line.slice( startStationIdx, endStationIdx + 1 )
      return journeyArray;
    }

    else {
      let journeyArray = line.slice( endStationIdx, startStationIdx + 1 ).reverse()
      return journeyArray;
    }
  },

  multiLineJourney: function ( fromStation, toStation ) { //need to get to Union Station to change lines

    let startLine = this.stations[fromStation].line;
    let endLine = this.stations[toStation].line;

    let toUSStr = `${ startLine } Union Square`;
    let fromUSStr = `${ endLine } Union Square`;

    return [
      this.singleLineJourney( fromStation, toUSStr ),
      this.singleLineJourney( fromUSStr, toStation ),
    ]
  },

  planJourney: function ( fromStation, toStation ) {

    if (fromStation === toStation) {
      return `You are already at ${ this.stations[toStation].name}`;
    }

    else {
      if (this.stations[fromStation].line === this.stations[toStation].line) {

        return this.printJourney(this.singleLineJourney( fromStation, toStation ), fromStation, toStation);
      }
      else{

        return this.printJourney(this.multiLineJourney (fromStation, toStation ), fromStation, toStation);
      }
    }
  },

  printJourney: function ( arr, fromStation, toStation ) {

    if ( Array.isArray(arr[0]) ) {

      let journeyStr = `To get to your destination at ${ this.stations[toStation].name }, you must travel through the following stops on the ${ this.stations[fromStation].line} line: ${ arr[0] }.
      Change at Union Station then travel through the following stops on the ${ this.stations[toStation].line} line: ${ arr[1] }. ${ arr[0].length + arr[1].length - 2} stops in total.`;

      return journeyStr;
    }
    else {

      let journeyStr = `To get to your destination at ${ this.stations[toStation].name }, you must travel through the following stops on the ${ this.stations[fromStation].line}: ${ arr }. ${ arr.length - 1 } stops in total.`;

      return journeyStr;
    }
  },
};

console.log(mta.planJourney( 'N Times Square', '6 Grand Central' ));




//below: here be dragons

// const lineN = ['Times Square', '34th', '28thN', '23rdN', 'Union Square', '8thN'];
// const lineL = ['8thL', '6th', 'Union Square', '3rd', '1st'];
// const line6 = ['Grand Central', '33rd', '28th', '23rd6', 'Union Square', 'Astor Place'];
//
//
// const tripPrinter = (resultArr, startLine, endLine) => {
//   let str =
//     `Your journey to ${ resultArr[resultArr.length -1]} will start at ${ resultArr[0] }`
//
//   return str;
// }
//
// const singleLinePlanner = (startStation, endStation, line) => {
//   const originidx = line.indexOf(startStation);
//   //console.log(`The origin station is ${ line[originidx] }`);
//   const destinationidx = line.indexOf(endStation);
//   //console.log(`The destination station is ${ line[destinationidx] }`);
//   const journeyArray = [];
//
//   if (originidx > destinationidx) {
//
//     for (let i = originidx; i >= destinationidx; i--) {
//       //console.log(line[i]);
//       journeyArray.push(line[i]);
//     }
//   } else {
//
//     for (let i = originidx; i <= destinationidx; i++) {
//       journeyArray.push(line[i]);
//     }
//   }
//   return journeyArray;
// }
//
// const tripPlanner = (startLine, startStation, endLine, endStation) => {
//
//   if (startLine === endLine) {
//     let result = singleLinePlanner(startStation, endStation, startLine);
//     return result
//   } else {
//     let result = []
//     let pushArray1 = singleLinePlanner(startStation, 'Union Square', startLine);
//     let pushArray2 = singleLinePlanner('Union Square', endStation, endLine);
//
//     for (let i = 0; i < pushArray1.length; i++) {
//       result.push(pushArray1[i]);
//     };
//
//     for (let i = 0; i < pushArray2.length; i++) {
//       result.push(pushArray2[i]);
//     };
//
//     return tripPrinter(result, startLine, endLine).;
//   }
// }
//
// console.log(tripPlanner(lineN, 'Times Square', lineN, '8thN'));
// console.log(tripPlanner(lineN, '8thN', lineL, '8thL'));
