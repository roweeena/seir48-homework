let windowWidth = window.innerWidth;
let returning = false;
let timerActive = false;
let timerSet = false;
let timer = 0;
let timerDuration = 40;

let img = document.getElementById("walker");
img.style.position = "absolute";
img.style.left = "0px"

function sideToSide() {
    let numberThing = parseInt(img.style.left);

    if (numberThing < windowWidth && !returning) {
        let oldLeft = parseInt(img.style.left);
        let newLeft = parseInt(oldLeft + 10);
        img.style.left = `${newLeft}px`;
    }
    if (timerActive) {
        if (!timerSet) {
            timer = timerDuration;
            timerSet = true;
        }
        console.log(timer);
        let now = new Date().getTime();
        img.src = "https://media4.giphy.com/media/BK1EfIsdkKZMY/giphy.gif";
        timer = timer - now;

        if (timer <= 0) {
            img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
            timerActive = false;
            timerSet = false;
        }
    }
    else if (!returning && numberThing > windowWidth ) {
        img.style.transform = "scaleX(-1)";
        returning = true;
        if (!timerActive) {
            timerActive = true;
        }
    }

    else if (returning && numberThing < 20) {
        img.style.transform = "scaleX(1)";
        returning = false;
    }
    else if (returning) {
        let oldLeft = parseInt(img.style.left);
        let newLeft = parseInt(oldLeft - 10);
        img.style.left = `${newLeft}px`;
    }
}

window.setInterval(sideToSide, 50);