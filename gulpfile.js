
"use strict";

var gulp = require("gulp");

var bowerFiles = require('main-bower-files'),

  inject = require('gulp-inject'),
  es = require('event-stream'),
  gulpFilter = require('gulp-filter'),
  order = require("gulp-order"),
  debug = require('gulp-debug'),
  clean = require('gulp-clean'),
  browserSync = require('browser-sync').create();

var paths = {
    webroot: "Client"
};

paths.appJS = paths.webroot+"/app";
paths.appStyle = paths.webroot + "/assets/css/";

gulp.task("clean", function () {
    return gulp.src('./dist', { read: false, force: true })
        .pipe(clean());
});
gulp.task("clean-inject", function () {
    var target = gulp.src(paths.webroot + '/index.html');
    var emptyCSS = gulp.src("*.css");
    var emptyJS = gulp.src(".js");

    return target
      .pipe(inject(emptyCSS, { name: 'bower', relative: false, addRootSlash: false, empty: true }))
      .pipe(inject(emptyCSS, { name: 'inject', relative: false, addRootSlash: false, empty: true }))
      .pipe(inject(emptyJS, { name: 'bower', relative: false, addRootSlash: false, empty: true }))
      .pipe(inject(emptyJS, { name: 'inject', relative: false, addRootSlash: false, empty: true }))
      .pipe(gulp.dest(paths.webroot + "/"));
});
gulp.task("inject-js", function () {
    var target = gulp.src('index.html');
    var sourcesJSFile = gulp.src(paths.appJS + "/**/*.js", { read: false });
    var cssFiles = gulp.src(paths.appStyle + "/**/*.css");
    var bowerSource = gulp.src(bowerFiles(), { read: false })
    return target
      .pipe(inject(bowerSource, { name: 'bower', relative: false, addRootSlash: false }))
      .pipe(debug())
      .pipe(inject(es.merge(cssFiles, sourcesJSFile), { relative: false, addRootSlash: false }))
      .pipe(gulp.dest(""));
});

gulp.task('js-watch', ['inject-js'], function () {
    browserSync.reload();
})

gulp.task("serve", ['inject-js'], function () {
    browserSync.init({
        server: "./"
    });
    var watchList = [
      (paths.appJS + "/**/*"),
      (paths.webroot + "/index.html"),
      (paths.appStyle + "/**/*")
    ]

    gulp.watch(watchList, ['js-watch'])
});
gulp.task("default", function () {
    
});
