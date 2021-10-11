//
// Write a program that, given a minimum temperature and a maximum
// rainfall forecast, output a list of days you can go to the beach.
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
// If it's ok to go to the beach with a temperature at least 24 degrees
// and no more than 8mm of rain, the output of the program should be: Tuesday and Saturday
//
// hint:
// -find a way to store you data (array, object, ...)

const forecast ={
  Monday: [20, 12],
  Tuesday: [25, 6],
  Wednesday: [27, 24],
  Thursday: [32, 65],
  Friday: [18, 2],
  Saturday: [26, 0],
  Sunday: [27, 14],
};

const beachPlanner = function (maxTemp, minRain, forecast) {
   let beachDay = [];
   let daysArray = object.keys(forecast);
   console.log(daysArray);

   for(let i=0; i<daysArray.length ;i++){
       let day = daysArray[i];

       .console.log(day);//print days

       let temp = forecast[day][0]//access the first item in the value array of the forecast object
       let rain = forecast[day][1]//access the secound item in the vale array of the forecast object


       if(temp >= maxTemp) && rain <=minRain){
         beachDay.push(day);
         console.log(beachDay);
       }
   }

   return beachDay.join(', ');
}

console.log(beachPlanner(24, 8 , forecast));
