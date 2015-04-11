// ----- Imports ----- //
var fs = require('fs');

// Rework
var rework = require('rework');
var myth = require('myth');
var clean = require('clean-css');
var inherit = require('rework-inherit');
var imprt = require('rework-import');

// CSSComb
var comb = new require('csscomb')('zen');

// ES6 Module Transpiler
var transpiler = require('es6-module-transpiler');
var Container = transpiler.Container;
var FileResolver = transpiler.FileResolver;
var BundleFormatter = transpiler.formatters.bundle;

// Watch
var watch = require('watch');

// ----- File paths ----- //
// Root folders
var stylesFilePath = "css";
var scriptsFilePath = "scripts";
var buildFilePath = "build";

// Source files
var sourceStyleFilePath = stylesFilePath + "/main.css";
var sourceScriptFilePath = scriptsFilePath + "/main.js";

// Build files
var buildStyleFilePath = buildFilePath + "/build.css";
var buildScriptFilePath = buildFilePath + "/build.js";

// ----- Styles ----- //
watch.createMonitor(stylesFilePath, function(m) {
    m.on("created", recompileStyles);
    m.on("changed", recompileStyles);
    m.on("removed", recompileStyles);
});

function recompileStyles() {
    try {
        // Format css files
        comb.processPath(stylesFilePath);

        // Use rework
        var rawCSS = fs.readFileSync(sourceStyleFilePath, 'utf-8');

        var css = rework(rawCSS)
            .use(imprt({ path: stylesFilePath })) // use @import
            .use(myth({ compress: true })) // use myth
            .toString()

        // Minify
        css = new clean().minify(css).styles;

        fs.writeFileSync(buildStyleFilePath, css);
        
        console.log(new Date() + ": Compiled styles");
    } catch(e) {
        console.log(new Date() + ": Could not compile styles: ", e);
    }
}

// ----- Scripts ----- //
watch.createMonitor(scriptsFilePath, function(m) {
    m.on("created", recompileScripts);
    m.on("changed", recompileScripts);
    m.on("removed", recompileScripts);
});

function recompileScripts() {
    var container = new Container({
      resolvers: [new FileResolver([scriptsFilePath])],
      formatter: new BundleFormatter()
    });

    container.getModule('main');
    container.write(buildScriptFilePath);

    console.log(new Date() + ": Compiled scripts");
}

// Compile everything once upon startup
recompileStyles();
recompileScripts();
