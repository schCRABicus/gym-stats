module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'resources/js',
            src: '**/*.js',
            dest: 'public/javascripts',
            ext: '.min.js'
        }]
    }
};