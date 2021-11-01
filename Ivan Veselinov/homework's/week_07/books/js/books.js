const googleBooks = function (){



  const xhr = new XMLHttpRequest();  // Add new book
  xhr.onreadystatechange = function (){
    if (xhr.readyState !==4) return;  // If we are connected

    const book = JSON.parse(xhr.responseText); // Convert string into JS object

    const p = document.createElement('p');   // Create p element in HTML
    const i = document.createElement('img');
    p.innerHTML = book["items"][0].volumeInfo.title;  // GET Books title
    i.src = book["items"][0].volumeInfo.imageLinks.thumbnail; // Get Books thumbnails
    document.body.appendChild(p); // Show into HTML
    document.body.appendChild(i);
  }
  let searchBooks = document.getElementById('search');  //Search button!

  xhr.open(`GET`,`https://www.googleapis.com/books/v1/volumes?q=title:${searchBooks.value}`); // Loop into Google API
  xhr.send(); // SAVE !!

}

document.getElementById('button').addEventListener('click', googleBooks); // SUBMIT BUTTON


// const books = function(){
//
//
// const xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function(){
//   if (xhr.readyState !==4 )return;
//
//   const book = JSON.parse(xhr.responseText);
//
//   const p = document.createElement('p');
//   p.innerText = book["items"][0].volumeInfo.title;
//   console.log(p.innerText);
//   p.innerText = book["items"][0].volumeInfo.imageLinks.thumbnail;
//   console.log(p.innerText);
//
//
// };
//
// xhr.open(`GET`, `https://www.googleapis.com/books/v1/volumes?q=title:Jaws`);
// xhr.send();
//
// }
//
// console.log(books());
