const fetchGoogleBooksAPI = function (event) {
  event.preventDefault(); // stay on this page; don't try to send the form data back to the server.

  const xhr = new XMLHttpRequest();

  const query = document.getElementById('query').value || 'Ulysses';
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ query }`
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText).items[0].volumeInfo;

    document.getElementById('title').innerHTML = data.title;
    document.getElementById('authors').innerHTML = data.authors.join(', ');
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('cover').src = data.imageLinks.thumbnail;
    document.getElementById('cover').alt = `'${ data.title }' book cover'`;
  };
}

document.querySelector('form').addEventListener('submit', fetchGoogleBooksAPI);
