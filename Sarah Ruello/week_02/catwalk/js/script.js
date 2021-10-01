///////////////////////
// zoom in:
// const makeImageBigger = function () {
//   const img = document.getElementsByTagName("img")[0];
//   img.setAttribute("width", img.width + 1);
// };

// setInterval(makeImageBigger, 100);

//////////////////////
// fade img out:
// const img = document.getElementsByTagName("img")[0];
// img.style.opacity = 1.0;
// const fadeAway = function () {
//   img.style.opacity = img.style.opacity - 0.01;
// };
// setInterval(fadeAway, 100);

//////////////////////
//position alteration:
var img = document.getElementsByTagName("img")[0];

img.style.position = "absolute";
img.style.left = "0px";

const catWalk = function () {
  const oldLeft = parseInt(img.style.left);
  let newLeft = oldLeft + 10;
  img.style.left = newLeft + "px";

  if (newLeft > window.innerWidth - img.width) {
    setInterval(backwards, 50);
    clearInterval(timerID);
  }
};

function backwards() {
  let oldLeft = parseInt(img.style.left);
  console.log(oldLeft);
  img.style = "position: absolute; transform: scaleX(-1);";
  for (let i = oldLeft; i >= 0; i--) {
    img.style.left = oldLeft - 10 + "px";
  }
  //clearInterval(timerID);
  console.log("KILL ME PLEASE");
}

const timerID = setInterval(catWalk, 50);

//////////////////////transform-origin: 50% 0px 0px; transform: rotateY(180deg);
// Stopping an Animation:
// window.clearTimeout(timer);
// window.clearInterval(timer);

// const img = document.getElementsByTagName("img")[0];
// img.style.opacity = 1.0;

// const fadeAway = function () {
//   img.style.opacity = img.style.opacity - 0.1;
//   if (img.style.opacity < 0.5) {
//     clearInterval(timerID); // stop!
//   }
// };

// // if you want to stop the timer, save in a variable:
// const timerID = setInterval(fadeAway, 100);

////////////////////////////////////////////////////////////////
