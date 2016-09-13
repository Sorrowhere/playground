//引入gulp
var gulp = require('gulp');

//引入组件
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

//编译SASS
gulp.task('sass',function(){
    gulp.src('style/sass/**/*.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('../sourcemaps'))
        .pipe(gulp.dest('style/css'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run( 'sass');

    // 监听文件变化
    gulp.watch('style/sass/**/*.scss', function(){
        gulp.run('sass');
    });
});
