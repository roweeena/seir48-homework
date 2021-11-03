//Function which takes in a keyword and returns images

//store the number of pages for a search somewhere
//keep track of the last page loaded
//Only call the function on scroll if page<pages
//Each time that function runs set page to page + 1

let meta = {
  page: 1,
  pages: 1
}

const searchFlickr = function (keywords, pg = 1) {
  console.log('Searching Flickr for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    page: pg,
    content_type: 1,
    format: 'json'
  }).done(showImages).done(getPages).done(function (info) {
    console.log(info);
  });
};


//Loops through the array of photos, generates a URL for each photo and appends an image to the div w id='images'
const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const getPages = function (results) {
  meta.page = results.photos.page,
  meta.pages = results.photos.pages
  }

// Takes in fragments of a response from each photo object in an array of photo objects and constructs an img URL
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
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

const throttled = _.throttle(searchFlickr, 3000, {leading: false, trailing: false});

$(document).ready(function () {

//Whenever someone submits the form go and search, and append images
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form from being submitted to the server.

    const searchTerm = $('#query').val();
    searchFlickr( searchTerm );
  });

  // Twitchy!
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

      if (scrollBottom < 700 && meta.page < meta.pages ) { // TODO: adjust the conditional to suit your taste
      const searchTerm = $('#query').val();
      throttled( searchTerm, meta.page + 1);
    }   
  });
});