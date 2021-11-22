  const img = document.getElementsByTagName('img')[0];
  img.style.position =`absolute`;
  img.style.left = `0px`;
  // img.style.right = `-100px`;

const catWalk = function (){

const left = parseInt(img.style.left);
const right = parseInt(img.style.right);

  if ( left <= 980){
   const newLeft = left + 2;
   img.style.left = newLeft + 'px';
   img.style.right = `-100px`;
}
else if ( left => 980) {
   img.style.left = `-100px`;
   // const rightMove = right + 2;
   // img.style.right = rightMove + `px`;

   // img.style.transform = "rotate(90deg)";
   //    scaleX(+1);
  }
 };

setInterval(catWalk, 10);



//   img.style.transform = "scaleX(-1, 1)";
