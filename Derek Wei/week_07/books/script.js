// Redo Google Books Search as a single page app that uses AJAX to display (at a minimum) the book cover thumbnail --stick to vanilla JS for some practice (no jQuery)


const fetchCover = function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest()

  // include callback
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4 || bookTitle === "") return;

    const data = JSON.parse(xhr.responseText);
    const image = document.createElement('img');
    image.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    document.body.replaceChild(image, document.body.lastChild);

  }

  let bookTitle = document.getElementById("book_title").value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`);
  xhr.send(); // async

}

document.querySelector("form").addEventListener('submit', fetchCover);
