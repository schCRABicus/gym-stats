module.exports = {

    options: {
        limit: 3
    },

    // dev tasks
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'less:dev',
        'uglify'
    ],

    // prod tasks
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'less:prod',
        'uglify'
    ]
};