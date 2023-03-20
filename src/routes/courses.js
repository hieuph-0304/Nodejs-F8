import express from 'express';
const coursesRouter = express.Router();

import { coursesController } from '../app/controllers/CoursesController.js';

coursesRouter.get('/:slug', coursesController.show);

export { coursesRouter };
