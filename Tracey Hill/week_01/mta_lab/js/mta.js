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

// Subway info put into an object ////////////////////////////////////
const subway = {
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  L: ["1st", "3rd", "Union Square", "8th", "6th"],
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
};

// Creat a trip leg/stage function ///////////////////////////////////
// Get array of stops based on the start and finish stop input
// check direction function using the indexOf()

const tripStage = function (start, finish, stops) {
  let route = [];
  const startIndex = stops.indexOf(start);
  const finishIndex = stops.indexOf(finish);
  if (startIndex < finishIndex) {
    route = stops.slice(startIndex + 1, finishIndex + 1);
    // provides the route segment of the array between the two indexes addling +1 to
    // each side to ensure slice gets the correct start and end stations
    return route;
  } else {
    route = stops.slice(finishIndex, startIndex);
    //provides the route segment of the array between the two indexes no need
    // for changes as the way slice works in this instance will return correct values
    const reverseRoute = route.reverse();
    // reverses the rout to be in the correct order for console logging.
    return reverseRoute;
  }
};

// Trip planner function /////////////////////////////////////////////
const planTrip = function (lineOn, stationOn, lineOff, stationOff) {
  // Line check yes or no
  // Boolean result
  const isMultiLine = lineOn !== lineOff;
  // Condition - if multiline trip get off at Union Sq and board other line else stay on
  if (isMultiLine) {
    const routeLeg1 = tripStage(stationOn, "Union Square", subway[lineOn]);
    const routeLeg2 = tripStage("Union Square", stationOff, subway[lineOff]);
    // Use the join array method to return a new string, concatenating all array elements
    console.log(`You must travel through the following stops on the ${lineOn} line: ${routeLeg1.join(", ")}.`);
    // Tell the traveller to change lines at Union Square
    console.log(`Change at Union Square.`);
    console.log(`Your journey continues through the following stops: ${routeLeg2.join(", ")}.`);
    // Add stops of the two routeLeg arrays to get the stops total to display in total
    console.log(`${routeLeg1.length + routeLeg2.length} stops in total.`);
  } else {
    // Can pass either lineOn or lineOff from subway in this instance - they're the same
    const route = tripStage(stationOn, stationOff, subway[lineOn]);
    // Use the join array method to return a new string, concatenating all array elements
    console.log(
      `You must travel through the following stops on the ${lineOn} line: ${route.join(", ")}.`);
    // log the number of stops from the length of the route array to get the stops total.
    console.log(`${route.length} stops in total.`);
  }
};

// Non-essential requirements to the assignment - to get the select boxes to work on the HTML page
document.getElementById("submit").addEventListener("click", function () {
  const lineOn = document.getElementById("lineOn").value;
  const stationOn = document.getElementById("stationOn").value;
  const lineOff = document.getElementById("lineOff").value;
  const stationOff = document.getElementById("stationOff").value;

  planTrip(lineOn, stationOn, lineOff, stationOff);
});

// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
