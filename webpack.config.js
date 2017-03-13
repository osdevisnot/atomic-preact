const path = require('path');
const pkg = require('./package.json');
const $ = require('load-webpack-plugins')();
const OfflinePlugin = require('offline-plugin');

const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';

let config = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].[hash].bundle.js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[chunkhash].chunk.js' : '[name].chunk.js'
  },
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    loaders: [{ test: /\.(j|t)sx?$/, loaders: ['awesome-typescript-loader'], exclude: /node_modules/ }]
  },
  plugins: [
    new $.CleanPlugin(['dist'], { root: __dirname }),
    new $.HtmlPlugin({ title: pkg.description, template: './src/index.html' }),
    new $.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(ENV) })
  ]
};

if (isProd) {
  config.plugins.push(
    new $.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new $.UglifyJsPlugin(), // do we need screw_ie8 ?
    new OfflinePlugin({ AppCache: false, ServiceWorker: { events: true } }),
    new $.CompressionPlugin({ test: /\.js$/ }) // this will create gz files for analysing compressed bundle sizes
  );
} else {
  config.plugins.push(new $.HotModuleReplacementPlugin(), new $.NamedModulesPlugin());
}

module.exports = config;
