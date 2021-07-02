const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [
          /\.spec\.*?/,
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'store-locator': './src/app.tsx',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/',)
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
  // op/
};
