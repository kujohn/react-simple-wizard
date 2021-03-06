var webpack = require('webpack');

var config = {
    entry: {
        'react-simple-wizard': './src/react-simple-wizard'
    },

    output: {
        path: './lib',
        filename: '[name].js',
        library: 'React-Simple-Wizard',
        libraryTarget: 'umd'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    },
    externals: {
        'react': 'React'
    }
};

module.exports = config;
