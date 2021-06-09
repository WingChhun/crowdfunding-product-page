const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const { src, dest, watch, series } = require('gulp');

// SASS task
function scssTask() {
  return src('sass/main.scss', {
    sourcemaps: true,
  })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(
      dest('dist', {
        sourcemaps: '.',
      })
    );
}

function jsTask() {
  return src('scripts/*.js', {
    sourcemaps: true,
  })
    .pipe(terser())
    .pipe(
      dest('dist', {
        sourcemaps: '.',
      })
    );
}

// Browsersync Tasks
function browserSyncServer(cb) {
  browserSync.init({
    server: {
      baseDir: '.',
    },
  });

  // Complete
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

// watch task
function watchTask() {
  watch('*.html', browserSyncReload);
  watch(
    ['sass/*.scss', 'scripts/*.js'],
    series(scssTask, jsTask, browserSyncReload)
  );
}

// Default gulp task
exports.default = series(scssTask, jsTask, browserSyncServer, watchTask);
