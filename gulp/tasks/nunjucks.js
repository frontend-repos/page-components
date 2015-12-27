/**
 * Created by shawnsandy on 12/23/15.
 */

var gulp = require('gulp');
var argv = require('yargs').argv;
var plugin = require('gulp-load-plugins')
var nunjucksRender = require('gulp-nunjucks-render');
var dest = 'public';
if(argv.build == "production") dest = 'dist';

gulp.task('nunjucks', function(){
    nunjucksRender.nunjucks.configure(['src/templates'], {watch: false});
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
        .pipe(nunjucksRender())
        .pipe(gulp.dest(dest));
});