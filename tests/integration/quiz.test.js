"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require('supertest');
const app = require('../../src/index'); // Adjust the import according to your app's structure
describe('Quiz API', () => {
    // Test for creating a new quiz
    it('should create a new quiz', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app)
            .post('/api/quizzes/')
            .send({
            title: "General Knowledge Quiz",
            questions: [
                {
                    id: 1,
                    text: "What is the capital of France?",
                    options: [
                        "Berlin",
                        "Madrid",
                        "Paris",
                        "Lisbon"
                    ],
                    correct_option: 2
                },
                {
                    id: 2,
                    text: "Which planet is known as the Red Planet?",
                    options: [
                        "Earth",
                        "Mars",
                        "Jupiter",
                        "Venus"
                    ],
                    correct_option: 1
                },
                {
                    id: 3,
                    text: "What is the largest ocean on Earth?",
                    options: [
                        "Atlantic Ocean",
                        "Indian Ocean",
                        "Arctic Ocean",
                        "Pacific Ocean"
                    ],
                    correct_option: 3
                },
                {
                    id: 4,
                    text: "Which is the smallest country in the world?",
                    options: [
                        "Monaco",
                        "Malta",
                        "Vatican City",
                        "San Marino"
                    ],
                    correct_option: 2
                }
            ]
        });
        expect(response.status).toBe(201); // Assuming your API returns 201 for successful creation
        expect(response.body).toHaveProperty('id'); // Assuming the response includes the quiz ID
    }));
    // Test for getting a specific quiz
    it('should get a specific quiz by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app).get('/api/quizzes/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title', 'General Knowledge Quiz');
    }));
    // Test for submitting an answer
    it('should submit an answer for a quiz question', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app)
            .post('/api/quizzes/1/questions/4/answer')
            .send({
            selected_option: 0,
            userId: 100
        });
        expect(response.status).toBe(200); // Adjust based on your API's response
        expect(response.body).toHaveProperty('isCorrect');
    }));
    // Test for getting results
    it('should get results for a specific quiz', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app)
            .get('/api/quizzes/1/results')
            .send({ userId: 100 });
        expect(response.status).toBe(200); // Adjust as necessary
        expect(response.body).toHaveProperty('quiz_id', 1); // Check if the quiz_id matches
    }));
});
