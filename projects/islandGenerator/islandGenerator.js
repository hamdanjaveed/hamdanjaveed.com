var canvas;
var context;

var terrain;

$(document).ready(function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var t = new Time();
    
    console.log("loading terrain...");
    t.start();
    var img = $("img")[0];
    var imgC = $('<canvas/>')[0];
    img.width = canvas.width;
    img.height = canvas.height;
    imgC.width = img.width;
    imgC.height = img.height;
    imgC.getContext('2d').drawImage(img, 0, 0, 100, 100);
    t.end();
    console.log("loaded" + t.print());
    
    console.log("creating terrain...");
    t.start();
    terrain = new Array(canvas.width);
    for (var x = 0; x < terrain.length; x++) {
        terrain[x] = new Array(canvas.height);
        for (var y = 0; y < terrain[x].length; y++) {
            terrain[x][y] = imgC.getContext("2d").getImageData(x, y, 1, 1).data[0];
        }
    }
    t.end();
    console.log("created" + t.print());
    
    draw();
});

function draw() {
    console.log("drawing...");
    var t = new Time();
    t.start();
    for (var x = 0; x < terrain.length; x++) {
        for (var y = 0; y < terrain[x].length; y++) {
            context.fillStyle = getTile(x, y);
            context.fillRect(x, y, 1, 1);
        }
    }
    t.end();
    console.log("finished" + t.print());
}

function getTile(x, y) {
    var t = terrain[x][y];
    if       (t < 50) { // deep sea
        return "#2C5197";
    } else if (t < 60) { // normal sea
        return "#50A6C2";
    } else if (t < 120) { // shallow sea
        return "#32A4EB";
    } else if (t < 130) {
        return "#FFE303";
    } else if (t < 150) {
        return "#79973F";
    } else if (t < 170) {
        return "#385E0F";
    } else if (t < 230) {
        return "#7B3F00";
    } else {
        return "#EED5B7";
    }
}

var Time = function() {
    this.time = 0;
    this.start = function() {
        time = new Date().getTime();
    }
    
    this.end = function() {
        time = new Date().getTime() - time;
    }
    
    this.print = function() {
        return " in: " + time + "ms";
    }
}