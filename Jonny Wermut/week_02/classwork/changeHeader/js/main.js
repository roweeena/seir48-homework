$(document).ready(function () {
  $("#name").on("keyup", function () {
    const name = $("#name").val();
    $("header h1").text("Welcome " + name);
  });

  $("#name").on("focus", function () {
    $("header").addClass("active");
  });

  $("#name").on("blur", function () {
    $("header").removeClass("active");
  });
});