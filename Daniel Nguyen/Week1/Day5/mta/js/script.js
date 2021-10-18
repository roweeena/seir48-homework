// # MTA Lab
// https://gist.github.com/wofockham/8ac3c1d747f345d89d3d

const subway = {

  lines: {
    '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    'L': ["8th", "6th", "Union Square", "3rd", "1st"],
    'N': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
  },

  planTrip: function (lineFrom, stationFrom, lineTo, stationTo) {
    if (stationFrom === "Union Square" && lineFrom !== lineTo) {
      return [ this.ssingleLineTrip(lineTo, "Union Square", stationTo) ];
    } else if (stationTo === "Union Square" && lineFrom !== lineTo) {
      return [ this.singleLineTrip(lineFrom, stationFrom, "Union Square") ];
    } else if (lineFrom === lineTo) {
      return [ this.singleLineTrip(lineFrom, stationFrom, stationTo) ];
    } else {
      return this.multiLineTrip(lineFrom, stationFrom, lineTo, stationTo);
    }
  },

  singleLineTrip: function(line, stationFrom, stationTo) {
    const indexFrom = this.lines[line].indexOf(stationFrom);
    const indexTo = this.lines[line].indexOf(stationTo);

    if (stationFrom === stationTo) {
      return "Must be different stations.";
    } else if (indexFrom < indexTo) {
      return {
        line,
        stops: this.lines[line].slice(indexFrom, indexTo + 1)
      };
    } else {
      return {
        line,
        stops: this.lines[line].slice(indexTo, indexFrom + 1).reverse()
      };
    }
  },

  multiLineTrip: function (lineFrom, stationFrom, lineTo, stationTo) {
    return [
      this.singleLineTrip(lineFrom, stationFrom, "Union Square"),
      this.singleLineTrip(lineTo, "Union Square", stationTo)
    ];
  }
};

const logTrip = function(lineFrom, stationFrom, lineTo, stationTo) {
  const trip = subway.planTrip(lineFrom, stationFrom, lineTo, stationTo);
  let totalStops = 0;

  let log = `You must travel through the following stops on the ${trip[0].line} line: `;
  log += trip[0].stops.join(', ') + '.';
  totalStops += trip[0].stops.length;

  if (trip[1]) {
    log += `\nChange at Union Square to the ${trip[1].line} line.`
    log += `\nYour journey continues through the following stops: `;
    log += trip[1].stops.slice(1).join(', ') + '.';
    totalStops += trip[1].stops.slice(1).length;
  }

  log += `\n${totalStops} stops in total.`

  return log;
};

console.log( logTrip('N', '34th', '6', '33rd') );
