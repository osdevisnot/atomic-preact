const path = require('path');
const pkg = require('./package.json');
const $ = require('load-webpack-plugins')();

module.exports = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  module: {
    loaders: [{ test: /\.tsx?$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }]
  },
  plugins: [new $.HtmlPlugin({ title: pkg.description, template: './src/index.html' })]
};
