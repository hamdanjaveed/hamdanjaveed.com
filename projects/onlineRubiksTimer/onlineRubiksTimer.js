var isRunning = false;
var time = 0;
var startTime = 0;

if (window.performance.now) {
    getTimestamp = function() { return window.performance.now(); };
} else {
    if (window.performance.webkitNow) {
        getTimestamp = function() { return window.performance.webkitNow(); };
    } else {
        getTimestamp = function() { return new Date().getTime(); };
    }
}

$(document).ready(function() {
    $(document).keydown(function(key) {
        if (key.keyCode == '32') {
            isRunning = !isRunning;
            if (isRunning) {
                startTime = getTimestamp();
                time = 0;
            }
        }
    });
    setInterval(timer, 1);
});

function timer() {
    if (isRunning) {
        time = getTimestamp() - startTime;
        $("#timer").text(formatTime(time / 1000));
    }
}

function formatTime(time) {
    var min = Math.floor(time / 60);
    time -= min * 60;
    var minString = (min) ? min + ":" : "";
    var secondsString = Math.floor(time);
    var msString = (time - Math.floor(time)) * 100;
    console.log(msString);
    return minString + ((secondsString < 10 && min) ? "0" + secondsString : secondsString) + ":" + Math.round(msString);
}