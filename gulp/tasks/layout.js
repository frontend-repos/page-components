//converts your layouts to full html pages - all your layout task
var config = require('../config.json');//.layouts;
var gulp = require('gulp'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    fileinclude = require('gulp-file-include');


gulp.task('include_layouts', function () {

    gulp.src( config.layouts.srcFiles, {
        base: config.layouts.src
    })
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
      .pipe(notify('Your layout files have been generated'))
        .pipe(gulp.dest(config.layouts.dest));
});

gulp.task('layout:watch', ['browser-sync'],  function () {
    gulp.watch(config.layouts.srcCss, ['browser-sync:notify'])
    gulp.watch(config.layouts.srcHtml, ['include_layouts', 'browser-sync:notify'])

});

gulp.task('layout', ['include_layouts','browser-sync'], function () {
    gulp.src(config.layouts.src + '/index.html')
        .pipe(notify('Watching your layout files'));
});
