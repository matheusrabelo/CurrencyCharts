import express from 'express';
import fs from 'fs';
import path from 'path';

import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';

import router from '../bundles/router';

const app = express();

const logStream = fs.createWriteStream(
    path.join(__dirname, '../../requests.log'), {flags: 'a+'});

app.use(morgan('common', {stream: logStream}));
app.use(helmet());
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/v1', router);

export default app;
