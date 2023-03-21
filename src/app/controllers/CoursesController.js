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
    req.body.image = `https://files.fullstack.edu.vn/f8-prod/courses/${req.body.videoId}.png`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [GET] /:id/edit
  edit(req, res, next) {
    Course.findById({ _id: req.params.id })
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [PUT] /:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }

  // [DELETE] /:id
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /:id/force
  forceDestroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

const coursesController = new CoursesController();

export { coursesController };
