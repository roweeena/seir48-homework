console.log("Is this  v working?");
// # MTA Lab

// const lineN = ["34th", "28th", "23th", "Union Square", "8th"];
// const lineL = ["1st", "3th", "Union Square", "6th", "8th"];
// const line6 = [
//   "Grand centeral",
//   "33th",
//   "28th",
//   "23th",
//   "Union Square",
//   "Astro Place",
// ];
// const planTrip = (startLine, start, end) => {
//   let trip = [];
//   let stopLocations = []; // [1,3]
//   for (let i = 0; i < startLine.length; i++) {
//     // finding start location
//     //it is to loop through all line stops.
//     if (startLine[i] === start) {
//       // pick uo the start location base on the input data on function
//       stopLocations.push(i);
//     }
//   }
//   for (let i = 0; i < startLine.length; i++) {
//     // finnding end location
//     //it is to loop through all line stops.
//     if (startLine[i] === end) {
//       // pick up the end location base on the input data on function.
//       stopLocations.push(i);
//     }
//   }

//   if (stopLocations[0] > stopLocations[1]) {
//     // if he is comming back
//     for (let j = stopLocations[0]; j >= stopLocations[1]; j--) {
//       // push all the stops between start abd end stops.
//       trip.push(startLine[j]);
//     }
//   } else {
//     // if he is going
//     for (let j = stopLocations[0]; j <= stopLocations[1]; j++) {
//       // push all the stops between start abd end stops.
//       trip.push(startLine[j]);
//     }
//   }
//   return trip;
// };
// console.log(planTrip(lineL, "6th", "1st"));

// for (let k = 3; k > 0; k--) {
//   console.log(k);
// }

// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.

// #### Activity
// * Create a program that models a simple subway system.

// * The program takes the line and stop that a user is getting on at
// and the line
// and stop that user is getting off at and prints the journey and the
// total number of stops for the trip in the console:

// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a
// suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th,
//  28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th,
// 33rd."
// // "7 stops in total."
// ```

// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th,
//   *  23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th,
//   *  23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they
//  will pass through or change at.

// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that
//  process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it
// working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops
//  and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)
// let myHonda = { color: "red", wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// let myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
// let newCar = myCar.slice(0, 2);
// console.log(newCar);
// let mynon = myCar.slice(1, myCar.length);
// console.log(mynon);

// const planTrip = (startLine, start, endLine, end) => {
//   let trip = [];
//   let stopsLocations = [];
//   if (lineN.indexOf(start) > lineN.indexOf(end))
//     return startLine
//       .slice(lineN.indexOf(end), lineN.indexOf(start) + 1)
//       .reverse();
//   if (
//     lineN.indexOf(start) < lineN.indexOf(end)
//     // start == lineN[lineN.indexOf(start)]
//     // end == lineN[lineN.indexOf[end] + 1]
//     // lineN.indexOf(start) > lineNindexOf(end)
//   )
//     return startLine.slice(lineN.indexOf(start), lineN.indexOf(end) + 1);

//   //   if (
//   //     start === lineN[lineN.indexOf(start)] &&
//   //     end === lineN[lineN.indexOf[end]] &&
//   //     lineN.indexOf(start) > lineNindexOf(end)
//   //   ) {
//   //     return startLine
//   //       .slice(lineN.indexOf(start), lineN.indexOf(end) + 1)
//   //       .reverse();
//   //   }
// };

// // console.log(planTrip(lineN, "8th", "28th"));
// const lineN = ["34th", "28th", "23th", "Union Square", "8th"];
// const lineL = ["1st", "3th", "Union Square", "6th", "8th"];
// const line6 = [
//   "Grand centeral",
//   "33rd",
//   "28th",
//   "23th",
//   "Union Square",
//   "Astro Place",
// ];
///
///
///

const subway = {
  N: ["34th", "28th", "23th", "Union Square", "8th"],
  L: ["1st", "3th", "Union Square", "6th", "8th"],
  six: [
    "Grand centeral",
    "33rd",
    "28th",
    "23th",
    "Union Square",
    "Astro Place",
  ],
};
const planTrip = (startLine, start, endLine, end) => {
  let trip = [];
  let display;
  if (subway[startLine] === subway[endLine]) {
    if (subway[startLine].indexOf(start) > subway[startLine].indexOf(end)) {
      trip.push(
        subway[startLine]
          .slice(
            subway[startLine].indexOf(end),
            subway[startLine].indexOf(start) + 1
          )
          .reverse()
      );
    } else {
      trip.push(
        subway[startLine].slice(
          subway[startLine].indexOf(start),
          subway[startLine].indexOf(end) + 1
        )
      );
    }
    display = `You must travel through the following stops on the ${startLine} line: ${trip[0].join(
      ", "
    )}.\n${trip[0].length} stops in total.`;
  } else {
    if (
      subway[startLine].indexOf(start) >
      subway[startLine].indexOf("Union Square")
    ) {
      trip.push(
        subway[startLine]
          .slice(
            subway[startLine].indexOf("Union Square"),
            subway[startLine].indexOf(start) + 1
          )
          .reverse()
      );
    }
    if (
      subway[startLine].indexOf(start) <
      subway[startLine].indexOf("Union Square")
    ) {
      trip.push(
        subway[startLine].slice(
          subway[startLine].indexOf(start),
          subway[startLine].indexOf("Union Square") + 1
        )
      );
    }
    if (
      subway[endLine].indexOf("Union Square") > subway[endLine].indexOf(end)
    ) {
      trip.push(
        subway[endLine]
          .slice(
            subway[endLine].indexOf(end),
            subway[endLine].indexOf("Union Square")
          )
          .reverse()
      );
    }
    if (
      subway[endLine].indexOf("Union Square") < subway[endLine].indexOf(end)
    ) {
      trip.push(
        subway[endLine].slice(
          subway[endLine].indexOf("Union Square") + 1,
          subway[endLine].indexOf(end) + 1
        )
      );
    }
    display = `You must travel through the following stops on the ${startLine} line: ${trip[0].join(
      ", "
    )}.\nChange at Union Square to ${endLine}.\nYour journey continues through the following stops: ${trip[1].join(
      ", "
    )}.\n${trip[0].length + trip[1].length} stops in total.`;
  }
  // return trip;
  return display;
};

console.log(planTrip("N", "34th", "N", "23th"));
console.log(planTrip("N", "34th", "six", "33rd"));
// "You must travel through the following stops on the N line: 34th,
//  28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th,
// 33rd."
// // "7 stops in total."
// const subway = {
//   lineN: ["34th", "28th", "23rd", "Union Square", "8th"],
//   lineL: ["1st", "3rd", "Union Square", "6th", "8th"],
//   line6: [
//     "Grand centeral",
//     "33rd",
//     "28th",
//     "23rd",
//     "Union Square",
//     "Astro Place",
//   ],
// };
// const planTrip = (startLine, start, endLine, end) => {
//   let trip = [];
//   let display;
//   if (subway[startLine] === subway[endLine]) {
//     if (subway[startLine].indexOf(start) > subway[startLine].indexOf(end)) {
//       trip.push(
//         subway[startLine]
//           .slice(
//             subway[startLine].indexOf(end),
//             subway[startLine].indexOf(start) + 1
//           )
//           .reverse()
//       );
//     } else {
//       trip.push(
//         subway[startLine].slice(
//           subway[startLine].indexOf(start),
//           subway[startLine].indexOf(end) + 1
//         )
//       );
//     }
//     display = `You must travel through the following stops on the ${startLine.slice(
//       4
//     )} line: ${trip[0].join(", ")}.\n${trip[0].length} stops in total.`;
//   } else {
//     if (
//       subway[startLine].indexOf(start) >
//       subway[startLine].indexOf("Union Square")
//     ) {
//       trip.push(
//         subway[startLine]
//           .slice(
//             subway[startLine].indexOf("Union Square"),
//             subway[startLine].indexOf(start) + 1
//           )
//           .reverse()
//       );
//     }
//     if (
//       subway[startLine].indexOf(start) <
//       subway[startLine].indexOf("Union Square")
//     ) {
//       trip.push(
//         subway[startLine].slice(
//           subway[startLine].indexOf(start),
//           subway[startLine].indexOf("Union Square") + 1
//         )
//       );
//     }
//     if (
//       subway[endLine].indexOf("Union Square") > subway[endLine].indexOf(end)
//     ) {
//       trip.push(
//         subway[endLine]
//           .slice(
//             subway[endLine].indexOf(end),
//             subway[endLine].indexOf("Union Square")
//           )
//           .reverse()
//       );
//     }
//     if (
//       subway[endLine].indexOf("Union Square") < subway[endLine].indexOf(end)
//     ) {
//       trip.push(
//         subway[endLine].slice(
//           subway[endLine].indexOf("Union Square") + 1,
//           subway[endLine].indexOf(end) + 1
//         )
//       );
//     }
//     display = `You must travel through the following stops on the ${startLine.slice(
//       4
//     )} line: ${trip[0].join(
//       ", "
//     )}.\nChange at Union Square to the ${endLine.slice(
//       4
//     )} line.\nYour journey continues through the following stops: ${trip[1].join(
//       ", "
//     )}.\n${trip[0].length + trip[1].length} stops in total.`;
//   }
//   return display;
// };
// const lineA = "line" + prompt("Origin Line: ");
// const stopA = prompt("Origin Stop: ");
// const lineB = "line" + prompt("Destination Line: ");
// const stopB = prompt("Destination Stop: ");
// console.log(planTrip(lineA, stopA, lineB, stopB));
