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
  correctAnswer?: number; // Added for admin edit form
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
  startTime: Date | string;
  endTime: Date | string;
  entryFee: string;
  prizePool: string;
  totalSlots: number;
  isPublished: boolean;
  resultPublished: boolean;
  participants?: Participant[];
  quizzes?: Quiz[];
}

export interface TournamentParticipant {
  userId: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export interface Participant {
  id: string;
  userId: number;
  name: string;
  score: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
}

export interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
}

export interface UserResponse {
  questionId: string;
  selectedOptionIndex: number;
  timeTaken: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  wallet: string;
  fullName: string | null;
  mobileNumber: string | null;
  accountNumber: string | null;
  accountIfsc: string | null;
  upiId: string | null;
  profilePhoto: string | null;
  telegramId: string | null;
}

export interface Winner {
  id: string;
  username: string;
  tournament: string;
  score: number;
  position: number;
  prize: number;
  timeTaken: number;
}

export interface LeaderboardPlayer {
  rank: number;
  username: string;
  score: number;
  timeTaken: number;
  prize: string;
}

export interface TournamentLeaderboard {
  players: LeaderboardPlayer[];
}
