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

const lineNames = {
  N: [
    "Times Square",
    "34th",
    "N Line 28th",
    "N Line 33rd",
    "Union Square",
    "8th",
  ],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: [
    "Grand Central",
    "6 Line 33rd",
    "6 Line 28th",
    "23rd",
    "Union Square",
    "Astor Place",
  ],
};

function planLine(lineName, begin, end) {
  const line = lineNames[lineName];
  const startIndex = line.indexOf(begin);
  const endIndex = line.indexOf(end);

  // reverse direction to travel down another line:
  let direction = -1;
  if (startIndex < endIndex) {
    direction = 1;
  }

  // change to return station names array only - put messaging in main func:
  // get it to count "7 stops in total."
  let message = `You are travelling on line ${lineName} from `;
  for (let i = startIndex; i !== endIndex; i += direction) {
    message += line[i] + ", to ";
  }

  message += end;
  return message;
}

function planTrip(
  departureLineName,
  departureStationName,
  arrivalLineName,
  arrivalStationName
) {
  // indexer:
  departureLine = lineNames[departureLineName];
  arrivalLine = lineNames[arrivalLineName];

  let message = "";
  stationCount = 0;

  if (departureLineName === arrivalLineName) {
    console.log(
      planLine(departureLineName, departureStationName, arrivalStationName)
    );
  } else {
    // Hop to new array beginning at indexOf('Union Square'):
    console.log(
      planLine(departureLineName, departureStationName, "Union Square")
    );
    console.log("Change at Union Square.");

    console.log(planLine(arrivalLineName, "Union Square", arrivalStationName));
  }
}

// output
planTrip("L", "6th", "N", "34th");
planTrip("6", "6 Line 33rd", "N", "Times Square");
planTrip("N", "34th", "6", "Grand Central");
