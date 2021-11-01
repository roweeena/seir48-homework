console.log('Monday Monday Monday');

const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  const bookData = document.getElementById('search').value

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
  
    const data = JSON.parse(xhr.responseText);

  
    const img = document.createElement('img');
    const title = document.createElement('h1');
    const author = document.createElement('h2');
    const description = document.createElement('p');
  
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(img);
    
    title.innerText = data.items[0].volumeInfo.title;
    document.body.appendChild(title);
    
    author.innerText = data.items[0].volumeInfo.authors;
    document.body.appendChild(author);
    
    description.innerText = data.items[0].volumeInfo.description;
    document.body.appendChild(description);
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ bookData }`);
  xhr.send();
  
};
  
  document.getElementById('get-book').addEventListener('click', fetchBook);