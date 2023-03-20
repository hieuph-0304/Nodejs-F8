import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

import { route } from './routes/index.js';
import * as db from './config/db/index.js';

// connect to mongodb
db.connect();

const app = express();
const port = 3000;

app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public'),
  ),
);

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// HTTP logging
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);
app.set('view engine', 'hbs');
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'resources', 'views'),
);

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
