export type UserRole = "COACH" | "TRAINEE";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CoachProfile {
  userId: string;
  bio?: string;
}

export interface TraineeProfile {
  userId: string;
  height: number;
  currentWeight: number;
}

export interface Coach {
  user: User;
  profile: CoachProfile;
  traineeIds: string[];
}

export interface Trainee {
  user: User;
  profile: TraineeProfile;
  coachId: string;
}

export interface BodyMeasurement {
  id: string;
  traineeId: string;
  weight: number;
  recordedAt: string;
}
