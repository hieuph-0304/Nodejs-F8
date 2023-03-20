import express from 'express';
const newsRouter = express.Router();

import { newsController } from '../app/controllers/NewsController.js';

newsRouter.get('/:slug', newsController.show);

newsRouter.get('/', newsController.index);

export { newsRouter };
