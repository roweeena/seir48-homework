

const line6 = {
    name: 'line6',
    stops: ['Astor Place', 'Union Square', '23rd-6L', '28th-6L', '33rd', 'Grand Central']
};
const lineL = {
    name: 'lineL',
    stops: ['1st', '3rd', 'Union Square', '6th', '8th-LL']
};
const lineN = {
    name: 'lineN',
    stops: ['8th-NL', 'Union Square', '23rd-NL', '28th-NL', '34th', 'Times Square,']
};






// get planTrip to console log the lines/stations you pass in to it back on the console

const planTrip = function (str) {
  for(let i = 0; i < str.length; i++)

  console.log(i);
};

planTrip([line6.stops]);




















// get planTrip to log out ALL the stations for the lines you pass into it (you’ll need access to all the stations so you can find YOUR stations)
// get planTrip to find the indexOf the stations you care about from the list of all the stations on your line (step 2, above)
// get planTrip to print out all the stations between your start and end station
