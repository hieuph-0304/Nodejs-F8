import express from 'express';
const meRouter = express.Router();

import { meController } from '../app/controllers/MeController.js';

meRouter.get('/stored/courses', meController.storedCourses);

export { meRouter };
