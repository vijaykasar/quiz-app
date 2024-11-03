export interface Quiz {
  id: number; // Unique identifier for the quiz
  title: string; // Title of the quiz
  questions: Question[]; // List of questions in the quiz
}

export interface Question {
  id: number; // Unique identifier for the question
  text: string; // The question text
  options: string[]; // List of answer options
  correct_option: number; // Index of the correct answer
}

export interface Answer {
  question_id: number; // ID of the question being answered
  selected_option: number; // Index of the selected answer
  is_correct: boolean; // Boolean indicating if the answer was correct
}

export interface Result {
  quiz_id: number; // ID of the quiz
  user_id: string; // ID of the user
  score: number; // The user's score
  answers: Answer[]; // List of answers provided by the user
}
