let windowWidth = window.screen.width;
let walkback = false;
let flipped = false;
function walkingCat() {
    let img = document.getElementById("walker");


    if (!walkback) {
        img.setAttribute("width", img.width + 10);
        console.log("walking");
        console.log(img.width);
    }
    if (!walkback && img.width > windowWidth) {
        walkback = true;
        if (!flipped)
        {
            img.style.transform = "scaleX(-1)";
            flipped = true;
        }
    }
    if (img.width < 10) {
        img.style.transform = "scaleX(1)";
        walkback = false;
        flipped = false;
    }
    else if (walkback) {
        img.setAttribute("width", img.width - 10);
        console.log("walking back");
    }
}

window.setInterval(walkingCat, 1);