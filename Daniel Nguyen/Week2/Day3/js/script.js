// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

const loop = function () {
  const cat = document.getElementById('loop-cat');
  const boundary = window.innerWidth - cat.width;
  const current = parsePixels(cat.style.left);
  const next = current + 1.5;
  cat.style.left = next + 'px';
  if (next >= boundary) {
    cat.style.left = '0px';
  }
}

let forwards = true;
const backAndForth = function () {
  const cat = document.getElementById('back-and-forth-cat');
  const boundary = window.innerWidth - cat.width;
  const current = parsePixels(cat.style.left);
  const next = forwards ? current + 1.4 : current - 1.4;
  cat.style.left = next + 'px';
  if (forwards && next >= boundary) {
    forwards = false;
  } else if (!forwards && next <= 0) {
    forwards = true;
  }
}

setInterval(loop, 1);
setInterval(backAndForth, 1.1);
