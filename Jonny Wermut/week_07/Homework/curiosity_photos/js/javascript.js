const getMars = function (event) {
  event.preventDefault(); // stay on this page
  const sol = $('#sol').val();
  const camera = $('#camera').val()

$.ajax(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=hpcqlLPgo5xdLT3q7xiknzg48QYiuz8yDWaofZmm`).done(function (data) {
    let link = data.photos[0].img_src
    if (link === undefined) {
      $('h3').text("We can't find any photos for that day. Please try a different Sol or Camera")
    }
    else {
    $('h3').text('We got an image')
    $('img').attr('src', link);
    }
  });
};

$('form').on('submit', getMars);

