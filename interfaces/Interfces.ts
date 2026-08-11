// Coach dashboard interfaces

export type UserRole = "COACH" | "TRAINEE";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICoach extends IUser {
  title: string;
  phoneNumber: string;
  location: string;
  address: string;
  about: string;
  specialties: string[];
  certifications: string[];
  medicalInfo: IMedInfo;
  trainees: ITraineesResultTable[];
  messages: IMessage[];
  activeCourses: IActiveCourse[];
}

export interface IMedInfo {
  height: number;
  weight: number;
  size: ISize;
  bloodType: string;
  allergies: string;
  injuries: string;
  notes: string;
}

export interface ISize {
  waist: number;
  hip: number;
  chest: number;
}

export interface ITraineesResultTable {
  id: string;
  avatar: string;
  name: string;
  courseName: string;
  courseNumber: number;
  status: CourseStatus;
  level: CourseLevel;
  updatedAt: Date | string;
}

export interface IMessage {
  id: string;
  sender: string;
  content: string;
  time: string;
}

export interface IActiveCourse {
  id: string;
  title: string;
  status: CourseStatus;
  elapsed: number;
  remaining: number;
  completion: number;
}

export enum CourseStatus {
  COMP = "Completed",
  PROG = "In progress",
  PEND = "Not started",
  FAILD = "Failed",
}

export enum CourseLevel {
  EZ = "Easy",
  MED = "Medium",
  HARD = "Hard",
}
