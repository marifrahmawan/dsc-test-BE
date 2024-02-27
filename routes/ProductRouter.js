const router = require('express').Router();
const ProductController = require('../controller/ProductController');

router.get('/', ProductController.getProducts);
router.get('/:productId', ProductController.getProductById);
router.put('/:productId', ProductController.updateProduct);
router.post('/create', ProductController.createProduct);
router.delete('/delete/:productId', ProductController.deleteProduct);

module.exports = router;
