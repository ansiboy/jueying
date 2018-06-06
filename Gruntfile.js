module.exports = function (grunt) {
    let livereload = 20224;
    let port = 2015;
    grunt.initConfig({
        // 通过connect任务，创建一个静态服务器
        connect: {
            www: {
                options: {
                    // 服务器端口号
                    port,
                    // 服务器地址(可以使用主机名localhost，也能使用IP)
                    // hostname: '192.168.1.7',
                    hostname: '0.0.0.0',
                    // keepalive: true,
                    livereload: livereload,
                    // 物理路径(默认为. 即根目录) 注：使用'.'或'..'为路径的时，可能会返回403 Forbidden. 此时将该值改为相对路径 如：/grunt/reloard。
                    base: './',
                    open: {
                        target: `http://localhost:${port}/docs/demo/`

                    },
                    // protocol: 'https'
                }
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: livereload //监听前面声明的端口  35729
                },
                files: [
                    `deom/**`
                ]
            }
        },
    })

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev', ['connect', 'watch']);
}