$(".stepOne").click(function() {
    $(".stepOne").fadeOut();
    $(".stepTwo").fadeIn();
    $(".bread").css("display", "block");
});
$(".bread").dblclick(function() {
    $(".bread").fadeOut();
    $(".stepTwo").fadeOut();
    $(".stepThree").fadeIn();
    $(".hidden").fadeIn();
});
$(".hidden").click(function() {
    $(".hidden").fadeOut();
     $(".stepThree").fadeOut();
    $(".dog").fadeIn();
    $(".dog2").fadeIn();
});
$(".dog").mouseenter(function() {
    $(".dog3").fadeIn();
    $(".dog2").fadeOut();
});
$(".dog").mouseleave(function() {
    $(".dog3").fadeOut();
    $(".treasure").fadeIn();
    $(".dog").fadeOut();
    $(".fox").fadeIn();
});