$(document).ready(function () {
  $('#name').on('keypress',function () {
    const name = $('#name').val()
    $('header h1').text("Welcome " + name);
    
  });

$('#name').on('focus', function () {
  $('header').addClass('active');

});
$('#name').on('blur', function () {
  //
  $('header').addClass('active');

  });


$(window).on('mousemove',function (event) {
  const opacity = event.clientY / window.innerHeight;
  $('img').css('opacity',1- opacity);
})

});
