/* const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat'); */
const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass").on('change', serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
}
function serveSass() {
  return src("./sass/*.sass")
  .pipe(sass())
  .pipe(dest("./css"))
  .pipe(browserSync.stream());
}
exports.serve = bs;
/* // Minimizes CSS files and adds the ending .min.css to them
gulp.task('styles', function(done) {
  gulp.src(['./*.css'])
  .pipe(concat('style.min.css')) //  объединяет CSS-файлы и переименовываем
  .pipe(autoprefix('last 2 versions')) // указывает текущую и предыдущие версии всех браузеров
  .pipe(minifyCSS()) // минимизирует все CSS-скрипты из папки  и копирует в папку сборки 
  .pipe(gulp.dest('css/')); // вызывает метод ‘dest’ с аргументом, который представляет целевой каталог
  done();
}); */