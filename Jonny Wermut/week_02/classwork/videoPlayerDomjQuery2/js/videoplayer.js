// # Exercise 1

// ## Making a Video Player with the DOM API

// In this exercise, you'll be turning the below list of linked titles into a list of linked thumbnails, using JavaScript DOM manipulation and the functions from the youtube.
// JS library [read documentation](https://www.teaching-materials.org/_deprecated/jquery/youtube_doc.html).

// // ```html
// <!doctype html>
// <html>
//   <head>
//     <meta charset="utf-8">
//    <title>Video Watcher</title>
//   </head>
//   <body>

//     <div class="container">
//       <h2 class="page-header">Best Videos Ever ❤</h1> 
//       <ul>
//         <li><a href="https://www.youtube.com/watch?v=TddFnTB_7IM">Trip through the 80s</a></li>
//         <li><a href="https://www.youtube.com/watch?v=epUk3T2Kfno">Otters Holding Hands</a></li>
//         <li><a href="https://www.youtube.com/watch?v=il2IrgFHfsg">The Ooooh Cat</a></li>
//       </ul>
//     </div>

//     <script type="text/javascript" src="http://www.teaching-materials.org/common/youtube.js"></script>
//   </body>
// </html>
// // ```

// ### Step by Step:
// - Create an array of every link on the page using document.querySelectorAll(cssSelector)
// - Iterate through the array. In each iteration of the loop: 

//     - Find the current href using [element.getAttribute(name)](https://developer.mozilla.org/en-US/docs/DOM/element.getAttribute), and store into a variable
//     - Generate a thumbnail URL using [youtube.generateThumbnailUrl(videoUrl)](http://www.teaching-materials.org/jquery/youtube_doc.html)
//     - Create an IMG element using [document.createElement(tagName)](https://developer.mozilla.org/en-US/docs/DOM/document.createElement)
//     - Set the "src" of the IMG element using [element.setAttribute(name, value)](https://developer.mozilla.org/en-US/docs/DOM/element.setAttribute)
//     - Append the IMG to the link using [element.appendChild(element)](https://developer.mozilla.org/en-US/docs/DOM/Node.appendChild)

// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the [DOM Review here](http://www.teaching-materials.org/jsdom/)

const thumbnailify = ($link) => {
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $image = $('<img>'); // detached DOM node
  $image.attr('src', thumbnailURL);

  $link.prepend($image);

  $link.on('click', function (event) {
    event.preventDefault();
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${embedURL}" title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('.player').hide().html(embedHTML).slideDown(2000);
  });
};

const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // equivalent to $links[i] but the DOM node will still be jQuery powered.
  thumbnailify($link);
}


