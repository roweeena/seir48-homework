console.log("Working ?");
const fetchPhoto = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    const data = JSON.parse(xhr.responseText);
    const p = document.createElement("p");
    const image = document.createElement("img");
    image.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.body.appendChild(image);
  };
  let input = document.getElementById("bookSearch");
  xhr.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=title:" + input.value
  );
  xhr.send();
};
document.getElementById("fetch").addEventListener("click", fetchPhoto);
