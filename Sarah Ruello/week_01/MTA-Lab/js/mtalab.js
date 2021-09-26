// #### MTA Lab Homework:

// storing each line as an object in a global array, lineObjects:
const lineObjects = {
  N: ["Times Square", "34th", "28th", "33rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

// function planLine - determines our station order printout and returns this as an array to our main planTrip function:
function planLine(lineName, begin, end) {
  // looking at lineObjects and taking whatever lineName is from it, putting it into a string array:
  const line = lineObjects[lineName];
  const startIndex = line.indexOf(begin);
  const endIndex = line.indexOf(end);

  // reverse direction to travel down another line:
  let direction = -1;
  if (startIndex < endIndex) {
    direction = 1;
  }

  // create empty array to store the order of stations passed through:
  let stations = [];
  // starting at the beginning station, and travelling either forwards or backwards as determined by 'direction'.
  // loop through the line array and stop at the endIndex:
  for (let i = startIndex; i !== endIndex; i += direction) {
    // add each station to the end of the new stations array to log their order:
    stations.push(line[i]);
  }
  // add final station as this could not be added in the loop above due to being excluded in our for loop:
  stations.push(end);
  return stations;
}

function planTrip(
  departureLineName,
  departureStationName,
  arrivalLineName,
  arrivalStationName
) {
  // indexer:
  departureLine = lineObjects[departureLineName];
  arrivalLine = lineObjects[arrivalLineName];

  // if/else statement required to handle routes without/with line changes:
  if (departureLineName === arrivalLineName) {
    let stations = planLine(
      departureLineName,
      departureStationName,
      arrivalStationName
    );
    console.log(
      `To travel from ${departureLineName} line ${departureStationName}, to ${arrivalLineName} line ${arrivalStationName}:`
    );
    console.log(
      `You must travel ${
        stations.length
      } stops on the ${departureLineName} line:  ${stations.join(", ")}.`
    );
  } else {
    // Hop to new array beginning at indexOf('Union Square'):
    let line1 = planLine(
      departureLineName,
      departureStationName,
      "Union Square"
    );

    // splice Union Square off this returned array as it is already mentioned once:
    let line2 = planLine(
      arrivalLineName,
      "Union Square",
      arrivalStationName
    ).splice(1);

    console.log(
      `To travel from ${departureLineName} line ${departureStationName}, to ${arrivalLineName} line ${arrivalStationName}:`
    );

    console.log(
      `Travel ${
        line1.length
      } stops on the ${departureLineName} line: ${line1.join(", ")}.`
    );

    console.log("Change at Union Square.");

    console.log(
      `Then continue ${
        line2.length
      } stops on the ${arrivalLineName} line: ${line2.join(", ")}.`
    );
    console.log(
      `You must travel ${line1.length + line2.length} stops in total.`
    );
  }
}

//planLine() test:
//planLine("N", "34th", "Union Square")
//planLine("N", "8th", "Times Square")

// output
planTrip("L", "6th", "L", "1st");
planTrip("L", "8th", "N", "34th");
planTrip("6", "33rd", "N", "Times Square");
planTrip("N", "34th", "6", "Grand Central");
