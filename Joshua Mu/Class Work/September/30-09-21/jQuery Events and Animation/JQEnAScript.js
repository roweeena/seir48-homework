function thumbnailify(argument) {
    let $current = $elementArray.eq(i);
    let currentLink = $current.attr("href");
    let thumbnail = youtube.generateThumbnailUrl(currentLink);
    let $thumbnailImage = $("<img>")
    $thumbnailImage.attr("src", thumbnail);


    $current.prepend($thumbnailImage);

    $current.on("click", function (event) {
        //This prevents the normal occurance from happening
        event.preventDefault;
        const embedHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qw2HHMhpV4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        $("#vid").hide.html(embedHTML).fadeIn(5000);
    })
}

const $elementArray = $("a");

for (let i =0; i < $elementArray.length; i++)
{
    const $elementArray = $elementArray
}