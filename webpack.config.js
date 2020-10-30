const plugins = [];

module.exports = {
  entry: {
    core: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist/bundles",
    filename: "js/[name].bundle.js",
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
