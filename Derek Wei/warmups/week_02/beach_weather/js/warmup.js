// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.
//
// example:
// with the following forecast:
//
// Monday: the temperature is 20 and there is 12mm of rain
// Tuesday: the temperature is 25 and there is 6mm of rain
// Wednesday: the temperature is 27 and there is 24mm of rain
// Thursday: the temperature is 32 and there is 65mm of raind
// Friday: the temperature is 18 and there is 2mm of rain
// Saturday: the temperature is 26 and there is 0mm of rain
// Sunday: the temperature is 27 and there is 14mm of rain
//
// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program should be: Tuesday and Saturday
//
// hint:
// -find a way to store you data (array, object, ...)

const weekForecast = []

const createDay = function(day) {

  return {
    day: `${day}`,
    temperature: Math.floor(15 + 20 * Math.random()),
    rainfall: Math.floor(100 * Math.random()),
  }
}

weekForecast.push(createDay("Monday"));
weekForecast.push(createDay("Tuesday"));
weekForecast.push(createDay("Wednesday"));
weekForecast.push(createDay("Thursday"));
weekForecast.push(createDay("Friday"));
weekForecast.push(createDay("Saturday"));
weekForecast.push(createDay("Sunday"));


const beachWeather = function(forecast, minTemp, maxRain) {

  let beachDays = [];

  for (let i = 0; i < forecast.length; i++) {
    console.log(`${forecast[i].day}: the temperature is ${forecast[i].temperature} and there is ${forecast[i].rainfall}mm of rain`);
    if (forecast[i].temperature > minTemp && forecast[i].rainfall < maxRain) {
      beachDays.push(forecast[i].day);
    }
  }
  
  if (beachDays.length === 0) {
    return console.log("No beach days this week.")
  } else {
    return console.log(`Beach days this week: ${beachDays.join(", ")}`);
  }

}

beachWeather(weekForecast, 26, 50); // min temp is 26 degrees, max rain is 50mm
beachWeather(weekForecast, 16, 80);
