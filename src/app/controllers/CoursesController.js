import { Course } from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js';

class CoursesController {
  // [GET] /slug
  show(req, res, next) {
    const { slug } = req.params;
    Course.findOne({ slug: slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}

const coursesController = new CoursesController();

export { coursesController };
