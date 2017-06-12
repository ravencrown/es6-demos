import yargs from 'yargs';

const args = yargs
    .option('production', {
        // 区分开发环境是测试还是生产环境
        boolean: true,
        default: false,
        describe: 'min all scripts'
    })
    .option('watch', {
        // 监听文件修改
        boolean: true,
        default: false,
        describe: 'watch all files'
    })
    .option('verbose', {
        // 详细输出命令行执行的日志
        boolean: true,
        default: false,
        describe: 'log'
    })
    .option('sourcemaps', {
        // 输出JS/CSS的sourcemaps文件
        describe: 'force the creation of sourcemaps'
    })
    .option('port', {
        string: true,
        default: 8080,
        describe: 'server port'
    })

    .argv

export default args;
