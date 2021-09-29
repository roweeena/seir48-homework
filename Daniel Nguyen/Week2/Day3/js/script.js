const cat = document.getElementById('cat');

const boundary = window.innerWidth - cat.width;

// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

const catWalkRight = function () {
  const current = parsePixels(cat.style.left);
  const next = current + 10;
  cat.style.left = next + 'px';
  if (next >= boundary) {
    cat.style.left = '0px';
  }
}

const timer = setInterval(catWalkRight, 50);
