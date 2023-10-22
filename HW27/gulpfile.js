const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const scss = gulpSass(sass);
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const BUILD_FOLDER = './dist';
const BUILD_JS_FOLDER = './dist/js';
const BUILD_CSS_FOLDER = './dist/css';
const JS_FOLDER = './src/js/*.js';
const SCSS_FOLDER = './src/scss/*.scss';
const HTML_FOLDER = './src/*.html';
const ESLINT_RULES = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  "rules":{
      "camelcase": 1,
      "comma-dangle": [2, "always-multiline"],
      "quotes": [2, 'single'],
      "semi": [2, "always"]
  }
}

// Browser sync
function browserSyncTask(cb) {
  browserSync.init({
		server: {
			baseDir: 'dist',
		},
    notify: false,
	});
  cb();
}

// Browser sync reload
function browsersyncReload(cb){
  browserSync.reload();
  cb();
}

// Watch
function watcher() {
  return gulp.watch([JS_FOLDER, SCSS_FOLDER, HTML_FOLDER], gulp.series(jsTask, scssTask, htmlTask, browsersyncReload));
}

// JS
function jsTask() {
  return gulp.src(JS_FOLDER)
  .pipe(eslint(ESLINT_RULES))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
  .pipe(concat('build.min.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(gulp.dest(BUILD_JS_FOLDER));
}

// Scss Styles
function scssTask() {
  return gulp.src(SCSS_FOLDER)
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(gulp.dest(BUILD_CSS_FOLDER));
}

// HTML
function htmlTask() {
  return gulp.src(HTML_FOLDER)
  .pipe(gulp.dest(BUILD_FOLDER));
}

gulp.task('default', gulp.series(jsTask, scssTask, htmlTask, browserSyncTask, watcher));
