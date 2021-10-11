const image = document.getElementsByTagName("img")[0];
// image.style.left = "0px";

image.style.left = "0px";
let positionFlag = false;
const imgMoving = function () {
  let oldLeft = parseInt(image.style.left);
  let newLeft;
  if (positionFlag === false) {
    newLeft = oldLeft + 1;
  } else {
    newLeft = oldLeft - 1;
  }
  image.style.left = newLeft + "px";
  if (parseInt(image.style.left) + 273 === innerWidth) {
    image.style.transform = "scaleX(-1)";
    positionFlag = true;
  }
  if (parseInt(image.style.left) === 0) {
    image.style.transform = "scaleX(+1)";
    positionFlag = false;
  }
};
const movingRight = setInterval(imgMoving, 6);
