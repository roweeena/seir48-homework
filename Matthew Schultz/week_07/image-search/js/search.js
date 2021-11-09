// console.log('Hi', $.fn.jquery, _.VERSION)

const searchFlickr = function (keywords) {
  console.log('Searching Flickr for', keywords);
  const flickrURL = 'http://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: pageNumber
  }).done(showImages);
};

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    //set max pages so that it won't attempt to load empty pages
    const maxPages = results.photos.pages
    // make sure that it stops trying to load new content when it's past the max pages
    if (pageNumber <= maxPages) {
      //generate photo URL
      const thumbnailURL = generateURL(photo);
      //create an image to display that URL
      const $img = $('<img>', {src: thumbnailURL});
      //append to images
      $img.appendTo('#images');
    }
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change q to something else for different sizes
  ].join('');
};

// Assign page number default
let pageNumber = 1;

// AAAAAANNNNND ACTION!
$(document).ready(function () {

  $('#search').on('submit', function (event) {

    $('#images').html('');

    pageNumber = 1

    event.preventDefault();

    const searchTerm = $('#query').val();

    searchFlickr(searchTerm);

  });

  //throttle is used to stop it from loading a million pages
  $(window).on('scroll', _.throttle(function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    if (scrollBottom < 700) {
      //page number is updated so new photos can be shown
      pageNumber += 1;
      const searchTerm = $('#query').val();
      searchFlickr(searchTerm);
    }

  }, 500));
});
