var canvas;
var context;

$(function() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    
    debug();
    
    var offset = 0;
    console.log("drawing with offset: " + offset + "...");
    for (var x = offset; x < 1 + offset; x += 1/canvas.width) {
        for (var y = offset; y < 1 + offset; y += 1/canvas.height) {
            var a = perlinNoise(x, y) * 100;
            var str = "rgba(" + a + ", " + a + ", " + a + ", 1)";
            context.fillStyle = str;
            context.fillRect((x - offset) * canvas.width, (y - offset) * canvas.height, 1, 1);
        }
    }
    console.log("...done");
});

function debug() {
    var a = Math.random();
    var b = Math.random();
    
    console.log("a:" + a, ", b:" + b);
    
    console.log("noise:" + noise(a, b));
    console.log("smooth:" + smooth(a, b));
    console.log("interpolated:" + InterpolatedNoise_1(a, b));
    console.log("perlin:" + perlinNoise(a, b) * 255);
}

// a seedable random number generator
function rand(x, y) {
    n = x + y * 57;
    n = (n << 13) ^ n;
    return (1 - ((n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824);
}

function noise(x, y) {
    return rand(x, y);
}

function smooth(x, y) {
    corners = (noise(x - 1, y - 1) + noise(x + 1, y - 1) + noise(x - 1, y + 1) + noise(x + 1, y + 1)) / 16
    sides   = (noise(x - 1, y) + noise(x + 1, y) + noise(x, y - 1) + noise(x, y + 1)) /  8
    center  = noise(x, y) / 4
    return corners + sides + center;
}

function Interpolate(a, b, x) {
    ft = x * 3.1415927
    f = (1 - Math.cos(ft)) * .5

    return  a*(1-f) + b*f;
}

function InterpolatedNoise_1(x, y) {
    var integer_X = ~~x;
    var fractional_X = x - integer_X;

    var integer_Y    = ~~y;
    var fractional_Y = y - integer_Y;

    v1 = smooth(integer_X,     integer_Y);
    v2 = smooth(integer_X + 1, integer_Y);
    v3 = smooth(integer_X,     integer_Y + 1);
    v4 = smooth(integer_X + 1, integer_Y + 1);

    i1 = Interpolate(v1 , v2 , fractional_X);
    i2 = Interpolate(v3 , v4 , fractional_X);

    return Interpolate(i1 , i2 , fractional_Y);
}

function perlinNoise(x, y) {
    total = 0;
    p = 0.65;
    n = 6;

    for (var i = 0; i < n; i++) {
        frequency = Math.pow(2, i);
        amplitude = Math.pow(p, i);
        total = total + InterpolatedNoise_1(x * frequency, y * frequency) * amplitude;
    }
    return total;
}