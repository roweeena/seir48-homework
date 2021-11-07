// let page = 1;
// let lastPage = false;

const state = {
  page: 1,
  lastPage: false,
  requestInProgress: false
};

const searchFlickr = function (keywords) {
  if (state.lastPage || state.requestInProgress) return;
  console.log("hello", keywords);

  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?"; //JSONP
  state.requestInProgress = true;
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    per_page: 100,
    page: state.page++,
    format: "json"
  }).done(showImages).done(function(info){
    state.requestInProgress = false;
    if(info.photos.page >= info.photos.pages){
      state.lastPage = true;
    }
    console.log(info);
  });
};

const showImages = function(results){
  _(results.photos.photo).each(function(photo){
    const thumbnailURL = generateURL(photo);
    const $img = $("<img>", {src: thumbnailURL});
    $img.appendTo("#images");
  });
};

const generateURL = function(p){
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg" // can change "q" to something else for different sizes
  ].join("");
};

$(document).ready(function(){
  $("#search").on("submit", function(event){
    event.preventDefault();

    state.page = 1;
    state.lastPage = false;
    $("#images").empty();

    const searchTerm = $("#query").val();
    searchFlickr( searchTerm );
  });

  //higher order function = HOF
  const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true);// leading edge: dont't wait

  $(window).on("scroll", function(){
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

    if(scrollBottom < 200){
      const searchTerm = $("#query").val();
      relaxedSearchFlickr( searchTerm );
    }
  });
});
