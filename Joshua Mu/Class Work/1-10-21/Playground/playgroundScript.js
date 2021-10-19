// This script won't allow anything to happen until after everything is loaded
$(document).ready(function () {
    // Everytime you lift up a key, this will run
    $("#name").on("keyup", function () {
        // .val() returns an array of elements, typically used when working with any sort of input
        const name = $("#name").val();
        $("header h1").text("Welcome" + name);
    }).on("focus", function () {
        $("header").addClass("active");
    }).on("blur", function () {
        $("header").removeClass("active");
    })

    $("window").on("mousemove", function (event) {
        const opacity = event.clientY / window.innerHeight;
        $("img").css("opacity", opacity);
    });
});
