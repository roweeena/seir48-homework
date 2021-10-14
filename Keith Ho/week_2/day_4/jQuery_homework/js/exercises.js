
$("body").css("font-family", "Arial, sans-serif");

$("#nickname").html("keith");

$("#favorites").html("mango");

$("#hometown").html("hongkong");

var $listItems = $("li");

for ( let i = 0; i < $listItems.length; i++ ) {
  $listItems[i].addClass("listitems");
  $listItems[i].css("color", "red");
}

var $newImg = $("<img>");

$newImg.attr("src", "images/keith.jpg");

$("body").append($newImg);
