var gulp = require('gulp');

var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task( 'styles', function()
{
	gulp.src( 'src/scss/index.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'assets/css' ) )
		.pipe( livereload() );
});

gulp.task( 'watch', function()
{
	livereload.listen();
	gulp.watch( 'src/scss/**/*.scss', [ 'styles' ] );
});

gulp.task( 'default', [ 'watch' ] );