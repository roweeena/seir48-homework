//create an array contains all Lines and Stops.
const subway = [
  {
    name: "N",
    stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },
  {
    name: "L",
    stops: ["8th", "6th", "Union Square", "3rd", "1st"]
  },
  {
    name: "6",
    stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
];
//create a function issues an array containing all stops on that Line.
const arrOfLines = (line) => {
  for ( let i = 0; i < subway.length; i++) {
    if ( subway[i].name === line ) {
      return subway[i].stops;
    }
  }
};
//create a function shows the index of specific stop.
const indexOfStop = (line, stop) => {
  for ( let i = 0; i < subway.length; i++ ) {
    if ( subway[i].name === line ) {
      for ( let a = 0; a < subway[i].stops.length; a++ ) {
        if ( subway[i].stops[a] === stop ) {
          return a;
        }
      }
    }
  }
};
//create a function and issue an array includes all stops between start stop and terminal stop.
//This array DO NOT show start stop and terminal stop.
const stopsBetween = (line, start, end) => {
  const arrLine = arrOfLines(line);
  const indexOfStart = indexOfStop(line, start);
  const indexOfEnd = indexOfStop(line, end);

  let arrStops = [];
  let arrStopsInOrder = [];

  if ( indexOfStart > indexOfEnd ) {
      arrStops = arrLine.slice(indexOfEnd + 1 , indexOfStart);
      for ( let i = arrStops.length - 1; i >=0; i-- ) {
        arrStopsInOrder.push(arrStops[i]);
      }
      arrStops = arrStopsInOrder;
    } else {
    arrStops = arrLine.slice(indexOfStart + 1 , indexOfEnd);
  }

  return arrStops;
};
//Main function, but haven't done any customer input validation yet.
const planTrip = function(startLine, startStop, endLine, endStop ) {
  const stopsToUnion = stopsBetween(startLine, startStop, "Union Square");
  const stopsFromUnion = stopsBetween(endLine, "Union Square", endStop);
  //because Union Square is intersection and excluded twice by above two inside functions
  //So we have to add 2 at the end.
  let totalStops;

  if ( startStop === "Union Square") {
    totalStops = stopsToUnion.length + stopsFromUnion.length + 1;
  } else {
    totalStops = stopsToUnion.length + stopsFromUnion.length + 2;
  }

  const messageDiffLines =
          `You must travel through the following stops on the ${ startLine } line:
          ${ stopsToUnion },Union Square.
          Change at Union Square.
          Your journey continues through the following stops:
          ${ stopsFromUnion },${ endStop }.
          ${ totalStops } stops in total.`;

  const messageSameLine =
          `You must travel through the following stops on the ${ startLine } line:
          ${ stopsToUnion },Union Square,${ stopsFromUnion },${ endStop }.
          ${ totalStops } stops in total.`;

  const messageUnionSquare =
          `You must travel through the following stops on the ${ endLine } line:
          ${ stopsToUnion },${ stopsFromUnion },${ endStop }.
          ${ totalStops } stops in total.`;

  if ( startLine !== endLine) {
    if ( startStop === "Union Square" ) {
      return messageUnionSquare;
    } else {
      return messageDiffLines;
    }
  } else {
    return messageSameLine;
  }
};

console.log(planTrip("N", "Times Square", "6", "33rd"));
console.log(planTrip("L", "1st", "L", "8th"));
console.log(planTrip("L", "3rd", "N", "23rd"));
console.log(planTrip("6","Union Square","N","34th"));
