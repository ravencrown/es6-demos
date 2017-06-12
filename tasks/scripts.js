import gulp from 'gulp';
// 在gulp的语句中做if判断的
import gulpif from 'gulp-if';
// 在gulp中处理文件拼接的
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
// 对文件重命名做标志
import named from 'vinyl-named';
// 热更新
import livereload from 'gulp-livereload';
// gulp错误处理
import plumber from 'gulp-plumber';
// 修改文件名称
import rename from 'gulp-rename';
// 处理文件css/js压缩
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        // 处理常规的错误逻辑，在每一个pipe的时候，出现错误都要抛出异常
        .pipe(plumber({
            errorHandle: function() {

            }
        }))
        // 文件重命名
        .pipe(named())
        // 编译JS
        .pipe(gulpWebpack({
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel'
                    }
                ]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        // 指定编译后的路径
        .pipe(gulp.dest('server/public/js'))
        // 重命名
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        // 压缩处理
        .pipe(uglify({
            compress: {
                properties: false
            },
            output: {
                'quote_keys': true
            }
        }))
        // 存储至某个地方
        .pipe(gulp.dest('server/public/js'))
        // 监听
        .pipe(gulpif(args.watch, livereload()))
})
