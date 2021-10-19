console.log("Let's go down to the beach");

// # Beach Planner
//
// Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of day you can go to the beach.
//
// ## example:
//
// with the following forecast:
// ```javascript
// monday: the temperature is 20 and there is 12mm of rain
// tuesday: the temperature is 25 and there is 6mm of rain
// wednesday: the temperature is 27 and there is 24mm of rain
// thursday: the temperature is 32 and there is 65mm of rain
// friday: the temperature is 18 and there is 2mm of rain
// saturday: the temperature is 26 and there is 0mm of rain
// sunday: the temperature is 27 and there is 14mm of rain
// ```
//
// If i'm ok to go to the beach with a temperature at least 24 degrees and no more than 8mm of rain, the output of the program
// should be : Tuesday and Saturday
//
// ### hint:
//
// -find a way to store you data (array, object, ...)


// const forecast = {
//   Monday: [20, 12],
//   Tuesday: [25, 6],
//   Wednesday: [27, 24],
//   Thursday: [32, 65],
//   Friday: [18, 2],
//   Saturday: [26, 0],
//   Sunday: [27, 14]
// }
//
//   const beachPlanner = function(maxTemp, minRain, forecast) {
//     let beachDay = [];
//
//     let daysArray = Object.keys(forecast);
//     console.log(daysArray);  // ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
//
//     for (let i = 0; i < daysArray.length; i++ ){
//       let day = daysArray[i];
//       console.log(day) //print out each day
//
//       let temp = forecast[day][0]// access the first item in the value array of the forecast Object
//       let rain = forecast[day][1] // access the second item in the value array of the forecast Object
//
            //check the conditions
//       if (temp >= maxTemp && rain <= minRain) {
//         beachDay.push(day)
//         console.log(beachDay)
//       }
//     }
//     return beachDay.join(', ')
//   }
//
//   console.log(beachPlanner(24, 8, forecast))


const forecast = [
  {day: 'Monday',
  temp: 20,
  rain: 12
},

  {day: 'Tuesday',
  temp: 25,
  rain: 6
},

  {day: 'Wednesday',
  temp: 27,
  rain: 24
},

  {day: 'Thursday',
  temp: 32,
  rain: 65
},
  {day: 'Friday',
  temp: 16,
  rain: 2
},
  {day: 'Saturday',
  temp: 26,
  rain: 0
},
  {day: 'Sunday',
  temp: 27,
  rain: 14
},
]

const beachPlanner = function(maxTemp, minRain, forecast){
  let beachDays = [];
// loop through the forecast array: if the temp is > than preferTemp and the rain < preferRain
  forecast.forEach((daysObj) => {
    if (daysObj.temp >= maxTemp && daysObj.rain <= minRain){
      beachDays.push(daysObj.day)
      console.log(beachDays)
    }
  })
  if (beachDays.length === 0){ // if the array is empty then return the sentence
    return `You shouldn't go to the beach this week`
  } else {
    return `You can go to the beach on these days: ${beachDays.join(', ')}`
  }
}

console.log(beachPlanner(24, 8, forecast))
