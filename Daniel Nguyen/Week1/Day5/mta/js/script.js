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


// Jamboard diagram
// https://jamboard.google.com/d/1BEd9uZG6CdTzQ0T2zCLo36jUDbsxLxkz6fL2TLIjBrU/viewer?f=0

const subway = {

  lines: {
    '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    'L': ["8th", "6th", "Union Square", "3rd", "1st"],
    'N': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },

  stations: {
    // IDs are concatenation of line and stop
    // i.e. '60' is Line 6, Stop 0
    '60': {name: "Grand Central", line: "6", stop: 0},
    '61': {name: "33rd", line: "6", stop: 1},
    '62': {name: "28th", line: "6", stop: 2},
    '63': {name: "23rd", line: "6", stop: 3},
    '64': {name: "Union Square", line: "6", stop: 4},
    '65': {name: "Astor Place", line: "6", stop: 5},
    'L0': {name: "8th", line: "L", stop: 0},
    'L1': {name: "6th", line: "L", stop: 1},
    'L2': {name: "Union Square", line: "L", stop: 2},
    'L3': {name: "3rd", line: "L", stop: 3},
    'L4': {name: "1st", line: "L", stop: 4},
    'N0': {name: "Times Square", line: "N", stop: 0},
    'N1': {name: "34th", line: "N", stop: 1},
    'N2': {name: "28th", line: "N", stop: 2},
    'N3': {name: "23rd", line: "N", stop: 3},
    'N4': {name: "Union Square", line: "N", stop: 4},
    'N5': {name: "8th", line: "N", stop: 5},
  },

  unionSquare: {
    '6': '64',
    'L': 'L2',
    'N': 'N4'
  },

  planTrip: function (fromId, toId) {
    if (fromId === toId) {
      return "You are already at " + this.stations[toId].name;
    };

    const singleLine = fromId[0] === toId[0];

/////// TODO: Write the messages the user sees  ////////////////////////////////

    if (singleLine) {
      return this.singleLineJourney(fromId, toId);
    } else {
      return this.multiLineJourney(fromId, toId);
    }
  },

  singleLineJourney: function (fromId, toId) {
    const fromStop = this.stations[fromId].stop
    const toStop = this.stations[toId].stop
    const line = this.lines[fromId[0]];

    let journey = fromStop < toStop ? (
      line.slice(fromStop, toStop + 1)
    ) : (
      line.slice(toStop, fromStop + 1).reverse()
    );

    return journey;
  },

  multiLineJourney: function (fromId, toId) {
    return [
      this.toUnion(fromId),
      this.fromUnion(toId)
    ];
  },

  toUnion: function (fromId) {
    const line = fromId[0];
    const unionSquareId = this.unionSquare[line];
    return this.singleLineJourney(fromId, unionSquareId);
  },

  fromUnion: function (toId) {
    const line = toId[0];
    const unionSquareId = this.unionSquare[line];
    return this.singleLineJourney(unionSquareId, toId);
  },

};


console.log( subway.planTrip('60', 'L1') );
