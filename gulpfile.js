var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('build-js', function() {
    return gulp.src('dist/**/*.js')
        .pipe(concat('angular-country-select.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
