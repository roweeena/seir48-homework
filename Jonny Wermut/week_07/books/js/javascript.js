
const fetchFact = function () {
	console.log('Function running');
  const xhr = new XMLHttpRequest(); // ready state 0
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Nothing to do yet so exit the function.
    }
    const data = JSON.parse( xhr.responseText );
    const img = document.createElement('img');
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('picture').appendChild(img);
  };
  let book = document.getElementById('name').value
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
  xhr.send(); 
};

document.getElementById('fetch').addEventListener('click', fetchFact);