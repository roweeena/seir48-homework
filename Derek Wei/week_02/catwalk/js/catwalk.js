//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.


const cat = document.getElementsByTagName('img')[0];
cat.style.left = '0px';
cat.style.transform = "scaleX(1)";
cat.style.maxWidth = '296px';
cat.style.maxHeight = '296px';

const catWalk = function() {

  const oldPos = parseInt(cat.style.left);
  let newPos = 0;

  if (cat.style.transform === "scaleX(1)") {

    newPos = oldPos + 10;
    cat.style.left = newPos + 'px';

    if (cat.style.left === '1650px') {
      cat.style.transform = "scaleX(-1)";
    }
  }

  if (cat.style.transform === "scaleX(-1)") {

    newPos = oldPos - 10;
    cat.style.left = newPos + 'px';

    if (cat.style.left === '0px') {
      cat.style.transform = "scaleX(1)";
    }
  }

}

window.setInterval(catWalk, 50);


const dance = document.createElement('img');
dance.src = 'https://i0.wp.com/media.giphy.com/media/4PUkqN8QQsaFIkqi8a/giphy.gif?resize=599%2C599&ssl=1';
document.body.insertBefore(dance, document.body.childNodes[0]);

dance.style.maxWidth = "296px";
dance.style.maxHeight = "296px";
dance.style.display = "none";


// const catDisappear = function() {
//
//   const oldWidth = parseInt(cat.style.maxWidth);
//   const oldHeight = parseInt(cat.style.maxHeight);
//
//   newWidth = oldWidth - 4;
//   cat.style.maxWidth = newWidth + 'px';
//   newHeight = oldHeight - 4;
//   cat.style.maxHeight = newHeight + 'px';
//
// }
//
// const catAppear = function() {
//
//   const oldWidth = parseInt(cat.style.maxWidth);
//   const oldHeight = parseInt(cat.style.maxHeight);
//
//   newWidth = oldWidth + 4;
//   cat.style.maxWidth = newWidth + 'px';
//   newHeight = oldHeight + 4;
//   cat.style.maxHeight = newHeight + 'px';
// }
//
//
// window.setInterval(catDisappear, 50);
