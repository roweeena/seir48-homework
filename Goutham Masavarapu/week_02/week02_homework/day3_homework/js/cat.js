// # Exercises: Animation
//
// var makeImageBigger = function() {
//
//   var img = document.getElementsByTagName('img')[0];
//   img.setAttribute('width', img.width+10);
//   if (img.width > 400) {
//     window.clearInterval(timerId);
//
//   }
// };
//
//
// let timerId = setInterval(makeImageBigger, 1000);
// //
// // - Create a new Javascript file and link to it with a script tag at the bottom.
// // - Create a variable to store a reference to the img.
// var img = document.getElementsByTagName('img')[0];
//
// // - Change the style of the img to have a "left" of "0px", so that it starts at
// // the left hand of the screens.
// img.style.position = 'absolute';
// img.style.left = '0px';
// var catWalk = function() {
//   var oldLeft = parseInt(img.style.left);
//   var newLeft = oldLeft + 10;
//   img.style.left = newLeft + 'px';
//   if (oldLeft > (window.innerWidth-img.width)) {
//      img.style.left = '0px';
//
// }
//
//
//
// };
//  setInterval(catWalk, 50);

 // reverse the cat

 let img = document.getElementsByTagName('img')[0];
 img.style.position = 'absolute';
 img.style.left = '10px';


 const catwalk = function() {
   var oldLeft = parseInt(img.style.left);// convert to number
   var newLeft = oldLeft + 10; /// add 10px
   img.style.left = newLeft + 'px'; // move right


   if (newLeft > 960) { /// once it hit the screen size at end
     clearInterval(timerDone) // cuts out the function which is moving cat forward
     img.style.transform = 'scaleX(-1 )'; // reverse on x-axis
     backTimerDone = setInterval(catWalkBack, 50); // catWalkBack function  starts
   }

 };

 const catWalkBack = function() {// walkback function
   var oldLeft = parseInt(img.style.left);// convert to number
   var newLeft = oldLeft - 10; // move right or backwards
   img.style.left = newLeft + 'px';// adding px to the number


   if (newLeft < 0) {//if it hits starting point of the screen
     clearInterval(backTimerDone)//catWalkBack function stops
     img.style.transform = 'scaleX(1)';// again inverse the image on the x-axis
     timerDone = setInterval(catwalk, 50)// now function for catwalk forwards starts
   }

 };

 let timerDone = setInterval(catwalk, 50);// tested to see the above works without this but no
 // this is needed as function wont return a value without going throught the loop



// - Create a function called catWalk() that moves the cat 10 pixels to the right
// of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving
// across the screen from left to right. Hurrah!


//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at
// the left hand side ("0px"). So they should keep walking from left to right across
// the screen, forever and ever.
//
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move
// backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img
// with an image of a cat dancing, keep it dancing for 10 seconds, and then
// replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
