'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var imports = require('postcss-import');
var context = require('postcss-plugin-context');
var use = require('postcss-use');
var reset = require('postcss-autoreset');
var initial = require('postcss-initial');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');
var cssnano = require('cssnano');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'tools.js',
    chunkFilename: '[name].tools.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName=[hash:base64:5]!postcss'
        ),
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel',
      },
      {
        test: /\.png$/,
        loader: 'url?limit=10000!img?progressive=true'
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'core-js/library/fn/promise',
    }),

    /**
     * By this plugin we allocate our css into separate file
     */
    new ExtractTextPlugin('style.css'),

    /**
     * This plugin will looking for a common modules in chunks and allocate it
     * into separate file
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
    }),

    /**
     * Minificator
     */
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
  ],
  postcss: [
    imports({
      path: 'src/css',
    }),
    context({
      reset: reset,
      initial: initial({
        reset: 'inherited'
      }),
    }),
    use({
      modules: [
        'cssnext',
        'postcss-autoreset',
        'postcss-initial',
        'postcss-import',
      ],
    }),
    autoprefixer({
      browsers: 'last 2 version',
    }),
    cssgrace,

    /**
     * css minificator
     */
    cssnano(),
  ],
  resolve: {
    root: path.resolve(__dirname, 'src'),
    modulesDirectories: [
      'node_modules',
      'components',
      'pages',
    ],
  },
};
