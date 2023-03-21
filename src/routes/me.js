import express from 'express';
const meRouter = express.Router();

import { meController } from '../app/controllers/MeController.js';

meRouter.get('/stored/courses', meController.storedCourses);
meRouter.get('/trash/courses', meController.trashCourses);

export { meRouter };
