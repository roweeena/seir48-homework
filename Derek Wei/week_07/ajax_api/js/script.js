
const API_key = 'b9c03eddfbe6a9f4b2e9ea16827ed6e8'

const fetchWeather = function(event) {

  event.preventDefault();
  const cityName = $('#city').val();

$.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ API_key }`

).done(function (data) {
  const name = data.name;
  const main = data.main;
  const weather = data.weather[0];
  $('#name').html(name)
  $('#temperature').html(`${ Math.round(main.temp - 273.15) }°C`);
  $('#description').html(`${ weather.main } - ${ weather.description }`);

}).fail(function() {
  alert("No weather at this location")
});

}

$('form').on('submit', fetchWeather);
