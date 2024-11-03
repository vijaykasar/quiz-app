import { Router } from 'express';
import {
    createQuiz,
    getQuiz,
    submitAnswer,
    getResults
} from '../controllers/quizController';

const router = Router();

router.post('/', createQuiz); // Endpoint to create a quiz
router.get('/:quizId', getQuiz); // Endpoint to get a quiz
router.post('/:quizId/questions/:questionId/answer', submitAnswer); // Endpoint to submit an answer
router.get('/:quizId/results', getResults); // Endpoint to get results

export default router;
