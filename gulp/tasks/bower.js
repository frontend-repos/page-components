/**
 * bower task
 */

var config = require("../config.json"),
    gulp = require("gulp"),
    util = require("gulp-util"),
    bower_files = require("main-bower-files"),
    print = require("gulp-print");


gulp.task("bower", function () {
    gulp.src(bower_files(), {
        base: "./src/package"
    }).pipe(gulp.dest(config.app.build + config.bower.install_dir))
        .pipe(print())
});