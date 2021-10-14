// 
// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////SUMMER PROGRAM !!! /////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////
// const summer = function(a,b){
//   if ( a < 10 && b > 50 ){
//     console.log(`The temperature is ${a} degrees and there is ${b}mm of rain you can go on : Monday, Tuesday, Friday`);
//   }else if (a < 30 && b < 60) {
//     console.log(`The temperature is ${a} degrees and there is ${b}mm of rain, This week is not good for the beach stay home!!!`);
//   }else if( a > 27 && b < 50){
//     console.log(`The temperature is ${a} degrees and there is ${b}mm of rain you can go on: Wednesday, Saturday, Sunday`);
//   }else if (a => 10 && b > 60 ){
//     console.log(`Today will be rainy day with ${b}mm of rain, dont go to beach stay home!!!`);
//   }else{
//     console.log(`Please enter value for Temperature and Rain bigger then 10 degrees`);
//   }
// }
// summer(20,25);
// summer(10,70);
//

////////////////////////////////////////////////////////////////////////////
/////////////////////////ROVENA SOLUTION///////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// this is object!!!!
const forecast = {
  Monday: [20, 12],
  Thuesday: [25, 6],
  Wednesday: [27 ,24],
  Thursday: [32, 64],
  Friday: [18, 2],
  Saturday: [26, 0],
  Sunday: [27, 14]
}

const beachPlanner = function (maxTemp, minRain, forecast){
  let  beachDay=[];
  let daysArray = Object.keys(forecast);
  console.log(daysArray);

  for(let i = 0; i < daysArray.length; i++){
    let day = daysArray[i];
        console.log(day); //print out each day

        let temp = forecast[day][0]//access the first item in the value array of the forecast
        // object//
        let rain = forecast[day][1]//access the seocund item in the value array

        if(temp >= maxTemp && rain <= minRain){
          beachDay.push(day);
          console.log(beachDay);
        }

     }  return beachDay.join(`, `);

}


console.log(beachPlanner(24,8, forecast));

//
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////ROVENA SECOUND SOLUTION/////////////////////
// ////////////////////////////////////////////////////////////////////////////////
//
// const forecast = [
//   {day: `Monday`
//   temp: 20,
//   rain: 12
// },
//   {day: `Tuesday`
//   temp: 20,
//   rain: 12
// },
//   {day: `Wednesday`
//   temp: 20,
//   rain: 12
// },
//   {day: `Thursday`
//   temp: 20,
//   rain: 12
// },
//   {day: `Friday`
//   temp: 16,
//   rain: 2
// },
//   {day: `Saturday`
//   temp: 26,
//   rain: 0
// },
//   {day: `Sunday`
//   temp: 27,
//   rain: 14
// },
//   {day: `Monday`
//   temp: 20,
//   rain: 12
// },
// ]
//
// const beachPlanner = function(maxTemp, minRain, forecast){
//   let beachDays = [];
//   forecast.forEach((daysObj) => {
//     console.log(daysObj);
//     if (daysObj.temp >= maxTemp && daysObj.rain <= minRain){
//       beachDay.push(daysObj.day);
//       console.log(beachDay);
//     }
//   });
//   if (beachDay.length ==== 0){
//     return `You shouldn't go to the beach this week`;
//   }else{
//     return `You can go to the beach on these days : ${beachDay.join(`, `)}`
//   }
// }
