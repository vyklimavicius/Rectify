const path = require('path');

module.exports = {
    // 4 core concepts to keep in mind, entry point, the output, loaders and plugins

    // entry is where it starts the bundle
    entry: 'the path of the entry file',
    output: {
        path: path.resolve(__dirname, 'dist/js'), //needs to be an absolute path'
        filename: 'bundle.js' // kinda the standard name
    },
    mode: 'development'
};