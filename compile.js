var fs = require('fs');

var rework = require('rework');
var myth = require('myth');
var clean = require('clean-css');
var inherit = require('rework-inherit');
var imprt = require('rework-import');

var watch = require('watch');

var stylesFilePath = "css/stylesheets";
var sourceFilePath = stylesFilePath + "/main.css";
var buildFilePath = "css/build/build.css";

watch.createMonitor(stylesFilePath, function(m) {
    m.on("created", recompile);
    m.on("changed", recompile);
    m.on("removed", recompile);
});

function recompile() {
    try {
        var rawCSS = fs.readFileSync(sourceFilePath, 'utf-8');

        var css = rework(rawCSS)
            .use(imprt({ path: stylesFilePath }))
            .use(myth({ compress: true }))
            .toString()

        css = new clean().minify(css).styles;

        fs.writeFileSync(buildFilePath, css);
        
        console.log(new Date() + ": Compiled.");
    } catch(e) {
        console.log(new Date() + ": Could not compile: ", e);
    }
}

recompile();

