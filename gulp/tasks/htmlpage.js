var gulp = require('gulp');
var prompt = require('gulp-prompt'),
    util = require('gulp-util'),
    rename = require('gulp-rename');
var page_name = 'new_html';

gulp.task('_htmlpage', function(){

       return gulp.src('./src/inc/' , { read : false })
        .pipe(prompt.prompt({
            type: 'input',
            name: 'htmlpage',
            message: 'Enter the page name'

        }, function(res){
            page_name = res.htmlpage + '.html';
        })

);

});



gulp.task('create:layout',['gulp:layout'], function(){
    gulp.src(buildPath + '**/*.*')
        .pipe(changed('layouts/' + layout_dir))
        .pipe(gulp.dest('layouts/' + layout_dir))
        //.pipe(print())
        //.pipe(notify('Your new layout,' + layout_dir + ' has been created'));
});
