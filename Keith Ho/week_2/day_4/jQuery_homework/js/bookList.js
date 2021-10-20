
const books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

const $h1 = $("<h1></h1>");

$h1.html("My Book List");

$("body").append($h1);

// for ( let i = 0; i < books.length; i++ ) {
//   const p = document.createElement("p");
//   p.innerHTML = `${books[i].title} writen by ${books[i].author}.`;
//   document.body.appendChild(p);
// }
const $ul = $("<ul></ul>");

for ( let i = 0; i < books.length; i++ ) {
  const $li = $("<li></li>");
  $li.html(`${books[i].title} writen by ${books[i].author}.`);
  $ul.append($li);

  if (books[i].alreadyRead) {
    $li.css("color", "red");
  }
}

$("body").append($ul);
