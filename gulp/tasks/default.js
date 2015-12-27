//default.js

var sync = require('browser-sync');
var gulp = require('gulp');
var argv = require('yargs').argv;
var plugin = require('gulp-load-plugins');

if(argv.destination == 'build'){
   console.log("build it");
}
gulp.task('default', function () {
//default function
    if(argv.destination == 'build'){
        console.log("build it");
    }
});

gulp.task('watch-nunjucks', function () {
    gulp.watch('src/**/*.html', ['nunjucks']).on("change", sync.reload);
});

gulp.task('watch-js', function(){
    gulp.watch('src/js/**/*.js', ['lint']).on('change', function(){
        console.log('js changes');
    });
})

gulp.task('serve',['watch-nunjucks','watch-js'], function(){
   sync.init({
       server: {
           baseDir: 'public',
           routes: {
               "/packages": "packages",
               "/app": "app",
               "/dist": "dist"
           }
       }
   })
});
