import express from 'express';
const siteRouter = express.Router();

import { siteController } from '../app/controllers/SiteController.js';

siteRouter.use('/search', siteController.search)

siteRouter.use('/', siteController.index)

export { siteRouter }