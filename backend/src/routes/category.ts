import express from 'express';
import categoryController from '../controllers/category';
const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategory);
export default router;