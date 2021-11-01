const fetchGoogleBooksAPI = function () {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText).items[0].volumeInfo;

    document.getElementById('title').innerHTML = data.title;
    document.getElementById('authors').innerHTML = data.authors.join(', ');
    document.getElementById('description').innerHTML = data.description;
    document.getElementById('cover').src = data.imageLinks.thumbnail;
    document.getElementById('cover').alt = `'${ data.title }' book cover'`;
  };

  const query = document.getElementById('query').value || 'Ulysses';
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ query }`
  xhr.open('GET', url);
  xhr.send();
}

fetchGoogleBooksAPI();

document.getElementById('search').addEventListener('click', fetchGoogleBooksAPI);
