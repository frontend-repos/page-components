//Build a new deploy repo for your application application
//Goto the config file and create your settings

var gulp = require("gulp"),
    util = require("gulp-util"),
    git = require('gulp-git');
var config = require('../config.json').repo;


gulp.task("create-repo", function () {

    util.log(config.test);
    util.beep();

});