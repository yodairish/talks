'use strict';

var path = require('path');
var webpack = require('webpack');
var stylelintConfig = require('./stylelint.config.js');

var imports = require('postcss-import');
var context = require('postcss-plugin-context');
var use = require('postcss-use');
var doiuse = require('doiuse');
var stylelint = require('stylelint');
var autoprefixer = require('autoprefixer');
var cssgrace = require('cssgrace');
var reporter = require('postcss-reporter');
var reset = require('postcss-autoreset');
var initial = require('postcss-initial');

/**
 * webpack config has only 2 required fields: entry and output
 * It's a simple js file not a json, so you can do anything what supports
 * by nodejs
 */
module.exports = {

  /**
   * Here you set all entry point which you have in the app
   * It can be an array, string or the object
   * By object you can create named entry points
   * Array will just concat all entry points in single bundle
   */
  entry: [
    './src',
    'webpack-dev-server/client?http://localhost:2000',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'tools.js',
    chunkFilename: '[name].tools.js',
    publicPath: '/assets/',
  },
  module: {

    /**
     * Webpack can process files by loaders before add them to the bundle.
     * There is 3 group: preLoaders, loaders, postLoaders which are executed
     * sequentially
     * preLoaders is a good place for linters etc.
     * Loaders can work not only with js files,
     * but with tons of other extensions like css, png, less..
     */
    preLoaders: [
      {
        /**
         * regexp pattern for files which should be processed by chosen loaders
         */
        test: /\.js$/,

        /**
         * You can process files only from chosen directory or overwise forbid
         * some paths, but it's preferable use include
         */
        include: path.resolve(__dirname, 'src'),

        /**
         * You can set list of loader with string and '!' separator
         * or just use an array
         */
        loaders: [
          'eslint-loader',
          'jscs-loader',
        ],
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style',

          /**
           * css-loader supports css modules, you can define class name pattern
           */
          'css?modules&localIdentName=[path]_[name]_[local]--[hash:base64:5]',
          'postcss',
        ],
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

  /**
   * Plugins are much powerful then loader. Them have access to webpack api.
   */
  plugins: [
    /**
     * ProvidePlugin is a good example for plugins. It can set global variables
     * for current build. Like current example we can use polyfills or you can
     * set __DEV__ variable to cut some blocks in production, like logging or
     * some checks
     */
    new webpack.ProvidePlugin({
      'Promise': 'core-js/library/fn/promise',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  postcss: [
    stylelint(stylelintConfig),
    imports({
      path: 'src/css',
    }),

    /**
     * PostCSS give us a huge opportunities and with it comes big responsibility
     * Ok, seriously, besides many plugin which just extends our output code,
     * like autoprefixer, there is tons of plugins which adding new features or
     * some helpful sugar and to understand what is going on we can use
     * 2 plugins: postcss-context and postcss-use. These plugins give us ability
     * apply localy other plugins. With it we always will know what exactly
     * happens in the current file
     */
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
    doiuse({
      browsers: 'last 2 version',
      onFeatureUsage: function(usageInfo) {
        console.log(usageInfo.message);
      },
    }),
    autoprefixer({
      browsers: 'last 2 version',
    }),
    cssgrace,
    reporter({
      clearMessages: true,
    }),
  ],
  resolve: {
    /**
     * By this props you can resolve relative paths in your app
     * root - should be an absolute path. It's a base from webpack will looking
     * for modules
     */
    root: path.resolve(__dirname, 'src'),

    /**
     * Here you set a list of modules folder. Webpack will level up and
     * looking for this folders
     */
    modulesDirectories: [
      'node_modules',
      'components',
      'pages',
    ],
  },
  devtool: 'source-map',
};
