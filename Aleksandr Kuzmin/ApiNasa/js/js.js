

$.ajax('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY').done(function (data) {





});



  $.ajax(`https://api.nasa.gov/planetary/apod?api_key=AWyLR0l6abNovLZVXJ3vj7oxESE3fyAatII49qbj`).done(function (data) {
    const cover = data.url
    const explanation = data.explanation
    const hdurl = data.hdurl

    $('#explanation').text(explanation);
    $('#hdurl').attr('src', hdurl);
    $('#cover').attr('src', cover);
  });
