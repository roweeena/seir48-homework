var books = [
    {title: 'The Design of EveryDay Things',
     author: 'Don Norman',
     alreadyRead: false
    },
    {title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
    }];

    const ul = document.createElement("ul");

    for (let i = 0; i < books.length; i++)
    {
        let book = books[i];

        let li = document.createElement("li");
        li.innerHTML = `${book.title} by ${book.author}`;
        ul.appendChild(li);
    }

    document.body.appendChild(ul);