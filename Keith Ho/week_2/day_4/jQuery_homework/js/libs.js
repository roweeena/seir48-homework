
const $libBtn = $("#lib-button");

const makeMadLib = function() {
  const $noun = $("#noun").val();
  const $adjective = $("#adjective").val();
  const $person = $("#person").val();

  const result = `${$person} really likes ${$adjective} ${$noun}`;

  $("#story").html(result).appendTo("body");
};

$libBtn.click(makeMadLib);
