
const $squareBtn = $("#square-button");

const square = function () {
  const $squareNum = $("#square-input").val();
  const result = $squareNum ** 2;

  $("#solution").html(result).appendTo("body");
}

$squareBtn.click(square);
$("body").keydown(square);

const $halfBtn = $("#half-button");

const half = function() {
  const $halfNum = $("#half-input").val();
  const result = halfNum / 2;

  $("#solution").html(result).appendTo("body");
}

$halfBtn.click(half);
$("body").keydown(half);

const $percentBtn = $("#percent-button");

const percent = function() {
  const $fraction = $("#percent1-input").val();
  const $whole = $("#percent2-input").val();

  const result = ( fraction / whole ) * 100;

  $("#solution").html(`${result}%`).appendTo("body");
}

$percentBtn.click(percent);
$("body").keydown(percent);

const $areaBtn = $("#area-button");

const area = function() {
  const $radius = $("#area-input").val();
  const result = Math.PI * radius ** 2;

  $("#solution").html(result).appendTo("body");
}

$areaBtn.click(area);
$("body").keydown(area);
