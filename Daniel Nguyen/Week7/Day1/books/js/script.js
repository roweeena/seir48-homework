const fetchGoogleBooksAPI = function (event) {
  event.preventDefault(); // stay on this page; don't try to send the form data back to the server.

  const query = $('#query')[0].value;
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ query }`

  $.ajax(url).done(function (result) {
    const data = result.items[0].volumeInfo;
    $('#title').text(data.title);
    $('#authors').text(data.authors.join(', '));
    $('#description').text(data.description);
    $('#cover').attr('src', data.imageLinks.thumbnail);
    $('#cover').attr('alt', `'${ data.title }' book cover'`);
  });
}

$('form').on('submit', fetchGoogleBooksAPI);
