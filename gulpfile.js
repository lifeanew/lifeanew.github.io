var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Watch Files For Changes & Reload
gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js'], reload);
});
