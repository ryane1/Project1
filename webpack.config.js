const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: 'index.bundle.js',
    path: path.resolve('./dist'),
    publicPath: './'
  },
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST, // Defaults to `localhost`
    open: false, // Open the page in browser
    overlay: true,
    port: process.env.PORT, // Defaults to 8080
    publicPath: '/',
    stats: "errors-only", // Display only errors to reduce the amount of output.
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Quantum Stats",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new WebpackNotifierPlugin(),
  ],
};
