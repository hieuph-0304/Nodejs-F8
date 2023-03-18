import express from 'express';
const newsRouter = express.Router();

import { newsController } from '../app/controllers/NewsController.js';

newsRouter.use('/:slug', newsController.show)

newsRouter.use('/', newsController.index)

export { newsRouter }