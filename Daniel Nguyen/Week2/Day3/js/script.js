const loopCat = document.getElementById('loop-cat');
const backAndForthCat = document.getElementById('back-and-forth-cat');

// The end of the screen, where the cat does something else
const boundary = window.innerWidth - loopCat.width;

// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

// Bonus #1
const loop = function () {
  const current = parsePixels(loopCat.style.left);
  const next = current + 1.5;
  loopCat.style.left = next + 'px';
  if (next >= boundary) {
    loopCat.style.left = '0px';
  }
}

// Cat's direction (forwards = walking to the right)
let forwards = true;
// Bonus #2
const backAndForth = function () {
  const current = parsePixels(backAndForthCat.style.left);
  const next = forwards ? current + 1.4 : current - 1.4;
  backAndForthCat.style.left = next + 'px';
  if (forwards && next >= boundary) {
    forwards = false;
  } else if (!forwards && next <= 0) {
    forwards = true;
  }
}

setInterval(loop, 1);
setInterval(backAndForth, 1.1);
