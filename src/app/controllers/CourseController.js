const Course = require("../models/Course");
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    // [GET] /course/:slug
    show(req, res, next) {
        // find document by slug
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                })
            }).catch(next)
    }


    // [GET] /course/create
    // redirect to form create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /course/store
    // submit data
    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(err => {
                console.log(err)
            });
    }
}

module.exports = new CourseController();
