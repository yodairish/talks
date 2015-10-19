'use strict';

var path = require('path');
var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var config = require('../webpack.config.dev.js');

/**
 * We create express server which will watch for changes in our files base on
 * wabpack config and update when it happens
 */
var server = new devServer(webpack(config), {
  /**
   * We should always set this prop, by this path we will get access to our app
   */
  publicPath: config.output.publicPath,

  /**
   * This path set base for our app, in most cases this place with
   * our index.html
   */
  contentBase: path.resolve(__dirname, '../public'),

  hot: true,

  /**
   * We should turn this to true state, to allow access to other pages
   * like site/home, site/about, site/detail..
   */
  historyApiFallback: true,
});

server.listen(2000);
