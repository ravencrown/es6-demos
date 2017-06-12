import gulp from 'gulp';
import gulpif from 'gulp-if';
// 启动服务
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
    if (!args.watch) return cb();

    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    // 监听server目录下的js/ejs -- 热更新
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
        // 通知服务器，文件有改变
        server.notify.apply(server, [file]);
    })

    // 监听需要服务重启的文件
    gulp.watch(['server/routers/**/*.js', 'server/app.js'], function() {
        server.start.bind(server)()
    });
})
