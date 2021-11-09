const img = document.getElementsByTagName('img')[0];
  img.style.position = 'absolute';
  img.style.left = '0px';

const catWalk = function () {
    const oldCat = parseInt(img.style.left);
    const newCat = oldCat + 1;
      img.style.left = newCat + 'px';
  if (img.style.left == (1160) + 'px') {
      img.style.right = '0px';
      img.style.left = 'unset';
    clearInterval(timerId);
    timerId1= setInterval(catWalkReverse, 10);
  }
};

const catWalkReverse = function () {
  console.log('catWalkReverse');
  console.log(img.style.right);

  const oldCat = parseInt(img.style.right);
  const newCat = oldCat + 1;
    img.style.right = newCat + 'px';
  if (img.style.right == (1160) + 'px') {
    img.style.left = '0px';
    img.style.right = 'unset';
    clearInterval(timerId1);
    timerId =setInterval(catWalk, 10);
  }
};
let timerId =setInterval(catWalk, 10);
let timerId1
