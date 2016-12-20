var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    less = require('gulp-less');;


gulp.task('scripts', function() {
  return gulp.src(['modules/**/*.js',"js/*.js"])
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function () {
  return gulp.src('./*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('img', function () {
  return gulp.src('./img/*.*')
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('dev', function() {
  gulp.start('scripts', 'styles', 'img');
})