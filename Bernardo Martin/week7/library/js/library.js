
const fetchCover = function() {
  const title = document.getElementById('bookSearch').value
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    const data = JSON.parse(xhr.responseText);
    const cover = document.createElement('img');
    cover.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    document.body.appendChild(cover);
  };

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  xhr.send();
};
document.getElementById('fetch').addEventListener('click', fetchCover);
