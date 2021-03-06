const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
         
        }
        
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      }
    ]
  }
};
