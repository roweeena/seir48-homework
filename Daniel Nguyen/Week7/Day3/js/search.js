'use strict';

var state = {
  loadingImages: false,
  pageCount: 0,
  lastPage: false
};

var searchFlickr = function searchFlickr(keywords) {
  if (state.lastPage || state.loadingImages) return;

  state.loadingImages = true;
  renderStateTable();

  console.log('Searching for', keywords);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET, POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    page: state.pageCount + 1,
    text: keywords,
    format: 'json'
  }).done(renderImages).done(function (info) {
    console.log(info);
    state.loadingImages = false;
    state.pageCount++;
    if (info.photos.page >= info.photos.pages) {
      state.lastPage = true;
    }
    renderStateTable();
  });
};

// Concatenates a Flickr image url, when provided with a Flickr photo object
var generateURL = function generateURL(p) {
  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

// Adds a <tr> for each property in `state`.
var renderStateTable = function renderStateTable() {
  $('tbody').empty();
  _(state).map(function (value, prop) {
    var $tr = $('\n      <tr>\n        <td>' + prop + '</td>\n        <td>' + value + '</td>\n      </tr>\n    ');
    $tr.appendTo($('tbody'));
  });
};

// Clears all images
var clearImageGallery = function clearImageGallery() {
  $('#images').empty();
};

// Renders all images for a given search result
var renderImages = function renderImages(results) {
  _(results.photos.photo).each(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL });
    $img.appendTo('#images');
  });
};

$(document).ready(function () {
  renderStateTable();

  $('#search').on('submit', function (event) {
    event.preventDefault();
    var searchTerm = $('#query').val();

    state.pageCount = 0;
    state.lastPage = false;

    clearImageGallery();
    searchFlickr(searchTerm);
  });

  // Higher Order Function:
  var relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true); // Leading edge: don't wait

  // Infinite scroll
  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 700 && !state.loadingImages) {
      var searchTerm = $('#query').val();
      searchFlickr(searchTerm);
      // relaxedSearchFlickr(searchTerm);
    }
  });
});