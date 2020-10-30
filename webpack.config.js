const plugins = [];

module.exports = {
  entry: {
    core: "./src/index.js",
  },
  output: {
    path: __dirname + "/build",
    filename: "anymod-html.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins,
};
