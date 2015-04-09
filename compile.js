var fs = require('fs')

var rework = require('rework');
var myth = require('myth');
var clean = require('clean-css');
var inherit = require('rework-inherit');
var im = require('rework-import');

var watch = require('watch')

watch.createMonitor('css/stylesheets', function(m) {
    m.on("created", recompile);
    m.on("changed", recompile);
    m.on("removed", recompile);
});

recompile();

function recompile() {
    console.log("Compiling...");

    try {
        var rawCSS = fs.readFileSync('css/stylesheets/style.css', 'utf-8');
        var css = rework(rawCSS)
            .use(im({ path: 'css/stylesheets' }))
            .use(myth( { compress: true } ))
            .toString()

        css = new clean().minify(css).styles;

        fs.writeFileSync('css/build/build.css', css);
    } catch(e) {
        console.log("Could not compile, error present.");
    }
}

