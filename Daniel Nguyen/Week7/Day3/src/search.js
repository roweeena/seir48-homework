const state = {
  loadingImages: false,
  pageCount: 0,
  lastPage: false
};

const searchFlickr = function (keywords) {
  if (state.lastPage || state.loadingImages) return;

  state.loadingImages = true;
  renderStateTable();

  console.log('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like GET, POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    page: state.pageCount + 1,
    text: keywords,
    format: 'json',
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

// Adds a <tr> for each property in `state`.
const renderStateTable = function () {
  $('tbody').empty();
  _(state).map(function (value, prop) {
    const $tr = $(`
      <tr>
        <td>${prop}</td>
        <td>${value}</td>
      </tr>
    `);
    $tr.appendTo($('tbody'));
  });
};

// Clears all images
const clearImageGallery =  function () {
  $('#images').empty();
};

// Renders all images for a given search result
const renderImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

$(document).ready(function () {
  renderStateTable();

  $('#search').on('submit', function (event) {
    event.preventDefault();
    const searchTerm = $('#query').val();

    state.pageCount = 0;
    state.lastPage = false;

    clearImageGallery();
    searchFlickr(searchTerm);
  });

  // Higher Order Function:
  const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true); // Leading edge: don't wait

  // Infinite scroll
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 700 && !state.loadingImages) {
      const searchTerm = $('#query').val();
      searchFlickr(searchTerm);
      // relaxedSearchFlickr(searchTerm);
    }
  });
});
