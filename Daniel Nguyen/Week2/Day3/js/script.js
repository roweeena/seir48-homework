const cat = document.getElementById('cat');

const boundary = window.innerWidth - cat.width;

// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

const catWalk = function () {
  const current = parsePixels(cat.style.left);
  const next = current + 1.5;
  cat.style.left = next + 'px';
  if (next >= boundary) {
    cat.style.left = '0px';
  }
}

const timer = setInterval(catWalk, 1);
