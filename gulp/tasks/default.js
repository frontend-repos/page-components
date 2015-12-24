//default.js
var gulp = require('gulp');
var sync = require('browser-sync');

gulp.task('default', function () {
//default function
});

gulp.task('watch-nunjucks', function () {
    gulp.watch('src/**/*.html', ['nunjucks']).on("change", sync.reload);
});

gulp.task('serve',['watch-nunjucks'], function(){
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
