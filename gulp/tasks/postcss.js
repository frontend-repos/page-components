/**
 * Created by shawnsandy on 12/27/15.
 */
var gulp = require('gulp');
var argv = require('yargs').argv;
var plugin = require('gulp-load-plugins')();

//variables
var destination = 'public/css/';
if(argv.destination == "production") destination = 'app/css';
gulp.task('post:css', function(){});

gulp.task('rucksack', function(){
   return gulp.src('src/css/**/*.css')
    .pipe(plugin.rucksack())
    .pipe(gulp.dest(destination))
});