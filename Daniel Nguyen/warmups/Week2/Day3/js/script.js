// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.
//
// example:
// with the following forecast:
//
// Monday: the temperature is 20 and there is 12mm of rain
// Tuesday: the temperature is 25 and there is 6mm of rain
// Wednesday: the temperature is 27 and there is 24mm of rain
// Thursday: the temperature is 32 and there is 65mm of rain
// Friday: the temperature is 18 and there is 2mm of rain
// Saturday: the temperature is 26 and there is 0mm of rain
// Sunday: the temperature is 27 and there is 14mm of rain
//
// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program should be: Tuesday and Saturday
//
// hint:
// -find a way to store you data (array, object, ...)

const forecast = {
  "Monday": { temperature: 20, rain: 12 },
  "Tuesday": { temperature: 25, rain: 6 },
  "Wednesday": { temperature: 27, rain: 24 },
  "Thursday": { temperature: 32, rain: 65 },
  "Friday": { temperature: 18, rain: 2 },
  "Saturday": { temperature: 26, rain: 0 },
  "Sunday": { temperature: 27, rain: 14 },
};

const beachDays = function (forecast) {
  return Object.keys(forecast).filter(day =>
    forecast[day].temperature >= 24 && forecast[day].rain <= 8
  ).join(', ');
}

// A custom function instead of Array.prototype.join()
// that joins and adds "and" before the last element.
const joinWithAnd = function (arr) {
  return arr.slice(0, -1).join(', ') + ' and ' + arr.slice(-1);
}

console.log( joinWithAnd(beachDays(forecast).split(', ')) );
