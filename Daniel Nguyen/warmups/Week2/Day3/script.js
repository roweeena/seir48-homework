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

console.log( forecast, beachDays(forecast) );
