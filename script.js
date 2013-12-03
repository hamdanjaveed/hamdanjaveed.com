var fadeOutTimer = null;
var fadingIn = false;

$(document).ready(function() {
    $("html").mousemove(function() {
        if (!fadingIn) {
            $(".fadein").stop().animate({opacity: "0.5"}, 500);
            fadingIn = true;
            if ($(".fadein").css("opacity") == 0.5) {
                fadingIn = false;
            }
        }
        if (fadeOutTimer != null) {
            clearTimeout(fadeOutTimer);
        }
        fadeOutTimer = setTimeout(hide_elements, 1500);
        console.log(fadeOutTimer);
    });
    
    
});
    
function hide_elements() {
    $(".fadein").animate({opacity: "0"}, 500);
    fadingIn = false;
}