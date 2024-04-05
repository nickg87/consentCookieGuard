const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production', // Change mode to production for optimized output
    entry: './consent.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    // Keep function names readable for debugging
                    mangle: false
                },
            }),
            new CssMinimizerPlugin() // Add CSS minification plugin
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css' // Output CSS filename
        })
    ]
};
