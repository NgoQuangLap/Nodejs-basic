const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courseController.index

// redirect form create
router.get('/create', courseController.create);

// submit form create
router.post('/store', courseController.store);

// edit
router.get('/:id/edit', courseController.edit);

// save
router.put('/:id', courseController.update);

// delete
router.delete('/:id', courseController.delete);

// slug
router.get('/:slug', courseController.show);

module.exports = router;
