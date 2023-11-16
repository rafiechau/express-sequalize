const express = require('express');
const { getCategory, addCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', getCategory)
router.post('/add', addCategory)
router.put('/edit/:id', updateCategory);
router.delete('/delete/:id', deleteCategory);

module.exports = router;