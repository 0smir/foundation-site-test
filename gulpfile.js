var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $    = require('gulp-load-plugins')();
var rigger = require('gulp-rigger');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');


// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist/"
    }
  });
});


var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

//html
gulp.task('html', function () {
  gulp.src('src/*.html')
      .pipe(rigger())
      .pipe(gulp.dest('dist/'))
      .pipe(browserSync.stream());
});


//css
gulp.task('css', function () {
  gulp.src('src/stylesheets/**/*.*')
      .pipe(sourcemaps.init())
      .pipe($.sass({
            includePaths: sassPaths
          })
          .on('error', $.sass.logError))
      .pipe(autoprefixer('last 5 version', 'ie 9'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
});


//img
gulp.task('img', function () {
  gulp.src('src/images/**/*.*')
      .pipe(gulp.dest('dist/images'))
      .pipe(browserSync.stream());
});

//js
gulp.task('js', function () {
  gulp.src('src/js/**/*.*')
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());
});

//fonts
gulp.task('fonts', function () {
  gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'))
      .pipe(browserSync.stream());
});


// clean
gulp.task('clean', function() {
  return del('dist');
});

// watch
gulp.task('watch', function () {
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/template/*.html', ['html']);
  gulp.watch('src/stylesheets/**/*.scss', ['css']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/img/**', ['img']);
  gulp.watch('src/fonts/**', ['fonts']);
});

//default
gulp.task('default', [ 'browser-sync', 'html', 'css', 'img', 'js', 'fonts', 'watch']);