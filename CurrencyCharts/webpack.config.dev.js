import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        'jquery',
        './source/index',
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, '/destination'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './source',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
        }),
        new webpack.ProvidePlugin({
            Highcharts: 'highcharts',
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'source'),
                loaders: ['babel-loader'],
            },
            {
                test: /(\.css)$/,
                loaders: ['style-loader', 'css-loader'],
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'},
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?prefix=font/&limit=5000'},
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                // eslint-disable-next-line
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
            },
            {
                test: /(\.sass)$/,
                loader: 'sass-loader',
            },
        ],
    },
};
