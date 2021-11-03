// console.log("hey", $.fn.jquery, _.VERSION);
const searchFlickr = function (keywords) {
  console.log("searching flickr for", keywords);

  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    per_page: 30,
    page: 1,
    format: "json",
  }).done(showImages);
};
const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    // console.log(photo);
    //generate photo URL
    const thumbnailURL = generateURL(photo); //function on line 25
    // console.log(thumbnailURL);
    const $img = $("<img>", { src: thumbnailURL });
    //append in index.html
    $img.appendTo("#images");
  });
};

const generateURL = function (p) {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
  ].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault();
    $("#images").html("");
    // console.log("submit");
    const searchTerm = $("#query").val();
    // console.log(searchTerm);
    searchFlickr(searchTerm); ///function is at the top//
  });
  $(window).on("scroll", function () {
    // console.log("scroll happend!");
    // const scrollBottom =
    //   $(document).height() - $(window).scrollTop() - $(window).height();

    // console.log(scrollBottom);
    if ($(document).height() - $(window).height() === $(window).scrollTop()) {
      const searchTerm = $("#query").val();
      searchFlickr(searchTerm);
    }
  });
});
