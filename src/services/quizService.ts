import { Quiz, Answer, Result } from '../models/Quiz';
let quizzes: Quiz[] = [];
let results: Result[] = [];

// Service to create a new quiz
export const createQuizService = async (quizData: any): Promise<Quiz> => {
    const newQuiz: Quiz = {
        id: quizzes.length + 1,
        title: quizData.title,
        questions: quizData.questions,
    };
    quizzes.push(newQuiz);
    return newQuiz;
};

// Service to get a specific quiz
export const getQuizService = async (quizId: number): Promise<Quiz | undefined> => {
    return quizzes.find(quiz => quiz.id === quizId);
};

// Service to submit an answer
export const submitAnswerService = async (quizId: number, questionId: number, userId: string, selected_option: number): Promise<any> => {
    const question = quizzes.find(q => q.id === quizId)?.questions.find(q => q.id === questionId);
    if (!question) {
        throw new Error('Question not found');
    }

    const isCorrect = question.correct_option === selected_option;
    const answer: Answer = {
        question_id: questionId,
        selected_option,
        is_correct: isCorrect,
    };

    // Update results logic
    let result = results.find(r => r.quiz_id === quizId && r.user_id === userId);
    if (!result) {
        result = {
            quiz_id: quizId,
            user_id: userId,
            score: 0,
            answers: [],
        };
        results.push(result);
    }

    result.answers.push(answer);
    if (isCorrect) {
        result.score++;
    }

    return { isCorrect, correct_option: question.correct_option };
};

// Service to get results
export const getResultsService = async (quizId: number, userId: string): Promise<Result | undefined> => {
    return results.find(r => r.quiz_id === quizId && r.user_id === userId);
};
