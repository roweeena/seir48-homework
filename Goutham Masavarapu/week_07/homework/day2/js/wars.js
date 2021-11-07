const searchGalaxy = function () {

  const discover = $('#search-bar').val(); //get the input

  $.ajax(`https://www.swapi.tech/api/people/?name=${discover}`).done(function (info) {
    console.log(info);
    $('<h2>').text(info.result[0].properties.name).appendTo('div');
    $('<p>').text(info.result[0].properties.birth_year).appendTo('div');
    $('<p>').text(info.result[0].properties.gender).appendTo('div');
    $('<p>').text(info.result[0].properties.height).appendTo('div');
    $('<p>').text(info.result[0].properties.mass).appendTo('div');
    $('<p>').text(info.result[0].properties.hair_color).appendTo('div');
  });
};

$(document).ready(function () {
  $('#fetch').on('click', searchGalaxy);
})
