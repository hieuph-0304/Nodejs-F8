import express from 'express';
const coursesRouter = express.Router();

import { coursesController } from '../app/controllers/CoursesController.js';

coursesRouter.get('/create', coursesController.create);
coursesRouter.post('/store', coursesController.store);
coursesRouter.get('/:slug', coursesController.show);

export { coursesRouter };
