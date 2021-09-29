const image = document.getElementById('cat');
image.style.left = '0px';

// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

const catWalk = function () {
  const current = parsePixels(image.style.left);
  const next = current + 10;
  image.style.left = next + 'px';
}

setInterval(catWalk, 50);
