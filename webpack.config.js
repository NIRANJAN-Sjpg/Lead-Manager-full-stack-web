const path = require("path")

module.exports = {
  entry: "./leadmanager/frontend/src/index.js",
  output: {
    path: path.resolve(__dirname, "leadmanager/frontend/dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "leadmanager/frontend/dist"),
    },
    port: 3000,
  },
}