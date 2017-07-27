const gulp = require('gulp');
const traceur = require('gulp-traceur');
const srcPath = 'src/*.js';
const distPath = 'dist';

gulp.task('traceur', () => {
	return gulp
		.src([srcPath])
		.pipe(traceur())
		.pipe(gulp.dest(distPath));

});

gulp.task('watch', () => {
	gulp.watch([srcPath], ['traceur']);
})

gulp.task('default', ['traceur', 'watch']);
