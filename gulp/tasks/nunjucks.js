/**
 * Created by shawnsandy on 12/23/15.
 */

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function(){

    nunjucksRender.nunjucks.configure(['src/templates'], {watch: false});
    return gulp.src('src/pages/**/*.+(html|nunjucks)')
        .pipe(nunjucksRender())
        .pipe(gulp.dest('public'));

});