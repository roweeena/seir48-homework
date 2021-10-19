const $elementArray = $("a");

for (let i = 0; i < $elementArray.length; i++) {
    let $current = $elementArray.eq(i);
    let currentLink = $current.attr("href");
    let thumbnail = youtube.generateThumbnailUrl(currentLink);
    let $thumbnailImage = $("<img>")
    $thumbnailImage.attr("src", thumbnail);


    $current.prepend($thumbnailImage);
}