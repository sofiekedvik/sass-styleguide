'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () => {
    return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
