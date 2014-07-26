$.ajax({
    type: "GET",
    url: "https://api.github.com/users/hamdanjaveed/repos?sort=updated",
    dataType: "json",
    success: function(repos) {
        for (var i = 0; i < 6; i++) {
            var project =
                '<a href="' + repos[i].html_url + '" target="_blank">\
                    <div class="project" style="background-color:' + repos[i].language + ';">\
                    <br \><br \><br \>\
                        <h1>' + repos[i].name.charAt(0).toUpperCase() + '</h1>\
                    </div>\
                </a>';

            $("#githubFeed").append(project);
        }
    }
});
