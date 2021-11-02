const fetchBook = function (event) {
  event.preventDefault(); // stay on this page, don't send form data back to server

  // get title from form:
  let bookTitle = document.getElementById("title").value;

  // create xhr object:
  const xhr = new XMLHttpRequest();
  // open URL:
  xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // wait till readyState is DONE

    const data = JSON.parse(xhr.responseText); // Convert the string into a JS object
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    // document.createElement("img"); // detached DOM node

    document.getElementById("cover").appendChild("src", cover);
  };

  xhr.send(); // asynchronous
};

// use submit to allow user to hit enter - get form element and 'submit' event listener
document.getElementById("form").addEventListener("submit", fetchBook);
