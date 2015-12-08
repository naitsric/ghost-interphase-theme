var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');

gulp.task('templates', function(){
    gulp.src(['*.hbs'])
        .pipe(handlebars())
        .pipe(defineModule('node'))
        .pipe(gulp.dest('build/templates/'));
});