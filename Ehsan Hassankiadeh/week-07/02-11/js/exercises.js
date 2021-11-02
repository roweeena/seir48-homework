const fetchLabel = function (event) {
  event.preventDefault();
  const coinName = $("#coinName").val();
  $.ajax(`https://api.coingecko.com/api/v3/coins/${coinName}`).done((data) => {
    // console.log(data);
    const label = data.image.thumb;
    const description = data.description.en;
    // console.log(description);
    // console.log(label);
    $("#label").attr("src", label);
    $("#coinDescription").html(description);
  });
};
$("form").on("submit", fetchLabel);
const catPhoto = function (event) {
  event.preventDefault();
  const fullName = $("#AuthorName").val().split(" ");
  $.ajax(
    `https://api.icndb.com/jokes/random?firstName=${fullName[0]}&lastName=${fullName[1]}`
  ).done((data) => {
    // console.log(data);
    let catFact = data.value.joke;
    $("#joke").html(catFact);
  });
};
$("#jokeButton").on("click", catPhoto);
