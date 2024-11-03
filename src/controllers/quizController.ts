import { Request, Response } from 'express';
import {
    createQuizService,
    getQuizService,
    submitAnswerService,
    getResultsService
} from '../services/quizService';
import { Quiz, Result } from '../models/Quiz';

// Controller to create a new quiz
export const createQuiz = async (req: Request, res: Response): Promise<any> => {
    try {
        const quizData = req.body;
        const newQuiz = await createQuizService(quizData);
        return res.status(201).json(newQuiz);
    } catch (error) {
        console.error('Error creating quiz:', error);
        return res.status(500).json({ error: 'Failed to create quiz' });
    }
};

// Controller to get a specific quiz
export const getQuiz = async (req: Request, res: Response): Promise<any> => {
    try {
        const quizId = parseInt(req.params.quizId);
        const quiz = await getQuizService(quizId);
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }
        return res.json(quiz);
    } catch (error) {
        console.error('Error fetching quiz:', error);
        return res.status(500).json({ error: 'Failed to fetch quiz' });
    }
};

// Controller to submit an answer
export const submitAnswer = async (req: Request, res: Response): Promise<any> => {
    try {
        const { quizId, questionId } = req.params;
        const userId = req.body.userId; // Assume userId is sent in the request body
        const selected_option = req.body.selected_option;

        const result = await submitAnswerService(
            parseInt(quizId),
            parseInt(questionId),
            userId,
            selected_option
        );

        return res.json(result);
    } catch (error:any) {
        if (error.message === 'Question not found') {
            return res.status(404).json({ error: error.message });
        }
        console.error('Error submitting answer:', error);
        return res.status(500).json({ error: 'Failed to submit answer' });
    }
};

// Controller to get the results for a specific quiz
export const getResults = async (req: Request, res: Response): Promise<any> => {
    try {
        const quizId = parseInt(req.params.quizId);
        const userId = req.body.userId; // Assume userId is sent in the request body
        const result = await getResultsService(quizId, userId);
        
        if (!result) {
            return res.status(404).json({ error: 'Results not found' });
        }
        
        return res.json(result);
    } catch (error) {
        console.error('Error fetching results:', error);
        return res.status(500).json({ error: 'Failed to fetch results' });
    }
};
