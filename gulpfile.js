const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function buildStyles() {
  return gulp.src('./Assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./Assets/css')); 
}

exports.buildStyles = buildStyles;

exports.watch = function () {
  gulp.watch('./Assets/scss/**/*.scss', gulp.series('buildStyles'));
};
