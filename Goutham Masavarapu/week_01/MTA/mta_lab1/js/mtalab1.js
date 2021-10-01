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
// and stop that user is getting off at and prints the journey and the total number of
// stops for the trip in the console:
//
//the concept here is ...we got an array of stations
//2 --- figure out how to move from one to another
// figure out going forwards and backwards on the line
// give start station --- figure out an index
//given end station ---figure out an index
// const lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square","8th"];
// const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
// const line6 =["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

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
// my mind is blowing wind all sides ....

// console.log('MTA lab this is working');
//
// const singleLineTrip = function(line, start, end){
//   console.log('singleLineTrip()');
//   console.log('line = ', line);
//   console.log('sart = ', start);
//   console.log ('end =', end);
//
//   //Get the stations on the line whose name is
//   //in the variable 'line'
//
//   //Just to get this working, lets hardcode the N stations as the stations we are travelling on
// const lineStations =[];
//
// }; //singleLineTrip()
//
// // actually use the function we defined above
// singleLineTrip('N', '34th','8th')
// // output should be: 28th, 23rd Union Square, 8th

console.log('Hello');

const mta = {
  "N":["times Square", "34th", "28th", "union square", "8th"],
  "L":["8th","6th", "union square", "3rd", "1st" ],
  "6":["grand central","33rd", "28th", "23rd", "union square", "astor Place"]
}

const singleLineTrip = function(line,start, end){
  	const lineStations = mta[line];
	const startIndex = lineStations.indexOf(start);//position of the start
	const endIndex = lineStations.indexOf(end); // position of the endlane

	if(startIndex<endIndex){
		let stations = (lineStations.slice(startIndex,endIndex));
  		console.log(`You need to pass through: ${stations} `)
	} else {
		let stations = lineStations.slice().reverse(endIndex,startIndex);
    console.log(`You need to pass through: ${stations} `)
	}
}

singleLineTrip("N","34th","8th");


// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
// (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
 // so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
/////////////////////////////////////////////////////////////////////////////////
// //Started atempt on the multiple line journey
//
// // Start with outlining each of the arrays - lines.
//
// const nLine = ['Times Square', '34th', 'twenty8th', 'twentythird', 'Union Square','8th'];//go forward
// // const nLineReverse = nLine.reverse(); //for the reverse journey
//
// const lLine = ['eighth', '6th', 'Union Square', '3rd', '1st'];
// // const lLineReverse = lLine.reverse();
//
// const sixthLine = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
// // const sixthReverse = sixthLine.reverse();
//
// // start a function for the start and end of the journey//
// const planTrip = function (startLine, startStation, stopLine, stopStation) {
// // create lets for each of the 3 lines start and end stations
//
//         let startInd = nLine.indexOf(startStation);
//         let stopInd = nLine.indexOf(stopStation);
//         let numberOfStops = (stopInd - startInd); //calculate the number of stops
//
//         let startIndex = lLine.indexOf(startStation);
//         let stopIndex = lLine.indexOf(stopStation);
//         let noOfStops = (stopIndex - startIndex);   //calculate the number of stops
//
//         let starIndex = sixthLine.indexOf(startStation);
//         let stoIndex = sixthLine.indexOf(stopStation);
//         let numOfStops = (stoIndex - starIndex);  //calculate the number of stops
//
// //There are 6 possble combinations of start and end stations.
// N line on its on, Lline on its own, 6th line on its own.
// //then there are the combinations of Nline & 6th line, NLine & Lline,
// LLine and 6th Line as all only intersect at Union Square.
// // create if and else statements to cover each of the line options.
//
// //start and end only on the nLine
//     if (startLine === 'nLine' && stopLine === 'nLine') {
//         let tripStops = [];
//         for (let i = startInd + 1; i <= stopInd; i++) {
//         tripStops.push(nLine[i]);
//         }
//         console.log(`your trip is through ${ tripStops }`);
//         console.log(`There will be ${ numberOfStops } stops in total.`);
//
// //start and end only on the lLine
//     } else if (startLine === 'lLine' && stopLine === 'lLine') {
//         let tripArray = [];
//         for (let i = startIndex + 1; i <= stopIndex; i++) {
//         tripArray.push(lLine[i]);
//         }
//         console.log(`your trip is through ${ tripArray }`);
//         console.log(`There will be ${ noOfStops } stops in total.`);
//
// //start and end only on the sixthLine
//     } else if (startLine === 'sixthLine' && stopLine === 'sixthLine') {
//         let tripStations = [];
//         for (let i = starIndex + 1; i <= stoIndex; i++) {
//         tripStations.push(sixthLine[i]);
//         }
//         console.log(`your trip is through ${tripStations}`);
//         console.log(`There will be ${ numOfStops } stops in total.`);
//
//     } else if (startLine === 'nLine' && stopLine === 'lLine') {
//           // let nlCombo = [];
//           // for (let i = startInd; i <= 'Union Square'; i++) {
//           //   nlCombo.push(nLine[i]);
//           // }
//           // console.log(nlCombo);
//         }
//
//     // } else
//
//       };
//
// planTrip ('nLine','Times Square','lLine','3rd');

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
