
// Local fallback types replacing @shared/schema

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  timer: number;
}

export interface Quiz {
  id: number;
  title: string;
  questions: QuizQuestion[];
  totalQuestions: number;
}

export interface Tournament {
  id: number;
  name: string;
  description: string;
  startTime: Date;
  endTime: Date;
  entryFee: string;
  prizePool: string;
  totalSlots: number;
  isPublished: boolean;
  resultPublished: boolean;
  participants?: Participant[];
  quizzes?: Quiz[];
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
  email: string;
  isAdmin: boolean;
  wallet: number;
  fullName: string | null;
  mobileNumber: string | null;
  accountNumber: string | null;
  accountIfsc: string | null;
  upiId: string | null;
  profilePhoto: string | null;
  telegramId: string | null;
}
