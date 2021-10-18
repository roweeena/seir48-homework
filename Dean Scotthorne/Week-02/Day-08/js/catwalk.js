console.log("hello world")

// - Create a new Javascript file and link to it with a script tag at the bottom. ---- DONE
// - Create a variable to store a reference to the img.------ DONE
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.----- DONE
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.----DONE
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!-----DONE
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px").
// So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead.
// They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image
// of a cat dancing, keep it dancing for 10 seconds,
//and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.



const img = document.getElementsByTagName('img')[0]; //Create a variable to store a reference to the img.

 img.style.position = 'absolute';
 img.style.left = '0px';

const catWalkRight = function () {
  const oldLeft = parseInt(img.style.left);
  const newPos = oldLeft + 10;
  img.style.left = newPos + 'px';

  if(img.style.left < window.innerWidth){
     img.style.right = '0px';

   const catWalkLeft = function () {
			const oldRight = parseInt(img.style.right);
			const newPos2 = oldRight + 10;
			img.style.right = newPos2 + 'px';

			// if (movingLeft > window.innerWidth){
	 	  // 		img.style.right = '0px';
	 	  // 	}
}
}
}
setInterval(catWalkRight, 50);






//
