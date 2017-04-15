import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(hotMiddleware(compiler));

app.get('*', (request, response) => {
  response.sendFile(path.join( __dirname, 'source/index.html'));
});

app.listen(port, () => open('http://localhost:'+ port));
