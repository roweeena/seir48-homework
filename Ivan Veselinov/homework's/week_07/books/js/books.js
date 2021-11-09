const googleBooks = function (){

event.preventDefault(); // stay on this page: don't try to send the form or data back on server

  const xhr = new XMLHttpRequest();  // Add new book
  xhr.onreadystatechange = function (){
    if (xhr.readyState !==4) return;  // If we are connected

    const book = JSON.parse(xhr.responseText); // Convert string into JS object

    const p = document.createElement('p');   // Create p element in HTML
    const i = document.createElement('img');
    p.innerHTML = book["items"][0].volumeInfo.title;  // GET Books title
    i.src = book["items"][0].volumeInfo.imageLinks.thumbnail; // Get Books thumbnails
    document.body.appendChild(p); // Show Title at Index
    document.body.appendChild(i); // Show Image at Index
  }
  let searchBooks = document.getElementById('search');  //Search button!

  xhr.open(`GET`,`https://www.googleapis.com/books/v1/volumes?q=title:${searchBooks.value}`); // Loop into Google API
  xhr.send(); // SAVE !!

}
document.querySelector('form').addEventListener('submit', googleBooks); // SUBMIT BUTTON its not  going to another link stays on same page ( works with event.preventDefault(); together)

// document.getElementById('button').addEventListener('click', googleBooks); // SUBMIT BUTTON

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// CONSOLE VERSION ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
