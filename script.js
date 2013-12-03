var navigationBarIsAnimating = false;

$(document).ready(function() {
    $("header h1").animate({"top":"35px", opacity:1}, 1000, function() {
        setTimeout(function() {
            $("header p").animate({"top":"10px", opacity:1}, 1000);
        }, 200);
    });
});

/* the parallax effect for the header */
$(window).scroll(function() {
    var currentScrollValue = $(window).scrollTop();
    $("header").css("top", "-" + (currentScrollValue / 5) + "px");
    if (!navigationBarIsAnimating) {
        if (currentScrollValue > 500 && $("#navbar").css("opacity") == 0) {
            navigationBarIsAnimating = true;
            $("#navbar").animate({opacity:1}, 500, function() {
                navigationBarIsAnimating = false;
            });
        } else if (currentScrollValue < 500 && $("#navbar").css("opacity") == 1) {
            navigationBarIsAnimating = true;
            $("#navbar").animate({opacity:0}, 500, function() {
                navigationBarIsAnimating = false;
            });
        }
    }
});

/* the mouse over background animation effect for the links in the navigation bar */
$("#navbar h2").mouseenter(function() {
    $(this).animate({backgroundColor:"rgba(214, 99, 96, 0.5)"}, 100);
});

$("#navbar h2").mouseleave(function() {
    $(this).animate({backgroundColor:"rgba(214, 99, 96, 0)"}, 100);
});