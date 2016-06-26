'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var minify = require('gulp-minify');

//Specify dependencies
gulp.task('default', ['html', 'css', 'js']);

//HTML
gulp.task('html', function(){
  gulp.src('./index.html')
    .pipe(gulp.dest('./public'))
});


//Convert Sass into CSS
gulp.task('css', function(){
   gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public'));
});

//JS
gulp.task('js', function(){
   gulp.src('app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./public'))
});

//Watch to run automatic updates
gulp.task('watch', function(){
  gulp.watch('./index.html', ['html'])
  gulp.watch('./sass/*.scss', ['css'])
  gulp.watch('./*.js', ['js']);
});
