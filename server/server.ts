import * as express from 'express';
import * as dotenv from 'dotenv';

import ComponentRegister from './core/componentregister';

import * as bodyParser from 'body-parser';

import {Database} from './core/types';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//register components with routes
const db = new Database();
const components = new ComponentRegister(db);
components.initialize(app);


app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;