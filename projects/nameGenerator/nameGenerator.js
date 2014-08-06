/* some words taken from Adrien Friggeri (afriggeri, https://gist.github.com/afriggeri) */

var adjectives = ["something's"];
var nouns = ["wrong"];
var didPress = false;

$(document).ready(function() {
    $.get("adjectives.txt", function(listOfAdjectives) {
        adjectives = listOfAdjectives.split("\n");
        adjectives.pop();
        $.get("nouns.txt", function(listOfNouns) {
            nouns = listOfNouns.split("\n");
            nouns.pop();

            newName();
            $("#name").animate({opacity: 1}, 250);

            $(document).keydown(function(key) {
                if (key.keyCode == '32') {
                    if (!didPress) {
                        didPress = true;
                        $("p").animate({opacity: 0}, 1000);
                    }

                    newName();
                }
            });

            document.addEventListener("touchstart", function(e) {
                e.preventDefault();
                if (!didPress) {
                    didPress = true;
                    $("p").animate({opacity: 0}, 1000);
                }

                newName();
            });

            // tell the user that they can press any key
            setTimeout(function() {
                if (!didPress) {
                    $("p").animate({opacity: 1}, 1000);
                }
            }, 2000);

            $("#nameContainer").fitText();
            $("#tipContainer").fitText();
        });
    });
});

function newName() {
    $("#name").text(generateName());
}

function generateName() {
    var adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var noun = nouns[Math.floor(Math.random() * nouns.length)];
    var name = capitalizeFirstLetter(adjective) + " " + capitalizeFirstLetter(noun);
    
    return name;
}

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

