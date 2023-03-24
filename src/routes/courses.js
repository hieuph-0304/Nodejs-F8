import express from 'express';
const coursesRouter = express.Router();

import { coursesController } from '../app/controllers/CoursesController.js';

coursesRouter.get('/create', coursesController.create);
coursesRouter.post('/store', coursesController.store);
coursesRouter.get('/:id/edit', coursesController.edit);
coursesRouter.post('/handle-form-actions', coursesController.handleFormActions);
coursesRouter.put('/:id', coursesController.update);
coursesRouter.patch('/:id/restore', coursesController.restore);
coursesRouter.delete('/:id', coursesController.destroy);
coursesRouter.delete('/:id/force', coursesController.forceDestroy);
coursesRouter.get('/:slug', coursesController.show);

export { coursesRouter };
