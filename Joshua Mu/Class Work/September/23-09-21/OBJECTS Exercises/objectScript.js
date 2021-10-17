const recipe = {
    title: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log(recipe.title);
console.log(recipe.serves);
console.log(recipe.ingredients);

const book1 = {
    title: "Rangers Apprentice",
    author: "John Flanagan",
    read: true
};

const book2 = {
    title: "Percy Jackson",
    author: "Rick Riordan",
    read: false
};

const library = [book1, book2];

console.table(library);

function CheckIfRead(books)
{
    for (let i = 0; i < books.length; i++)
    {
        if (books[i].read)
        {
            console.log(`The book ${books[i].title} by ${books[i].author} has been read`);
        }
        else{
            console.log(`The book ${books[i].title} by ${books[i].author} has not been read`);
        }
    }
}

CheckIfRead(library);

const movie1 = {
    title: "Avengers Endgame",
    author: "Marvel",
    hours: 3,
    minutes: 45,
    stars: ["RDJ", "Chris Evans"]
};

const movie2 = {
    title: "Avengers Infinity War",
    author: "Marvel",
    hours: 2,
    minutes: 12,
    stars: ["RDJ", "Chris Evans"]
};

const theatre = [movie1, movie2];

console.table(theatre);

function MovieInfo(movies)
{
    for (let i = 0; i < movies.length; i++)
    {
        console.log(`${movies[i].title} lasts for ${movies[i].hours} hours and ${movies[i].minutes} minutes. It stars ${movies[i].stars.join(", ")}`);
    }
}

MovieInfo(theatre);



