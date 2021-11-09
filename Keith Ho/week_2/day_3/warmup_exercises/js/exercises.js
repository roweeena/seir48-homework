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

const forecast = [
  {
    day: "Monday",
    temperature: 20,
    rainfall: 12
  },
  {
    day: "Tuesday",
    temperature: 25,
    rainfall: 6
  },
  {
    day: "Wednesday",
    temperature: 27,
    rainfall: 24
  },
  {
    day: "Thursday",
    temperature: 32,
    rainfall: 65
  },
  {
    day: "Friday",
    temperature: 18,
    rainfall: 2
  },
  {
    day: "Saturday",
    temperature: 26,
    rainfall: 0
  },
  {
    day: "Sunday",
    temperature: 27,
    rainfall: 14
  }
];

const beachPlanner = function(t, r) {
  let day = [];

  forecast.forEach( dayObj => {
    if ( dayObj.temperature >= t && dayObj.rainfall <= r ) {
      day.push(dayObj.day);
    }
  });

  // for ( let i = 0; i < forecast.length; i++) {
  //   if ( forecast[i].temperature >= t && forecast[i].rainfall <= r ) {
  //     day.push(forecast[i].day);
  //   }
  // }

  let days = [];

  if ( day.length === 1 ) {
    return `You can go to beach on ${day}.`;
  } else {
    for ( let n = 0; n < day.length - 1; n++ ) {
      days.push(day[n]);
      return `You can go to beach on ${days} and ${day[day.length - 1]}.`;
    }
  }

};

console.log(beachPlanner(24, 8));
