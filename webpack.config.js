var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + '/index.js' // Your appʼs entry point
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        // include : APP_DIR + '/styles',
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
