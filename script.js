$.ajax({
    type: "GET",
    url: "https://api.github.com/users/hamdanjaveed/repos?sort=updated",
    dataType: "json",
    success: function(repos) {
        for (var i = 0; i < 6; i++) {
            console.log(repos[i]);
            
            $("#currentWork").append('<a href="' + repos[i].html_url + '"><div class="project" style="background-color:' + getColorForLanguage(repos[i].language) + ';"><h2>' +repos[i].name+ '</h2><h1>' + repos[i].name.charAt(0).toUpperCase() + '</h1></div></a>');
        }
    }
});

var cssColor = "#ADD8E6"
var defaultColor = "#F2F1ED"

function getColorForLanguage(lang) {
    if (lang == "CSS") {
//        return cssColor;
    }
    
    return defaultColor;
}

$(document).ready(function() {
    $(window).scroll(function() {
        var s = $(window).scrollTop();
        $("#background").css("top", "-" + (s/5) + "px");
        $("#landingContainer h1").css("bottom", "-230" - (s/3) + "px");
        $("#landingContainer h1").css("opacity", (500 - s) / 500);
        
        $("#landingContainer a").css("bottom", "-290" - (s/3) + "px");
        $("#landingContainer a").css("opacity", (280 - s) / 280);
    });
});