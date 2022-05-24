const path = require('path');
const HTMLLoader = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLLoader({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "node_vendors",
          test: /node_modules/,
          chunks: "all",
        },
        common: {
          test: /\.\/src\/components/,
          chunks: "all",
          minSize: 0,
        },
      },
    },
  }
};
