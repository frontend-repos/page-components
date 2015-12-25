/**
 * Created by shawnsandy on 12/24/15.
 */
var gulp = require('gulp');
var plugin = require('gulp-load-plugins')();

gulp.task('lint', function(){
   gulp.src('src/js/**/*.js')
       .pipe(plugin.eslint())
       .pipe(plugin.eslint.format())
       .pipe(plugin.eslint.result(function (result) {
           // Called for each ESLint result.
           console.log('ESLint result: ' + result.filePath);
       }));
});