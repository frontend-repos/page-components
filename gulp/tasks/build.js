/**
 * Created by studio-mac on 1/23/15.
 */
var config =  require('../config.json').buildConfig,
    gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    newer = require('gulp-newer'),
    print =  require('gulp-print');



/**
 * a basic file build good for theme starter
 */
gulp.task('build', function(){

    gulp.src(config.basicFiles, {base : './src/'})
        .pipe(newer(config.baseBuild))
        .pipe(print())
        .pipe(gulp.dest(config.baseBuild));

})


/**
 * gulp task
 */
gulp.task('build:gulp', function(){

    gulp.src(config.gulpFiles, {base : './'})
        .pipe(newer(config.gulpBuild))
        .pipe(print())
        .pipe(gulp.dest(config.gulpBuild));

})

