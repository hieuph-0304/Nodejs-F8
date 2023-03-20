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

  // [GET] /create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST] /store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/${formData.videoId}.png`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect('/'))
      .catch(next);
  }
}

const coursesController = new CoursesController();

export { coursesController };
