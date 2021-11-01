const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  
   xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // NOTHING TO DO YET

    const data = JSON.parse(xhr.responseText); // Convert the string into a JS object
    const img = document.createElement('img'); // detached DOM node
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('picture').appendChild(img);
  };

  let bookTitle = document.getElementById('title').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
  xhr.send(); // asynchronous
};

document.getElementById('fetch').addEventListener('click', fetchBook);
