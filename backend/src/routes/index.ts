import express from 'express';
import authRoutes from './auth';
import categoryRoutes from './category';
import topicRoutes from './topic'
import questionRoutes from './question'
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);
router.use('/topic', topicRoutes);
router.use('/question', questionRoutes);
export default router;