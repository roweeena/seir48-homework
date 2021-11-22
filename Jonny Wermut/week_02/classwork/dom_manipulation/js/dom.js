// # Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. 
// You don't know their length and they can contain both integers and floating point numbers.

// ## Example
// ```
//   [2, 6.4, 3] + [3, 3.6, 2] = 20
// ```

// # Bonus
// Create another version of the above function that can accept more than two arrays as the arguments (you don't know the specific number of arguments). Hint - look up 'The arguments object'.

// # Bonus bonus
// Create another version of the above function that can accept numbers, arrays or a combination of the two for any amount of arguments.

document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById('nickname').innerText = "Charmayne";
document.getElementById('favorites').innerText = "The outdoors, aport, adventure";
document.getElementById('hometown').innerText = "Sydney";

let liArray = document.getElementsByTagName('li');

for (let i=0; i<liArray.length; i++) {
  let item = liArray[i];
  item.className = "listitem";
}

let listItem = document.getElementsByClassName("listitem");
for (var i = 0; i < listItem.length; i++) {
    listItem[i].style.color = 'red';
  }

let myPhoto = document.createElement('img');
myPhoto.src="https://i.imgur.com/WY3trrf.jpg";
document.querySelector('body').appendChild(myPhoto);