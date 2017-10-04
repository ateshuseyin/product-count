const express = require('express');
const path = require('path');
const app = express();
const productRouter =require('./api/productRouter');

let port = 80;
if (process.env.NODE_ENV === 'development') {
  port = 3002;
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  webpackConfig.devtool = 'cheap-eval-source-map';
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  app.use(webpackDevMiddleWare(webpack(webpackConfig)));
}

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api',productRouter);

app.listen(port, function () {
  console.log(`Started on http://localhost:${port}`);
});