let catgif = document.getElementById('catgif');
catgif.style.left = "0px";
catgif.style.top = "0px";
catgif.style.right = "0px";
let currentLeft = catgif.style.left;
let currentTop = catgif.style.top;
let currentRight = catgif.style.right;

const catwalk = () => {
	let num = parseInt(currentLeft);
	let change = num + 7;
	if (change < 1100) {
		currentLeft = change.toString() + 'px';
		catgif.style.left = currentLeft;
		}
	// else if (change >= 1090) {
	// 	catgit.style.transform="scaleX(-1)"
	// 	catgif.style.top = "200px";
	// 	}
}

setInterval(catwalk, 100);







// 	while (change < 1100) {
// 		currentLeft = change.toString() + 'px';
// 		catgif.style.left = currentLeft;
// 		}
// }
