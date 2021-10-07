import { Question } from '../models/Question.js';
import { data } from './data.js';

export const questions = data.map(quiz => new Question(quiz.question, quiz.choices, quiz.answer))