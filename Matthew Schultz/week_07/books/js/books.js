const fetchCover = function(event) {

  event.preventDefault(); //Keeps us on the same page - doesn't send to server

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    const data = JSON.parse(xhr.responseText);
    const p = document.createElement('p');
    p.innerHTML = 'by ' + data.items[0].volumeInfo.authors;
    const image = document.createElement('img');
    image.src = data.items[0].volumeInfo.imageLinks.thumbnail
    document.body.appendChild(p);
    document.body.appendChild(image);
  }


  const book = document.getElementById('book').value
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
  xhr.send();

};

document.querySelector('form').addEventListener('submit', fetchCover);
