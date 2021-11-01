


const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';

const CatWalk = function () {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + 1;
  img.style.left = newLeft + 'px';
  img.width = img.width +1;
  if (oldLeft > window.innerWidth - img.width) {
    clearInterval(timerID);
  };

};


const timerID = setInterval(CatWalk, 10);





// background-color:



// if(img > )

// window.innerwidth



// img.style.transform = “scaleX(+1)”

//
//
// const makeCatBigger = function () {
//   const img = document.getElementsByTagName('img')[0];
//   img.setAttribute('width', img.width + 1);
// };
//
// setInterval(makeImageBigger, 100);
//
//



//
// const img = document.getElementsByTagName('img')[0];
// img.style.position = 'absolute';
// img.style.left = '0px';
//
// const CatWalk = function () {
//   const oldLeft = parseInt(img.style.left);
//   const newLeft = oldLeft + 1;
//   img.style.left = newLeft + 'px';
// };
//
// setInterval(CatWalk, 10);

// if(newleft > 990)

//
// img.style.transform = “scaleX(+1)”

//
