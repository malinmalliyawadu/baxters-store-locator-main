const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  mode: process.env.NODE_ENV || "production",
  optimization: {
    usedExports: true,
    minimizer: [new TerserPlugin()],
  },
  entry: {
    "store-locator": "./src/app.tsx",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist/"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
