const findPokemon = function(event) {
  event.preventDefault();
  let pokemon = $('#pokemon').val().toLowerCase();
  $.ajax(`http://pokeapi.co/api/v2/pokemon/${pokemon}`).done(function (info) {
    $('#name').text(pokemon.toUpperCase());
    $('#picture').attr("src", info.sprites.front_default);
    $('#type1').text(`Primary Type: ${info.types[0].type.name}`);
    if (info.types.length > 1) {
      $('#type2').text(`Secondary Type: ${info.types[1].type.name}`);
    } else {
      $('#type2').text('');
    }
    $('#number').text(`National Dex Number: ${info.id}`)
    // $('body').append(`<p> Type 2: ${info.types[1].type.name} </p>`)
  })
}

$('form').on('submit', findPokemon);
