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
const tramLines = [
{Name : 'Line L', Stops : ['8thL' , '6th' , 'Union Square' , '3rd' , '1stL']},
{Name : 'Line N', Stops : ['Times Square' , '34th' , '28thN' , '23rdN', 'Union Square', '8thN']},
{Name : 'Line 6', Stops : ['Grand Central' , '33rd' , '28th6' , '23rd6' , 'Union Square' , 'Astor Place']}
];

const currentLocation = function (tram , stop , tramDesti , stopDesti) {
  let currentStation = '';
  let currentStop = '';
  let currentIndex = '';
  let destinationStation = '';
  let destinationStop = '';
  let destinationIndex = '';
  let tripStops = '';
    for (let i = 0 ; i < tramLines.length ; i++) {
      if (tram === tramLines[i].Name) {
          for (let x = 0 ; x < tramLines[i].Stops.length ; x++) {
            if (stop === tramLines[i].Stops[x]) {
              currentIndex = tramLines[i].Stops.indexOf(stop) - tramLines[i].Stops.indexOf('Union Square');
              currentStation = tramLines[i].Name;
              currentStop = tramLines[i].Stops[x];
              if (currentIndex < 0) {
                currentIndex = currentIndex * -1 ;
              }
              console.log(`Your current station is ${currentStation} and you are in stop ${currentStop}. You are
                ${currentIndex} stops away from Union Square`);
        };
        // const tramLines = [
        // {Name : 'Line L', Stops : ['8thL' , '6th' , 'Union Square' , '3rd' , '1st']},
        // {Name : 'Line N', Stops : ['Times Square' , '34th' , '28thN' , '23rdN', 'Union Square', '8thN']},
        // {Name : 'Line 6', Stops : ['Grand Central' , '33rd' , '28th6' , '23rd6' , 'Union Square' , 'Astor Place']}
        // ];
      };
      for (let j = 0 ; j < tramLines.length ; j++) {
        if (tramDesti === tramLines[j].Name) {
          for (let y = 0 ; y < tramLines[j].Stops.length ; y++) {
            if (stopDesti === tramLines[j].Stops[y]) {
              destinationIndex = tramLines[j].Stops.indexOf(stopDesti) - tramLines[j].Stops.indexOf('Union Square');
              if (destinationIndex < 0) {
                destinationIndex = destinationIndex * -1;
                tripStops = currentIndex + destinationIndex ;
                console.log(`Your destination is ${tripStops} stops away from your current location`);
              };
          };
        };
      };
    };
    };
  };
};

//currentLocation('Line N' , '34th' , 'Line N' , '8th (Line N)');
currentLocation('Line 6' , 'Grand Central' , 'Line L' , '1stL'); // 2stops
//currentLocation('Line 6' , 'Astor Place' , 'Line L' , '3rd'); //
//currentLocation('Line L' , '8th (Line L)' , 'Line N' , '8th (Line N)');
//currentLocation('Line 6' , '23rd (Line 6)' , 'Line 6' , 'Grand Central');
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
