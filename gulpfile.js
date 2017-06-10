var gulp = require('gulp')
		watch = require('gulp-watch'),
		less = require('gulp-less');

gulp.task('less', function () {

  gulp.src('./src/styles/*.less')
    	.pipe(less())
    	.pipe(gulp.dest('./dist/css'));

});

gulp.task('less-watch', function () {

	return watch('src/styles/**/*.less', function () {

		return gulp.src('src/styles/styles.less')
    	.pipe(less())
    	.pipe(gulp.dest('./dist/css'));

	});

});

gulp.task('default', ['less']);
