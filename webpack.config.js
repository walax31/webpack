const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    hot:true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader",
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(scss|sass)$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(gif|png|jpe?g)$/, use: "file-loader" },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
};