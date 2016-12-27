document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        var container = document.getElementById("github");

        // var req = new XMLHttpRequest();
        // req.addEventListener("load", reqListener);
        // req.open("GET", "https://api.github.com/users/hamdanjaveed/repos?sort=updated");
        // req.send();
        //
        // function reqListener() {
        //     var repos = JSON.parse(this.responseText);
        //     repos = repos.map(function(r) {
        //         return {
        //             url: r.url,
        //             name: r.name,
        //             description: r.description,
        //             language: r.language
        //         }
        //     });
        //
        //     repos = repos.slice(0, 3);
        //     console.log(JSON.stringify(repos));
        // }

        var repos = [{"url":"https://api.github.com/repos/hamdanjaveed/Empty-OpenGL-LWJGL-Project","name":"Empty-OpenGL-LWJGL-Project","description":"An Empty OpenGL LWJGL Project template that can be used for quickly starting up any future LWJGL projects.","language":"Java"},{"url":"https://api.github.com/repos/hamdanjaveed/Join-Lines","name":"Join-Lines","description":"A Brackets extension that joins lines.","language":"JavaScript"},{"url":"https://api.github.com/repos/hamdanjaveed/Moments","name":"Moments","description":"A way to capture and store moments.","language":"Objective-C"}];
        for (var i = 0; i < repos.length; i++) {
            var project = repos[i];

            var section = document.createElement("section");
            section.className = "project";

            var icon = document.createElement("object");
            icon.className = "project_icon";
            icon.type = "image/svg+xml";
            icon.data = "default.svg";
            section.appendChild(icon);

            var project_description_container = document.createElement("div");
            project_description_container.className = "project_description_container";

            var name = document.createElement("h3");
            name.className = "project_name text_weight_normal";
            name.innerText = project.name;
            project_description_container.appendChild(name);

            var project_description = document.createElement("p");
            project_description.className = "project_description text_light";
            project_description.innerText = project.description;
            project_description_container.appendChild(project_description);

            section.appendChild(project_description_container);
            container.appendChild(section);
        }

        container.style.display = "block";
    }
}
