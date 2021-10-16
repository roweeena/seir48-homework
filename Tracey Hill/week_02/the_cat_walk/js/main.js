// console.log('It works!')
// # Exercises: Animation

// ## The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
  
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
//  </body>
// </html>
// ```

// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '0px';
img.style.transform = 'scaleX(1)';
const windowWidth = window.innerWidth - 200;
let goingRight = true;

const catWalk = function () {
  const fromLeft = parseInt(img.style.left);
    if (goingRight) {
        img.style.left = fromLeft + 1 + 'px';
        if (fromLeft === windowWidth) {
            img.style.transform = 'scaleX(-1)';
            goingRight = false;
        }
    } else {
        img.style.left = fromLeft - 1 + 'px';
        if (fromLeft === 0) {
            img.style.transform = 'scaleX(1)';
            goingRight = true;
        }
    }
 

};

setInterval(catWalk, 20);


// - ✅️ Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - ✅️ Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - ❌️ Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk. Didn't attempt, decided to do bonus 4 and make it a more like an art work.

// - ✅️ Bonus #4: Pretty much go nuts or whatever. - Put a background of Hobart, reduced the size of the cat. Still working on making the Hobart illustration fit into whatever the screensize is and the cat appear at the appropriate place on the page for walking across the.

// Done - ✅️ 
// Not done - ❌️