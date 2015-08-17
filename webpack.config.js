var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.es6', '.js.jsx']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.(es6|js|jsx)$/,
      loaders: ['react-hot', 'babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};

