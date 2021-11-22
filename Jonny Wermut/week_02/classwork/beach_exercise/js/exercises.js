// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of days you can go to the beach.

// example:
// with the following forecast:

// Monday: the temperature is 20 and there is 12mm of rain
// Tuesday: the temperature is 25 and there is 6mm of rain
// Wednesday: the temperature is 27 and there is 24mm of rain
// Thursday: the temperature is 32 and there is 65mm of rain
// Friday: the temperature is 18 and there is 2mm of rain
// Saturday: the temperature is 26 and there is 0mm of rain
// Sunday: the temperature is 27 and there is 14mm of rain

// If it's ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, 
// the output of the program should be: Tuesday and Saturday

// hint:
// -find a way to store you data (array, object, ...)
const weatherForecast =[
  {day: 'Monday', forecast: 'the temperature is 20 and there is 12mm of rain'},
  {day: 'Tuesday', forecast: 'the temperature is 25 and there is 6mm of rain'},
  {day: 'Wednesday', forecast: 'the temperature is 27 and there is 24mm of rain'},
  {day: 'Thursday', forecast: 'the temperature is 32 and there is 65mm of rain'},
  {day: 'Friday', forecast: 'the temperature is 18 and there is 2mm of rain'},
  {day: 'Saturday', forecast: 'the temperature is 26 and there is 0mm of rain'},
  {day: 'Sunday', forecast: 'the temperature is 27 and there is 14mm of rain'}
  ]


// Go through each object in the array
// Check the temperature on that day is >= 24
  // Split the forecast, put it into an array and access the 3rd index
// Check the amount of rain
// Return days it's acceptable to go to the beach
const getDailyTemp = (dailyForecast) => {
return dailyForecast.forecast.split(' ')[3];
}

console.log(getDailyTemp({day: 'Monday', forecast: 'the temperature is 20 and there is 12mm of rain'}));

const getDailyRain = (dailyForecast) => {
return dailyForecast.forecast.split(' ')[7].slice(0, 1);
}

console.log(getDailyRain({day: 'Monday', forecast: 'the temperature is 20 and there is 12mm of rain'}));

// const getDailyRain = (dailyForecast) => {
//   let forecastArray = dailyForecast.forecast.split(' ');
//   let rain = forecastArray[7].slice(-2);
// }

// const beachDay = (weeklyForecast) => {
// let acceptableDays = [];
// for (let i = 0; i < weeklyForecast.length; i++) { // Go through each object in the array
//     let today = getDailyForecast(weeklyForecast[i]);
//     if (getDailyTemp(today) >= 24 && getDailyRain(today) <= 8) {
//         acceptableDays.push(today.day);
//         console.log(acceptableDays);
//     }
//   }
//   console.log(acceptableDays.join(' and '))
// }

// beachDay(weatherForecast);