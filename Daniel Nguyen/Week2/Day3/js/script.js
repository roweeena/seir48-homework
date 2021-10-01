// The end of the screen, where the cat does something else
// const boundary = window.innerWidth - document.getElementsByTagName('img')[0].width;

// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
}

// Bonus #1
const loop = function () {
  const cat = document.getElementById('loop-cat');
  const boundary = window.innerWidth - cat.width;
  const current = parsePixels(cat.style.left);
  const next = current + 2;
  cat.style.left = next + 'px';
  if (next >= boundary) {
    cat.style.left = '0px';
  }
}

// Cat's direction (forwards = walking to the right)
let forwards = true;
// Bonus #2
const backAndForth = function () {
  const cat = document.getElementById('back-and-forth-cat');
  const boundary = window.innerWidth - cat.width;
  const current = parsePixels(cat.style.left);

  const next = forwards ? current + 2.5 : current - 2.5;

  // If cat reached the middle
  if (current >=  boundary / 2) {
    cat.src = "images/cat-dance.gif";
  }

  cat.style.left = next + 'px';

  // If cat reached the right boundary, turn around and walk left
  if (forwards && next >= boundary) {
    cat.style.transform = 'rotateY(180deg)';
    forwards = false;
  }
  // Else if cat reached the left boundary, turn around and walk right
  else if (!forwards && next <= 0) {
    cat.style.transform = 'rotateY(0deg)';
    forwards = true;
  }
}


setInterval(loop, 1);
const walk = setInterval(backAndForth, 1);
