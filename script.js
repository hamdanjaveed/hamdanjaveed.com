$.ajax({
    type: "GET",
    url: "https://api.github.com/users/hamdanjaveed/repos?sort=updated",
    dataType: "json",
    success: function(repos) {
        for (var i = 0; i < 6; i++) {
            console.log(repos[i]);
            
            $("#currentWork").append('<a href="' + repos[i].html_url + '"><div class="project" style="background-color:' + getColorForLanguage(repos[i].language) + ';"><h2>' +repos[i].name+ '</h2><h1>' + repos[i].name.charAt(0).toUpperCase() + '</h1><div class="projectDescription"><br /><br /><br /><br /><br /><br /><p>' + repos[i].description + '</p></div></div></a>');
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
    var s = skrollr.init();
});