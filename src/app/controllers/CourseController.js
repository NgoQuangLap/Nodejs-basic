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

    // [POST] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
        
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    // [DELETE] /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    
    // [POST] /courses/handle-form-action
    handleFormAction(req, res, next) {
        switch(req.body.action) {
            case 'DELETE':
                Course.delete({ _id: { $in: req.body.courseIds } })
                .then(() => res.redirect('back'))
                .catch(next)
                break;
            default:
                res.json({message: 'Action is invalid!'})
        }
    }
}

module.exports = new CourseController();
