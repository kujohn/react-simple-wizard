var webpack = require('webpack');

var config = {
    entry: {
        'react-wizard': './src/react-wizard'
    },

    output: {
        path: './lib',
        filename: '[name].js',
        library: 'React-Wizard',
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
