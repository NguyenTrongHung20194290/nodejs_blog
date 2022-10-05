const Course = require('../models/Course')
const { mongooseToObject} = require('../../util/mongoose')

class CourseController {

    // get/course/s:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
        .then(course => {
            res.render('courses/show', { course: mongooseToObject(course) });
        })
        .catch(next)
    }

    // get/course/create
    create(req, res, next) {
       res.render('courses/create')
    }

    // post/course/store
    store(req, res, next) {
        const formData =req.body
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error =>{

            })
     }
     edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => {
        res.render('courses/edit', {
            course: mongooseToObject(course)
        })
     })
        .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)

    }
//delete
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    // xóa thật
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

//restore
    restore(req, res,next){
        Course.restore({ _id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
}

module.exports = new CourseController;