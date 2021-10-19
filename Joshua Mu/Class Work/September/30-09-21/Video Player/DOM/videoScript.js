const elementArray = document.querySelectorAll("a");

for (let i = 0; i < elementArray.length; i++)
{
    let current = elementArray[i];
    let currentLink = elementArray[i].href;
    let thumbnail = youtube.generateThumbnailUrl(currentLink);
    let thumbnailImage = document.createElement("img");
    thumbnailImage.setAttribute("src", thumbnail);
    let body = document.getElementsByClassName("page-header");
    current.appendChild(thumbnailImage);
    console.log("Working");
}

