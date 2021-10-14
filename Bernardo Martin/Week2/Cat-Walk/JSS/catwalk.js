const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.top = '0px';
img.style.left= '0px';

const sissyThatWalk = function () {
  var oldTop = parseInt(img.style.top);
  var oldleft = parseInt(img.style.left);
  var newTop = oldTop + 3;
  var newleft = oldleft + 7;
  img.style.top = newTop + 'px';
  img.style.left = newleft + 'px';
  img.setAttribute('width', img.width + 2);
  if (oldleft > window.innerWidth - (img.width + 300)) {
    clearInterval(timerID);
    let oldImgSource = img.src;
    img.src = 'https://i.gifer.com/68tz.gif';
    document.body.style.backgroundColor = "black";

  };
};

const timerID = setInterval(sissyThatWalk, 100);
