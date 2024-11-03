const request =  require('supertest');
const app = require('../../src/index'); 

describe('Quiz API', () => {
    // Test for creating a new quiz
    it('should create a new quiz', async () => {
        const response = await request(app)
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

        expect(response.status).toBe(201); 
        expect(response.body).toHaveProperty('id'); 
    });

    // Test for getting a specific quiz
    it('should get a specific quiz by ID', async () => {
        const response = await request(app).get('/api/quizzes/1');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('title', 'General Knowledge Quiz');
    });

    // Test for submitting an answer
    it('should submit an answer for a quiz question', async () => {
        const response = await request(app)
            .post('/api/quizzes/1/questions/4/answer')
            .send({
                selected_option: 0,
                userId: 100
            });

        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty('isCorrect');
    });

    // Test for getting results
    it('should get results for a specific quiz', async () => {
        const response = await request(app)
            .get('/api/quizzes/1/results')
            .send({ userId: 100 });

        expect(response.status).toBe(200); 
        expect(response.body).toHaveProperty('quiz_id', 1); 
    });
});
