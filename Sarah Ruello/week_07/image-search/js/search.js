console.log("hey", $.fn.jquery, _.VERSION); // check js loads

const state = {
  page: 1,
  lastPage: false,
};

const searchFlickr = function (keywords) {
  // if you have reached the last page, return:
  if (state.lastPage) return;
  console.log("searching Flickr for ", keywords);
  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";

  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    text: keywords,
    page: state.page++,
    format: "json",
  })
    .done(showImages)
    .done(function (info) {
      if (info.photos.page >= info.photos.pages) {
        state.lastPage = true;
      }
      console.log(info);
    });
};

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

    state.page = 1;
    state.lastPage = false;
    $(".cards").empty();

    const searchTerm = $("#query").val();
    searchFlickr(searchTerm);
  });

  // Higher Order Function:
  // "this is the function i don't want to run too often" - only request every 4s
  const relaxedSearchFlickr = _.debounce(searchFlickr, 4000, true); // Leading edge: don't wait

  // twitchy:
  $(window).on("scroll", function () {
    const scrollBottom =
      $(document).height() - $(window).scrollTop() - $(window).height();

    if (scrollBottom < 700) {
      // TODO: adjust the conditional to suit your taste
      const searchTerm = $("#query").val();
      relaxedSearchFlickr(searchTerm);
    }
  });
});
