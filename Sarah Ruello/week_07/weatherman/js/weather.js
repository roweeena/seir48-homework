const fetchCover = function (event) {
  event.preventDefault();
  const city = $("#city").val();

  // .ajax returns the done() object for you - checks readyState.
  // weather query with metric unit parameter to return C:
  $.ajax(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71280da2eb4b3e5ae6780f592f83da58&units=metric`
  ).done(function (data) {
    const temp = data.main.temp;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;

    // weather icon:
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    // update picture icon:
    $("#icon").attr("src", imageURL);

    // change <p> inner text:
    $("#city-info").text(
      `Weather in ${city}: ${description}, with a temperature of ${temp}°C.`
    );
  });
};

$("form").on("submit", fetchCover);
