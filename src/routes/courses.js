const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courseController.index

// redirect form create
router.get('/create', courseController.create);

// submit form create
router.post('/store', courseController.store);

router.post('/handle-form-action', courseController.handleFormAction)

// edit
router.get('/:id/edit', courseController.edit);

// save
router.put('/:id', courseController.update);

// delete
router.delete('/:id', courseController.delete);

// slug
router.get('/:slug', courseController.show);

// update deleted
router.patch('/:id/restore', courseController.restore);

// delete force
router.delete('/:id/force', courseController.forceDelete);

module.exports = router;
