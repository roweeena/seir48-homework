console.log("hey", $.fn.jquery, _.VERSION); // check js loads

const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
const currentscrollHeight = 0;
let counter = 2;

const showImages = function (results) {
  _(results.photos.photo).each(function (photo) {
    // generate photo URL
    const thumbnailURL = generateURL(photo);
    // generate full size URL:
    const fullsizeURL = generateFullSizeURL(photo);
    // create image to display URL
    // const $img = $("<img>", { src: thumbnailURL });
    // append to images
    // $(".cards").html($img);
    $(
      `<a href="${fullsizeURL}"><img src=${thumbnailURL} class="gallery__img"></a>`
    ).appendTo(".cards");
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
    "_q.jpg", // change q to something else for sizes (docs)
  ].join("");
};

const generateFullSizeURL = function (p) {
  // https://www.flickr.com/photos/owner/id/
  return ["http://www.flickr.com/photos/", p.owner, "/", p.id].join("");
};

$(document).ready(function () {
  $("#search").on("submit", function (event) {
    event.preventDefault(); // disable form from being submitted
    console.log("Submit");

    const searchTerm = $("#query").val();
    console.log(searchTerm);
    searchFlickr(searchTerm);
    callPage(counter, searchTerm);
  });

  const searchFlickr = function (keywords) {
    $(".cards").empty();
    console.log("searching Flickr for ", keywords);

    $.getJSON(flickrURL, {
      method: "flickr.photos.search",
      api_key: "2f5ac274ecfac5a455f38745704ad084",
      text: keywords,
      format: "json",
    }).done(showImages);
  };

  const callPage = function (counter, searchTerm) {
    console.log("next page: ", counter);

    $.getJSON(flickrURL, {
      method: "flickr.photos.search",
      api_key: "2f5ac274ecfac5a455f38745704ad084",
      page: counter,
      text: searchTerm,
      format: "json",
    }).done(showImages);
  };

  // twitchy:
  $(window).on("scroll", function () {
    const searchTerm = $("#query").val();
    const scrollHeight = $(document).height();
    const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
    const isBottom = scrollHeight - 400 < scrollPos;

    const scrollBottom =
      $(document).height() - $(window).scrollTop() - $(window).height();
    console.log(scrollBottom);

    if (isBottom && currentscrollHeight < scrollHeight) {
      callPage(counter, searchTerm);
      counter++;
      currentscrollHeight = scrollHeight;
    }
  });
});
