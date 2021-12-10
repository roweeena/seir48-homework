const fetchHero = function (event) {
  event.preventDefault();

  const search = $('#search').val();
  const url = `https://www.superheroapi.com/api.php/407912813631521/search/${search}`;

  $.ajax(url).done(function(info) {
    console.log(info);
    const results = info.results;

    const name = info.results[0].name;
    $('#name').html(`Name: ${name}`);

    $('#appearance').html(`Appearance:`);
    const height = info.results[0].appearance.height[1];
    $('#appearance-list').html('');
    $(`<li id='height'>`).text(`Height: ${height}`).appendTo('#appearance-list');

    const weight = info.results[0].appearance.weight[1];
    $('#weight').html(`Weight: ${weight}`);
    $(`<li id='weight'>`).text(`Weight: ${weight}`).appendTo('#appearance-list');

    $('#biography').html(`Biography:`);
    const biography = info.results[0].biography;
    $('#bio-list').html('');
    for (const bio in biography) {
      $(`<li id='${bio}'>`).text(`${bio.charAt(0).toUpperCase() + bio.slice(1)}: ${biography[bio]}`).appendTo('#bio-list');
    };

    $('#powerstats').html(`Powerstats:`);
    const powerstats = info.results[0].powerstats;
    $('#stat-list').html('');
    for (const stat in powerstats) {
      $(`<li id='${stat}'>`).text(`${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${powerstats[stat]}`).appendTo('#stat-list');
    };

    const workBase = info.results[0].work.base;
    $('#work-base').html(`Work base: ${workBase}`);

    const occupation = info.results[0].work.occupation;
    $('#occupation').html(`Occupation: ${occupation}`);

    const image = info.results[0].image.url;
    $('#image').attr('src', image);
  })
}

$(document).ready(function () {
  $('#hero-form').on('submit', fetchHero);
});
