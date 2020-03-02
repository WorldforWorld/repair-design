const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Minimizes CSS files and adds the ending .min.css to them
gulp.task('styles', function(done) {
  gulp.src(['./*.css'])
  .pipe(concat('style.min.css')) //  объединяет CSS-файлы и переименовываем
  .pipe(autoprefix('last 2 versions')) // указывает текущую и предыдущие версии всех браузеров
  .pipe(minifyCSS()) // минимизирует все CSS-скрипты из папки  и копирует в папку сборки 
  .pipe(gulp.dest('css/')); // вызывает метод ‘dest’ с аргументом, который представляет целевой каталог
  done();
});