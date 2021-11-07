const fetchBeer = function (event) {
  event.preventDefault();
  const name = $('#title').val();

  $.ajax(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).done(function (data) {
    const cover = data.drinks[0].strDrinkThumb;
    $('#cover').attr('src', cover);
  })
};
$('form').on('submit', fetchBeer);
