 console.log("hello world");
//
//
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

// Objects

// const stations = [ {
//     name: 'lineL',
//     stops: ['1st', '3rd', 'Union Square', '6th', '8th-LL']
//     },
//   {
//    name: 'line6',
//    stops: ['Astor Place', 'Union Square', '23rd-6L', '28th-6L', '33rd', 'Grand Central']
//    },
//   {
//    name: 'lineN',
//    stops: ['8th-NL', 'Union Square', '23rd-NL', '28th-NL', '34th', 'Times Square,']
//    }
//   ];

const line6 = ['Astor Place', 'Union Square', '23rd-6L', '28th-6L', '33rd', 'Grand Central'];
const lineL = ['1st', '3rd', 'Union Square', '6th', '8th-LL'];
const lineN = ['8th-NL', 'Union Square', '23rd-NL', '28th-NL', '34th', 'Times Square,'];





const planTrip = (startStation, startLine) => {
  //for(let i = 0; i < startStation.length; i++);

  const stop1 = startStation;
  const line1 = startLine;
  console.log(`${stop1} is on ${line1} `);
}

planTrip( line6[0], line6);



// Enter Start Station
const stop1 = (firstStaions) => {
  const stationsObject = firstStaions[0];
  const stopsObject = stationsObject.stops;
const indexOfEquals = stopsObject.indexOf('3rd');
  console.log(indexOfEquals);
for( i = indexOfEquals; i < firstStaions.length; i++);
  console.log(`${i} ${stationsObject.stops}`);
}
//
// stop1(stations); // Calls Start Station Function
//
//
//
// // Enter Start Train Line
// const trainLine1 = (firstTrainLine) => {
//   const train1Object = firstTrainLine.name;
// // //const stopsObject = stationsObject.name;
// // const indexOfEquals = stopsObject.indexOf();
//   console.log(train1Object);
// }
//
// trainLine1(stations[1]); // Calls Start line Function
//
//
//
// // // Enter Exit Station index number
// const stop2 = (secondStaions) => {
//   const stationsObject = secondStaions[1];
//   const stopsObject = stationsObject.stops;
// const indexOfEquals = stopsObject.indexOf('Grand Central');
//   console.log(indexOfEquals);
// }
//
// stop2(stations); // Calls Second Train Line name based on index number
//
//
//
// // // Enter Second Train Line
// const trainLine2 = (firstTrainLine) => {
//   const train1Object = firstTrainLine.name;
// // //const stopsObject = stationsObject.name;
// // const indexOfEquals = stopsObject.indexOf();
//   console.log(train1Object);
// }
//
// trainLine2(stations[2]); // Calls Start line Function
//
// //
// stop1(stations); // Calls Second Train Line
//
//
//
//


//
// const findTheIndex = (String) => {
//     const
// }


//
// const
//
// const  = {
//   stations: ['8th-NL', 'Union Square', '23rd-NL', '28th-NL', '34th', 'Times Square,']
// };
// const line6 = {
//   stations: ['Astor Place', 'Union Square', '23rd-6L', '28th-6L', '33rd', 'Grand Central']
// };
















// const findStation = (line) => {
//     return line.stations;
// };
//
// console.log(findStation(line6));
//
// const functionRan = (line) => {
//     return indexOf(line);
// };
//
// functionRan(lineN);



// const startStation = (line, stations) => {
//     return `${line} - ${line.station}`;
// };
//
// console.log(startStation(lineL, "3rd"));




















//
