squareButton = document.getElementById('square-button');
halfButton = document.getElementById('half-button');

let result = document.getElementsByTagName('div');

const square = () => {
  let placeholder = document.createElement('p');
  let input = document.getElementById('square-input').value;
  let squared = input * input;
  placeholder.innerHTML = squared;
  let result = document.getElementById('solution');
  result.appendChild(placeholder);
}

const half = () => {
  let placeholder = document.createElement('p');
  let input = document.getElementById('half-input').value;
  let half = input/2;
  placeholder.innerHTML = half;
  let result = document.getElementById('solution');
  result.appendChild(placeholder);
}

squareButton.addEventListener('click', square);
halfButton.addEventListener('click', half);

