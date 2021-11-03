console.log('test');

const phonesType = function (){

  event.preventDefault(); // stay on this page

  const search = $('#search').val();
  console.log('You input -> search: ', search);

  $.ajax(`http://api-mobilespecs.azharimm.site/v2/search?query= ${search}`).done(function(phones) {
    console.log(phones);

    const specs = phones.data.phones[0].phone_name
    console.log('Phone name: ', specs);
    $('#phone_name').html('Phone name: ' + search);
    const img = phones.data.phones[0].image;
    console.log('Image: ', img);
    $('#cover').attr('src', img);

  });

}

$('form').on('submit',phonesType);
