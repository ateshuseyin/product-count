/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const plugins = [];
if (process.env.NODE_ENV === 'development') {
  plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify("development")
  }));
}

module.exports = {
  entry: './client',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "pc-client.js",
    publicPath: "/"
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "react",
              [
                "env",
                {
                  "targets": {
                    "browsers": [
                      "> 1%",
                      "last 2 versions"
                    ]
                  },
                  "modules": false,
                  useBuiltIns: true
                }
              ]],
            "plugins": ["transform-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?importLoaders=1']
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  }
};
