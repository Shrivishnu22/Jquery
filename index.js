$("h1").css("color", "pink");

$("body").keypress(function(event) {
    $("h1").text(event.key);
});