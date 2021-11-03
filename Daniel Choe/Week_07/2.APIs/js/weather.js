
//This is the function that will run in our callback function.
function weatherSearch(event) {
  event.preventDefault(); //stay on the page, otherwise you won't see your result.

  //1. USING THE DOM TO GET THE RELEVANT HTML ELEMENTS.
  // const search = document.getElementById('search').value
  const city = $('#search').val();
  // Telling the DOM to get the 'search' ID (value) from the html. This is an input.
  //Originally there is nothing in the innerHTML.
  // document.getElementById('results').innherHTML = ""
  // $('results').innerHTML = ""

  const cityLow = city.toLowerCase();
  const remChars = cityLow.substring(1)
  const firstChar = city.charAt(0);
  const firstCharUp = firstChar.toUpperCase();
  const finalCity = firstCharUp + remChars;

  //2. USING AJAX TO GET GET INFO FROM THE API.
  //APPENDING TO CLASS RESULTS (BY NAVIGATING THE OBJECT, WHICH IT SEES AS JSON.)
  //Using jQuery here.
  // $.ajax({
  //
  //   url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
  //   // dataType: "JSON", //intelligent find, can find on its own.
  //
  //   success: function(data) { //this is a success function. Data is just a placeholder.
  //     // for (i = 0; i < data.items.length; i++){ //for loop if we obtain more than one result.
  //       results.innerHTML += "<h2>Result " + [0] + "</h2>"
  //       results.innerHTML += "<img class='image' src=" + data.items[0].volumeInfo.imageLinks.thumbnail +  ">"
  //       results.innerHTML += "<h2>Title: " + data.items[0].volumeInfo.title + "</h2>"
  //       results.innerHTML += "<h2 class='bottom'> By: " + data.items[0].volumeInfo.authors + "</h2>"
  //     // }
  //   },
  //
  //   // type: 'GET' //only required if your using jQuery prior to 1.9.0, this is also the default.
  // });

// AJAX returns a deferred object, the .done method only runs once it has compelted i.e. like xhr reaching ready state 4
  // const settings = {
  // 	"async": true,
  // 	"crossDomain": true,
  // 	"url": `https://community-open-weather-map.p.rapidapi.com/weather?q=${ city }&lat=0&lon=0&callback=test&id=2172797&lang=null&units=metric&mode=xml`,
  // 	"method": "GET",
  // 	"headers": {
  // 		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
  // 		"x-rapidapi-key": "07ff6f15e2msh6c5ceba69640d44p1d8732jsn31c4ae083941"
  // 	}
  // };
  //
  // $.ajax(settings).done(function (data) {
  // 	console.log(data);
  // });


// OPEN WEATHER API (COMING SOON)
//   $.ajax(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=b8340663a14c301134c331c4ffd14c35`).done(function (data) {
//     console.log(data);
//     // $(`<p>${info.items[0].volumeInfo.title}</p>`).appendTo('body');
//     // $(`<img class='image' src='${info.items[0].volumeInfo.imageLinks.thumbnail}'</p>`).appendTo('body');
//   });

  const settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
  		"x-rapidapi-key": "07ff6f15e2msh6c5ceba69640d44p1d8732jsn31c4ae083941"
  	}
  };

  $.ajax(settings).done(function(data) {
    // $(`<p> The current temperature in ${city} is ${data.current.temp_c} degrees Celsius.</p>`).appendTo('body');
    // $('#button').after(`<p>The current temperature in ${city} is ${data.current.temp_c}° Celsius</p>`);
    $('#results').html(`<h4>The current temperature in ${finalCity} is ${data.current.temp_c}° Celsius.</h4>`);

    currentCondition = data.current.condition.text
    currentConditionLower = currentCondition.toLowerCase();

    $('#current').html(`<h4>At the moment it is ${currentConditionLower}.</h4>`);

    $('#map').html(`<iframe class='map' src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&zoomwheel=false&access_token=pk.eyJ1IjoiZGNjNyIsImEiOiJja3ZoeTN4d3ljZnVsMm9uem1kYm5jc3l4In0.Sfv7fkZAkVjZfPm0qoDoKg#10/${data.location.lat}/${data.location.lon}/0/0'>`)

    console.log(data.current.condition.text);
  });

};

//ADDING THE EVENT LISTENING FOR THE CLICK OF THE BUTTON. INVOKES bookSearch FUNCTION WHEN CLICKED.
// document.getElementById('button').addEventListener('click', bookSearch)
$('form').on('submit', weatherSearch);
$('button').on('click', weatherSearch);


// Testing stuff here.

 // data = test{"coord":{"lon":151.2073,"lat":-33.8679},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":23.45,"feelslike":23.39,"tempmin":20.77,"temp_max":26.61,"pressure":1024,"humidity":59},"visibility":10000,"wind":{"speed":0.89,"deg":282,"gust":4.47},"clouds":{"all":75},"dt":1635825404,"sys":{"type":2,"id":2018875,"country":"AU","sunrise":1635792839,"sunset":1635841403},"timezone":39600,"id":2147714,"name":"Sydney","cod":200})

//console.log(data);
