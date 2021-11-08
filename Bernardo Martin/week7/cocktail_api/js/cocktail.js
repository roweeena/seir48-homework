console.log('JS linked');
const fetchCocktail = function (event) {
  event.preventDefault();
  $('ul').html(' ');
  $('p').html (' ');
  $('#ingredients').prepend('<p>Ingredients:</p>')
  const $drink = $('#fetch').val();
  $.ajax(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${$drink}`).done(function (data){
    console.log(data);
    const instructions = data.drinks[0].strInstructions;
    $('#instructions').text(`${instructions}`)
    const image = data.drinks[0].strDrinkThumb;
    $('#image').attr('src', image);
    const ingredients = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9]
    for (let i=0; i<ingredients.length; i++) {
      if (ingredients[i] !== null){
      $('ul').append(`<li>${ingredients[i]}</li>`)
      };
    };
  });
};

$('form').on('submit', fetchCocktail)
