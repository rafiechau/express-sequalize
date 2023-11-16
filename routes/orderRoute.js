const express = require('express');
const { getOrders, addOrder, deleteOrder } = require('../controllers/orderController');

const router = express.Router();

router.get('/', getOrders);
router.post('/add', addOrder);
router.delete('/delete/:userId/:orderId', deleteOrder)

module.exports = router;