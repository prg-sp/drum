const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sasas', () => {
	return gulp
		.src('./src/scss/App.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(gulp.dest('./src'));
});

// uzdtuotis 'ziureti' stebti scss failu pasikeitima
gulp.task('ziureti', () => {
	gulp.watch('./src/**/**/*.scss', gulp.series(['sasas']));
});
