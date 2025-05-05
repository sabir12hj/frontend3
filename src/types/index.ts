
// Local fallback types replacing @shared/schema

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Tournament {
  id: string;
  name: string;
  quizzes: Quiz[];
}

export interface Participant {
  id: string;
  name: string;
  score: number;
}

export interface Payment {
  id: string;
  amount: number;
  status: string;
}

export interface UserResponse {
  questionId: string;
  selectedOptionIndex: number;
}

export interface User {
  id: string;
  username: string;
  fullName: string | null;
  mobileNumber: string | null;
  accountNumber: string | null;
  accountIfsc: string | null;
  upiId: string | null;
  profilePhoto: string | null;
  telegramId: string | null;
}
