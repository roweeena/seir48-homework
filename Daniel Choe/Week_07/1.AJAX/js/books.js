
//This is the function that will run in our callback function.
function bookSearch(event) {
  event.preventDefault(); //stay on the page, otherwise you won't see your result.

  //1. USING THE DOM TO GET THE RELEVANT HTML ELEMENTS.
  // const search = document.getElementById('search').value
  const search = $('#search').val();
  // Telling the DOM to get the 'search' ID (value) from the html. This is an input.
  //Originally there is nothing in the innerHTML.
  // document.getElementById('results').innherHTML = ""
  // $('results').innerHTML = ""



  //2. USING AJAX TO GET GET INFO FROM THE API.
  //APPENDING TO CLASS RESULTS (BY NAVIGATING THE OBJECT, WHICH IT SEES AS JSON.)
  //Using jQuery here.
  // $.ajax({
  //
  //   url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
  //   // dataType: "JSON", //intelligent find, can find on its own.
  //
  //   success: function(data) { //this is a success function. Data is just a placeholder.
  //     // for (i = 0; i < data.items.length; i++){ //for loop if we obtain more than one result.
  //       results.innerHTML += "<h2>Result " + [0] + "</h2>"
  //       results.innerHTML += "<img class='image' src=" + data.items[0].volumeInfo.imageLinks.thumbnail +  ">"
  //       results.innerHTML += "<h2>Title: " + data.items[0].volumeInfo.title + "</h2>"
  //       results.innerHTML += "<h2 class='bottom'> By: " + data.items[0].volumeInfo.authors + "</h2>"
  //     // }
  //   },
  //
  //   // type: 'GET' //only required if your using jQuery prior to 1.9.0, this is also the default.
  // });

// AJAX returns a deferred object, the .done method only runs once it has compelted i.e. like xhr reaching ready state 4
  $.ajax('https://www.googleapis.com/books/v1/volumes?q=' + search).done(function (info) {
    $(`<p>${info.items[0].volumeInfo.title}</p>`).appendTo('body');
    $(`<img class='image' src='${info.items[0].volumeInfo.imageLinks.thumbnail}'</p>`).appendTo('body');
  });
}




//ADDING THE EVENT LISTENING FOR THE CLICK OF THE BUTTON. INVOKES bookSearch FUNCTION WHEN CLICKED.
// document.getElementById('button').addEventListener('click', bookSearch)
$('form').on('submit', bookSearch);
