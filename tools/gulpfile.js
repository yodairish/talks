'use strict';

var gulp = require('gulp');
var merge = require('merge-stream');
var del = require('del');
var postcss = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter = require('postcss-reporter');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');
var cssnano = require('cssnano');

var stylelintConfig = require('./stylelint.config.js');
var buildFolder = 'build/';

/**
 * Gulp has only few methods witch you can use to setup your workflow, but
 * it covers guess all needs, so it's super easy to start using it.
 *
 * Most important - gulp.task
 * With it you define tasks. In first parameter you set the name, in second,
 * function which contains a body of the task.
 */
gulp.task('css:lint', function() {
  /**
   * You should always return stream object, cause then gulp will know
   * when the task is finished
   *
   * Second method - gulp.src
   * There you send files pattern in glob(https://github.com/isaacs/node-glob).
   * It can be a string or array of the strings. You can also nagate pattern
   * with "!" in the begining of the string
   */
  return gulp.src('src/**/*.css')
    /**
     * gulp.src return a stream object which have a 'pipe' method
     * there you will send plugins. As result you will get next stream
     * so you can chainning call plugins
     */
    .pipe(postcss([
      stylelint(stylelintConfig),
      reporter({
        clearMessages: true,
      }),
    ]));
});

/**
 * In gulp.task second parameter can be a list with other tasks.
 * In this case first run all these tasks and when them finish will call body
 * of the current task.
 * Keep in mind - tasks in this list will run not in order.
 */
gulp.task('css', ['css:lint'], function() {
  /**
   * If you wanna work with different entry points in one task
   * you should use separate stream and then merge them for example with
   * merge-stream.
   */
  var stream_vendor = gulp.src('src/css/vendor/**/*.css')
    /**
     * Next method - gulp.dest
     * It will write current stream into the files. Folders that don't exists
     * will be created.
     * It should not be in the end, so you can do it several times, like in
     * this example write 2 versions: one is minified, but another not.
     */
    .pipe(gulp.dest(buildFolder + 'css/vendor/unmin'))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest(buildFolder + 'css/vendor'));

  var stream_src = gulp.src(['src/**/*.css', '!src/css/vendor/**/*.css'])
    .pipe(postcss([
      autoprefixer({
        browsers: 'last 2 version',
      }),
      cssgrace,
    ]))
    .pipe(gulp.dest(buildFolder + 'css/unmin'))
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest(buildFolder + 'css'));

  return merge(stream_vendor, stream_src);
});

gulp.task('css:watch', function() {
  /**
   * Last method - gulp.watch
   * It start watching for changing in files which you describe by
   * the glob pattern and run a list of the task when cause some changes
   * It returns a EventEmmiter where you can listen 'change' event
   */
  var watcher = gulp.watch('src/**/*.css', ['css']);

  watcher.on('change', function(e) {
    console.log('File ' + e.path + ' updated');
  });
});

gulp.task('clean', function() {
  del(buildFolder + 'css');
});

gulp.task('default', ['css']);
