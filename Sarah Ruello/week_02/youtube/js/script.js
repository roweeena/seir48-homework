//////////////////////////////////////////////////////////////
// ~Adding thumbnails from YouTube script~
// Grab all the links and store in an array:
const links = document.querySelectorAll("a");
//console.log("testing: " + links[0]);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  //console.log(link); // full html line
  const href = link.getAttribute("href"); // IMPORTANT: grabs JUST the href from element - no HTML fluff.
  //console.log(href);

  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl):
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  console.log(thumbnailURL);

  // Create an IMG element using document.createElement(tagName)
  const thumb = document.createElement("img");

  // Set the "src" of the IMG element using element.setAttribute(name, value)
  thumb.setAttribute("src", thumbnailURL);

  // Append the IMG to the link using element.appendChild(element)
  link.appendChild(thumb);
}
