

// Trainlines South
const line6_S = {
    name: 'line6 South',
    stops: ['23rd-6L', '28th-6L', '33rd', 'Grand Central']
};
const lineL_S = {
    name: 'lineL South',
    stops: ['6th', '8th-LL']
};
const lineN_S = {
    name: 'lineN South',
    stops: ['23rd-NL', '28th-NL', '34th', 'Times Square,']
};

//Trainlines North
const line6_N = {
    name: 'line6 North',
    stops: ['Astor Place', 'Union Square']
};
const lineL_N = {
    name: 'lineL',
    stops: ['1st', '3rd', 'Union Square']
};
const lineN_N = {
    name: 'lineN',
    stops: ['8th-NL', 'Union Square']
};


const planTrip = (startLine, stop1, endLine, stop2) => { // Main function

// ---------------------------- Finds Start Station and Start TrainLine----------------------------------------
  const line1 = startLine.name; // Gets Starting Train line
    console.log(`"${line1}" is your starting Train Line`); // Logs starting Train Line

  const firstStopIndex = startLine.stops.indexOf(stop1); // Finds index of stop1
  const firstStopStr = startLine.stops[firstStopIndex]; // Finds the trainline of stop1
    console.log(`Enter the train at station "${firstStopStr}" on the "${line1}"`);

  const remStations1 = startLine.stops.slice(firstStopIndex); // Creates a new array based on Index number
  const remSta1 = remStations1.toString();
    console.log(`Your remaining stations are ${remSta1}`);


//------------------------------------------------------------------------------------------------------------

//-------------------------------Finds End Staion and 2nd Trainline-------------------------------------------

const line2 = endLine.name; // Gets Second Train line
  console.log(`"${line2}" is your Second Train Line`); // Logs second Train Line

const secStopIndex = endLine.stops.indexOf(stop2); // Finds index of stop2
const secStopStr = endLine.stops[secStopIndex]; // Finds the trainline of stop2
  console.log(`Enter the train at Union Station and take the "${line2}" to your destination "${secStopStr}".`);

const remStations2 = endLine.stops.slice(secStopIndex); // creates a new array based on Index number
  console.log(remStations2.toString());
};


planTrip(line6_N, 'Astor Place', lineN_S, '28th-NL');



//   const line1 = startLine.name;
//   const line2 = endLine.name;
//
// //   const stations = startLine[0];
// // //const stopsObject = stations.stops;
// //   const index = stations.indexOf(stations[0]);
//
//   let s = "";
//   for ( let i = 0; i <= startLine.stops.length; i ++ ) {
//     s += i + " ";
//
//      console.log(s); // logs list of stations
//   }
//
//   console.log(`Take ${line1} from ${sta1} to Union Station, and then take ${line2} to ${sta2}`);
// }

// planTrip(lineL, '6th', lineN, lineN.stops[3]);


//
// for (let i in lineL.stops) {
//    console.log(i); // logs "0", "1", "2", "foo"
// }
