import express from 'express';
import topicController from '../controllers/topic';
const router = express.Router();

router.post('/', topicController.createTopic);
router.get('/:categoryId', topicController.getTopic);
export default router;