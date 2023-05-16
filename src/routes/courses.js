const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courseController.index

// redirect form create
router.get('/create', courseController.create);

// submit form create
router.post('/store', courseController.store);

// slug
router.get('/:slug', courseController.show);

module.exports = router;
