console.log('have a look!');

const fetchBook = function () {
  const xhr = new XMLHttpRequest();
const bookInfo = document.getElementById('search').value
  // callback!
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;

  const data = JSON.parse(xhr.responseText);
  // console.log(data.items[0]);

  const p = document.createElement('img');

  const title = document.createElement('h1');

  const author = document.createElement('h2');

  const description = document.createElement('h3');

  // const book = document.createElement []
p.src = data.items[0].volumeInfo.imageLinks.thumbnail;
document.body.appendChild(p);

title.innerText = data.items[0].volumeInfo.title;
document.body.appendChild(title);

author.innerText = data.items[0].volumeInfo.authors;
document.body.appendChild(author);

description.innerText = data.items[0].volumeInfo.description;
document.body.appendChild(description);
};
xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookInfo }`);
xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchBook);

// fetchBook();

// Use paramsa
