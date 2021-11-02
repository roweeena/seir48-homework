
const fetchBooks = function(event){
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse(xhr.responseText);

    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"];
    p.innerHTML = "Description: " + data.items[0]["volumeInfo"]["description"];
    document.body.appendChild(img);
    document.body.appendChild(p);
  };

  const input = document.getElementById("input").value;

  xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${ input }`);
  xhr.send();

};

document.getElementById("container").addEventListener("submit", fetchBooks);


const fetchBooks = function(event){
  event.preventDefault();
  const input = $("#input").val();

  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ input }`).done(function(data){
    $("#img").attr("src", data.items[0].volumeInfo.imageLinks.thumbnail).appendTo("body");
  });
};

$("#container").on("submit", fetchBooks);
