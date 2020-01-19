import * as express from 'express';
import * as dotenv from 'dotenv';

import {Database} from './core/types';
import Router from './core/np_router';

// import * as bodyParser from 'body-parser';


dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


//register components with routes
const db = new Database();
const router = new Router(db);
router.initialize(app);


app.listen(app.get('port'), () => {
  console.log(('App is running at http://localhost:%d in %s mode'),
    app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
});

module.exports = app;