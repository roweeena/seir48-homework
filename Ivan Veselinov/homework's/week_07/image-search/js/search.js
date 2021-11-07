// console.log(`hey`, $.fn.jquery, _.VERSION); // test js,jquery,underscore

const searchFlickr = function(keywords){   //GLOBAL FUNCTION
  console.log(`Searching Flickr for`, keywords);

  // You are not expected to understand this !!
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like POST
    page: _.random(0, 500),
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json'
  }).done(showImages).done(function (info){
    console.log(info);
  });
};


const showImages = function (results){
_(results.photos.photo).each(function (photo){
const thumbnailURL = generateURL (photo);
// console.log(thumbnailURL);
const $img = $(`<img>`, {src: thumbnailURL});
$img.appendTo(`#images`);


})
}

const generateURL = function (p){
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' //change 'q' to something else for different sizes
  ].join('');
};

$(document).ready(function(){

$('#search').on('submit', function (event){
  event.preventDefault(); // disable the form from being submited to the server.
  // console.log(`submit`); // does submit work !

  //get the search terms
  const searchTerm = $('#query').val(); // get value from search
  console.log(searchTerm); // test on console!

  //search flicker for those things
  searchFlickr( searchTerm );
 });

// //INFINITE SCROLLING!!!!!!!!!!!

  $(window).on('scroll', function() {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    console.log(scrollBottom);

    if (scrollBottom < 8000) { // TODO: adjust the contitional to suit your taste
      const searchTerm = $('#query').val();
      searchFlickr( searchTerm );
    }
  });

});
