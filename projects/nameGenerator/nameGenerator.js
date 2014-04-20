/* some words taken from Adrien Friggeri (afriggeri, https://gist.github.com/afriggeri) */

var adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
    "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
    "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
    "billowing", "broken", "cold", "damp", "falling", "frosty", "green",
    "long", "late", "lingering", "bold", "little", "morning", "muddy", "old",
    "red", "rough", "still", "small", "sparkling", "throbbing", "shy",
    "wandering", "withered", "wild", "black", "young", "holy", "solitary",
    "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine",
    "polished", "ancient", "purple", "lively", "nameless", "blessed", "light"];

var nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
    "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
    "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
    "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
    "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
    "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
    "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
    "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper",
    "frog", "smoke", "star", "child", "twine", "planet", "earth"];

var didPress = false;

$(document).ready(function() {
    newName();
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