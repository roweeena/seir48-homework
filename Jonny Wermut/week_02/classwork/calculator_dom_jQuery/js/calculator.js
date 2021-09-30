// squareButton = document.getElementById('square-button');
// halfButton = document.getElementById('half-button');

const $squareButton = $('#square-button');
const $halfButton = $('#half-button');
const $percentButton = $('#percent-button');
const $circleButton = $('#area-button');

// let result = document.getElementsByTagName('div');
let $getDiv = $('div#solution'); // retrieve the div with the id of solution

// const square = () => {
//   let placeholder = document.createElement('p');
//   let input = document.getElementById('square-input').value;
//   let squared = input * input;
//   placeholder.innerHTML = squared;
//   let result = document.getElementById('solution');
//   result.appendChild(placeholder);
// }

const square = () => {
  let $placeholder = $('<p>');
  let input = $('#square-input').val();
  let squared = input * input;
  $placeholder.text(squared);
  $placeholder.appendTo($getDiv);
}

// const half = () => {
//   let placeholder = document.createElement('p');
//   let input = document.getElementById('half-input').value;
//   let half = input/2;
//   placeholder.innerHTML = half;
//   let result = document.getElementById('solution');
//   result.appendChild(placeholder);
// }

const half = () => {
  let $placeholder = $('<p>');
  let input = $('#half-input').val();
  let half = input/2;
  $placeholder.html(half);
  $getDiv.append($placeholder);
}

const fraction = () => {
  let $numerator = $('#percent1-input').val();
  let $denominator = $('#percent2-input').val();
  let $result = $numerator/$denominator;
  $getDiv.append(`<p>${$result}<p>`);
}

const area = () => {
  let $radius = $('#area-input').val(); //get radius
  console.log($radius);
  let result = Math.PI * $radius * $radius;
  $getDiv.append(`<p>${result}</p>`);
}


$squareButton.on('click', square);
$halfButton.on('click', half);
$percentButton.on('click', fraction);
$circleButton.on('click', area);



