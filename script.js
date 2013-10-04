var fadeOutTimer = null;

$(document).ready(function() {
    $("html").mousemove(function() {
        $(".fadein").stop().animate({opacity: "0.5"}, 500);
        if (fadeOutTimer != null) {
            clearTimeout(fadeOutTimer);
        }
        fadeOutTimer = setTimeout(hide_elements, 1500);
        console.log(fadeOutTimer);
    });
    
    
});
    
function hide_elements() {
    $(".fadein").animate({opacity: "0"}, 500);
}