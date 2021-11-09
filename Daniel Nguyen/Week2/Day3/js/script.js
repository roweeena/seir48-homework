// Converts a CSS pixels string into a JS Number
const parsePixels = function (px) {
  return Number( px.split('px')[0] );
}

const walk = function (cat) {
  const current = parsePixels( cat.css('left') );
  const next = current + 20;
  cat.css('left', next);
}


$(document).ready(function () {
  $('#cat').on('click', function () {
    walk( $(this) );
  })
});
