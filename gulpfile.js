var gulp         = require("gulp");
var sass         = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("themes/tatemeatworks/static/scss/main.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("themes/tatemeatworks/static/css"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("themes/tatemeatworks/static/scss/**/*", ["scss"])
})