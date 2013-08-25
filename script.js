$(document).ready(function() {
    $(window).scroll(function() {
        var s = $(window).scrollTop();
        $("header").css("top", "-" + (s/5) + "px");
    });
    console.log("hi");
});