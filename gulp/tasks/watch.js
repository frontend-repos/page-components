/**
 * Created by shawnsandy on 12/23/15.
 */

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('watch-nunjucks', function () {
    watch('src/**/*.html', function(){
        gulp.start('nunjucks');
    })
});