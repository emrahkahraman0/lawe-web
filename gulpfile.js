var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync').create();

//Gulp-Sass
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.scss").
    pipe(sass({
        includePaths: ['node_modules']
    })).
    pipe(concat('lawe.min.css')).
    pipe(cleanCss()).
    pipe(gulp.dest("dist/css/")).
    pipe(browserSync.stream());
});

//Gulp-Js
gulp.task('js', function() {
    return gulp.src('app/script/**/*.js').
    pipe(concat('lawe.min.js')).
    pipe(uglify()).
    pipe(gulp.dest('dist/js/')).
    pipe(browserSync.stream());
});

//BrowserSync
gulp.task('server', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("app/sass/**/*.scss", gulp.series('sass'));
    gulp.watch("app/script/**/*.js", gulp.series('js'));
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('watch', () => {
    gulp.watch("app/sass/**/*.scss", gulp.task('sass'));
    gulp.watch("app/script/**/*.js", gulp.task('js'));
});

gulp.task('default', gulp.series('sass', 'js', 'server', 'watch'));