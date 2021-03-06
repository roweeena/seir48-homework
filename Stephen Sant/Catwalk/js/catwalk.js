// - Create a variable to store a reference to the img.
const catImage = document.getElementsByTagName('img')[0];
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
catImage.style.left = 0+'px';

let walkTimer = 0;
let walkRight = true;

// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
const catWalk = function()
{
    console.log(catImage.width);
    if(walkTimer > 175 && walkRight === true)
    {
        walkRight = false;
        walkTimer = 0;
        
    }
    else if(walkTimer > 175 && walkRight === false)
    {
        walkRight = true;
        walkTimer = 0;
    }
    if(walkRight === true)
    {
    const oldPos = parseInt(catImage.style.left);
    const newPos = oldPos + 10;
    catImage.style.left = newPos + 'px';
    }
    else
    {
    const oldPos = parseInt(catImage.style.left);
    const newPos = oldPos - 10;
    catImage.style.left = newPos + 'px';
    }
    walkTimer += 1;
}
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! 

    setInterval(catWalk, 50);

// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. 

// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever. 

// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// - Bonus #4: Pretty much go nuts or whatever.