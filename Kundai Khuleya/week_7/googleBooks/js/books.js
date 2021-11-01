const fetchCover = function (){
  event.preventDefault();
  const title = document.getElementById('title').value;
  console.log('fetching!', title);

 //get the title
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
  //  console.log('we can now guarantee that the readyState is 4', xhr.readyState);
    const data =JSON.parse(xhr.responseText);
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail
    document.getElementById('cover').setAttribute('src', cover);
    console.log(data); //not a string
  };
};

document.querySelector('form').addEventListener('submit', fetchCover);
