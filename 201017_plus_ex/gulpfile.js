var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require("gulp-sourcemaps")
var postcss = require('gulp-postcss')

//일반컴파일
gulp.task('sass', function () {
return gulp.src('./scss/**/*.scss', {allowEmpty:true}) // 입력 경로
.pipe(sourcemaps.init())
.pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
.pipe(sourcemaps.write())
.pipe(gulp.dest('./css')); // 출력 경로
});

//런타임 중 파일 감시
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass')); // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
});

gulp.task('test', function () {
    return gulp.src('./css/*.css')
    .pipe( postcss([ require('postcss-move-media') ]) )
    .pipe(gulp.dest("./css"))
});