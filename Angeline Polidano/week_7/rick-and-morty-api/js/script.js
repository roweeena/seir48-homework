const fetchCharacter = function (event) {
  event.preventDefault(); // stay on this page
  const character = $('#name').val();

  $.ajax(`https://rickandmortyapi.com/api/character/?name=${ character }`).done(function
     (data) {
    const name = data.results[0].name;
    $('#character').html(name);
       console.log(name);
      const image = data.results[0].image;
      $('#image').attr('src', image);
      // console.log(image);
      const species = data.results[0].species;
      $('#species').html(species);
      // console.log(species);
      const status = data.results[0].status;
      $('#status').html(status);
      const gender = data.results[0].gender;
      $('#gender').html(gender);
      // console.log(gender);
  });
};

$('form').on('submit', fetchCharacter);
