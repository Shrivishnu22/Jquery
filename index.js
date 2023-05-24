// $("h1").css("color", "pink");  // to provide colour for the heading tag

// $("body").keypress(function(event) {   // in body need to  perform operation as we pass an even 
//     $("h1").text(event.key);           // here the event make decision to move to above line of code
// });

// $("red").css("color", "red"); 
// $("blue").css("color", "blue"); 
// $("green").css("color", "green"); 
// $("yellow").css("color", "yellow"); 
// $("orange").css("color", "orange"); 

// $("body").keypress(function(event) {
//     $("#red").text(event.key);
//     $("#blue").text(event.key);
//     $("#green").text(event.key);
//     $("#yellow").text(event.key);
//     $("#orange").text(event.key);
// });

// document.querySelector("body").classList.add("center");

$(".center").css({  // center class which implement the center of the page
    position: "absolute",   // Make sure on absolute position
    left: "40%", top: "40%"  // adjust the area by left and right space
    //transform: "translate(-50%, -50%)"  // Make transition for reliable use
})

$(document).ready(function() {     // Here (document) represent the DOM elements of HTML and ready is an method make a function on it..!
    
    // Here we are with #red a button which has an method of click to execute an function created further...!
    $("#red").click(function() { 
        $("h1").css("color", "red");   // make h1 id to color red 
    });

    // Same implemented for all other buttons..!
    $("#blue").click(function() {
        $("h1").css("color", "blue");
    });

    $("#green").click(function() {
        $("h1").css("color", "green");
    });

    $("#yellow").click(function() {
        $("h1").css("color", "yellow");
    });

    $("#orange").click(function() {
        $("h1").css("color", "orange");
    });

    $('.center-me').centerElement();
});