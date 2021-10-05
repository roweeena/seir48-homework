//////////////////////////////////////////////////////////////
// ~Adding thumbnails from YouTube script~
// Grab all the links and store in an array:

// jQuery finds DOM elements and returns a 'collection':
// const $links = $("a");
// //console.log("testing: " + links[0]);

// for (let i = 0; i < $links.length; i++) {
//   const $link = $links.eq(i); // equiv to $links[i] but jQuery powered.
//   //console.log(link); // full html line

//   const href = $link.attr("href"); // grabs JUST the href from element - no HTML fluff.
//   //console.log(href);

//   // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl):
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   console.log(thumbnailURL);

//   // Create an IMG element using document.createElement(tagName)
//   $("<img src=" + thumbnailURL + ">").prependTo($link);

// //   // // Set the "src" of the IMG element using element.setAttribute(name, value)
// //   // $(thumb).attr("src", thumbnailURL);

// //   // Append the IMG to the link using element.appendChild(element)
// //   // $(link).append(thumb);
// // }

// // // The goal:
// // $("a").each(function () {
// //   const href = $(this).attr("href");
// //   const thumbnailURL = youtube.generateThumbnailUrl(href);
// //   $("<img src=" + thumbnailURL + ">").prependTo(this);
// // });

$("body").css("font-family", "Arial, sans-serif");
const $links = $("a");

const thumbnailify = function ($link) {
  const href = $link.attr("href");
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  $("<img src=" + thumbnailURL + ">").prependTo($link);

  $link.on("click", function () {
    event.preventDefault(); // don't let browser follow the link
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src=${embedURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $("#player").hide().html(embedHTML).fadeIn(5000);
  });
};

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i);
  thumbnailify($link);
}
