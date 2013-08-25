$(document).ready(function() {
    /* the parallax effect for the header */
    $(window).scroll(function() {
        var currentScrollValue = $(window).scrollTop();
        $("header").css("top", "-" + (currentScrollValue / 5) + "px");
        if (currentScrollValue > 500 && $("#navbar").css("opacity") == 0) {
            $("#navbar").animate({opacity:1}, 500);
        } else if (currentScrollValue < 500 && $("#navbar").css("opacity") == 1) {
            $("#navbar").animate({opacity:0}, 500);
        }
    });
    
    /* the mouse over background animation effect for the links in the navigation bar */
    $("#navbar h2").mouseenter(function() {
        $(this).animate({backgroundColor:"rgba(214, 99, 96, 0.5)"}, 100);
    });
    $("#navbar h2").mouseleave(function() {
        $(this).animate({backgroundColor:"rgba(214, 99, 96, 0)"}, 100);
    });
});