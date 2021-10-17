//The cat walk

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the
// left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where
// it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the
// screen from left to right. Hurrah!


// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the
// left hand side ("0px"). So they should keep walking from left to right across the screen,
// forever and ever.

// converts a CSS pixels string into a JS number.
const parsePixels = function (px) {
  return Number(px.split('px')[0]);
};
//
// const loop = function () {
//   const cat = document.getElementById('cat-one');
//   const boundary = window.innerWidth - cat.width;
//   const current = parsePixels(cat.style.left);
//   const next = current + 2;
//   cat.style.left = next + 'px';
//   if (next >= boundary){
//     cat.style.left = '0px';
//   }
// };
//
// setInterval(loop, 10);



// const imgCatOne = document.getElementById('cat-one');
// imgCatOne.style.position = 'absolute';
// imgCatOne.style.left = '0px';
// imgCatOne.style.top = '0px';
//
// const catWalk = function () {
//   oldRight = parseInt(imgCatOne.style.left)
//   newRight = oldRight + 1;
//   imgCatOne.style.left = newRight + 'px';
//
//   if (imgCatOne.style.left === '1200px') {
//     imgCatOne.style.left = '0px';
//   }
// };
//
// setInterval(catWalk,9.5);


// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead.
// They should keep walking back and forth forever and ever.

let forwards = true;

const backAndForth = function () {
  const cat = document.getElementById('cat-one');
  const boundary = window.innerWidth - cat.width;
  const current = parsePixels(cat.style.left);

  const next = forwards ? current + 2.5 : current - 2.5;

  cat.style.left = next + 'px';

  //If cat reaches the right boundary turn around and walk.
  if (forwards && next >= boundary) {
    cat.style.transform = 'rotateY(180deg)';
    forwards = false;
  }

  //else if cat reaches the left boundary, turn around and walk right.
  else if (!forwards && next <= 0) {
    cat.style.transform = 'rotateY(0deg)';
    forwards = true;
  }
}

//setInterval
setInterval(backAndForth, 1);

// const imgCatOne = document.getElementById('cat-one');
// imgCatOne.style.position = 'absolute';
// imgCatOne.style.left = '0px';
// imgCatOne.style.top = '0px';
//
// //Defining the forward function
// const catWalk = function () {
//   oldRight = parseInt(imgCatOne.style.left)
//   newRight = oldRight + 1;
//   imgCatOne.style.left = newRight + 'px';
//
//   if (imgCatOne.style.left === '1200px'){
//     clearInterval(forRate);
//     imgCatOne.style.transform = "scaleX(-1)";
//     catWalkRev();
//     setInterval(catWalkRev,10);
//   }
// };
//
// //Defining the reverse function.
// const catWalkRev = function () {
//   oldRight1 = parseInt(imgCatOne.style.left);
//   newRight1 = oldRight1 - 1;
//   imgCatOne.style.left = newRight1 + 'px'
//
//   if (imgCatOne.style.left === '0px'){
//     catWalk();
//     imgCatOne.style.transform = "scaleX(1)";
//     setInterval(catWalk,10);
//   }
// };
//
// const forRate = setInterval(catWalk,10);

//Working out here:
// const imgCatOne = document.getElementById('cat-one');
// imgCatOne.style.position = 'absolute';
// imgCatOne.style.left = '0px';
//
// const catWalkFor = function () {
//   oldRight = parseInt(imgCatOne.style.left)
//   newRight = oldRight + 1;
//   imgCatOne.style.left = newRight + 'px';
//
//   if(imgCatOne.style.left === '1200px'){
//     clearInterval(forWalk);
//     setInterval(catWalkRev, 10);
//   }
// };
//
// const catWalkRev = function () {
//   oldRight1 = parseInt(imgCatOne.style.left);
//   newRight1 = oldRight1 - 1;
//   imgCatOne.style.left = newRight1 + 'px'
//
//   if(imgCatOne.style.left === '0px'){
//     setInterval(catWalkFor, 6);
//   }
// };
//
// const forWalk = setInterval(catWalkFor,10);
// const init = function () {
// x = setInterval(catWalkFor, 9.5);
// y = setInterval(catWalkRev, 9.5);
//
// if (parseInt(imgCatOne.style.left) <= 0){
//   x = setInterval(catWalkFor, 9.5);
//   clearInterval(y);
// }
// else if (parseInt(imgCatOne.style.left) >= 1200) {
//   y = setInterval(catWalkRev, 9.5);
//   clearInterval(x);
// }
// };


// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of
// a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original
// image and have it continue the walk.
//
// const imgCatOne = document.getElementById('cat-one');
// const imgCatTwo = document.getElementById('cat-two');
//
// imgCatOne.style.position = 'absolute';
// imgCatOne.style.left = '0px';
//
// imgCatTwo.style.position = 'absolute';
// imgCatTwo.style.left = '600px';
// imgCatTwo.style.display = 'none';
//
//
// const catWalkFor = function () {
//   oldRight = parseInt(imgCatOne.style.left)
//   newRight = oldRight + 1;
//   imgCatOne.style.left = newRight + 'px';
//
//   if(imgCatOne.style.left === '600px'){
//     clearInterval(forWalk);
//     imgCatOne.style.display = 'none';
//     imgCatTwo.style.display = "block";
//     catTwo();
//     catOne();
//   }
// };
//
// //function to make cat one disappear for 10 seconds.
// const catOne = function () {
//   const appCat = function () {
//     imgCatOne.style.display = "inline";
//     setInterval(catWalkFor, 9.5);
//   }
//   setTimeout(appCat, 10000);
// };
//
// //function to set timer and make the dancing cat disappear.
// const catTwo = function () {
//   const disCat = function () {
//     imgCatTwo.style.display = "none";
//   }
//   setTimeout(disCat, 10000);
// };
//
// const forWalk = setInterval(catWalkFor,9.5);


// - Bonus #4: Pretty much go nuts or whatever.

























// page holder.
