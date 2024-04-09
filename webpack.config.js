const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => {
    const isDevelopment = env && env.development === 'true';

    return {
        mode: isDevelopment ? 'development' : 'production',
        entry: './consent.js',
        output: {
            filename: isDevelopment ? 'dev.bundle.js' : 'bundle.js', // Include a prefix or suffix for the development bundle
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
};
