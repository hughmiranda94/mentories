const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function(){
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function(){

  browserSync.init({
    server: './public/'
  })
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('.*.html').on('change', browserSync.reload);
  gulp.watch('./*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);