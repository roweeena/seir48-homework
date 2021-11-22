let books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

for (let i=0; i<books.length; i++) {
  let p = document.createElement('p');
  p.innerText = `${books[i].title} by ${books[i].author}`;
  document.body.appendChild(p);
}