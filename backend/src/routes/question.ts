import express from 'express';
import questionController from '../controllers/question';
const router = express.Router();

router.post('/', questionController.createQuestion);
router.get('/:topicId', questionController.getQuestion);
router.get('/', questionController.getUserCategoryQuestions);
router.put('/', questionController.saveProgress);
export default router;