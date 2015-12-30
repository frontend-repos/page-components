/**
 * Created by shawnsandy on 12/27/15.
 */
var gulp = require('gulp');
var argv = require('yargs').argv;
var plugin = require('gulp-load-plugins')();
var rucksack = require('gulp-rucksack');
var stylelint = require('stylelint');

//variables
var dest = 'public/css/';
if (argv.build == "production") dest = 'app/css/';

var processors = [
    require('autoprefixer'),
    require('precss'),
    require('cssnext')
];

gulp.task('postcss', ['rucksack','post:css'], function(){});

gulp.task('post:css', function () {
    return gulp.src('./src/css/*.css')
        .pipe(plugin.postcss(processors))
        .pipe(gulp.dest(dest));
});

gulp.task('rucksack', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(rucksack())
        .pipe(gulp.dest(dest))
});