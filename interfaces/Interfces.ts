// Coach dashboard & profile interfaces

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

export enum IPublishStatus {
  DRAFT = "Draft",
  UPCOMING = "Upcoming",
  ACTIVE = "Active",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
}

// Course interfaces
export interface ICourseSummary extends IActiveCourse {
  trainee: ITraineeSummary;

  publishStatus: IPublishStatus;

  startDate: string;
  endDate: string;

  programsCount: number;
  milestonesCount: number;
}

export interface ICourseDetails extends ICourseSummary {
  description?: string;

  programs: IProgramSummary[];
  milestones: ICourseMilestone[];

  createdAt: string;
  updatedAt: string;
}

export interface ICourseMilestone {
  id: string;
  title: string;

  courseId: string;

  dueDate: string;

  order: number;
}

export interface ITraineeSummary {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

// Program interfaces

export enum WeightUnit {
  KG = "kg",
  LB = "lb",
}

export enum ProgramItemType {
  EXERCISE = "Exercise",
  SUPERSET = "Superset",
}

export enum ProgramMediaType {
  IMAGE = "Image",
  VIDEO = "Video",
}

export interface IProgramSummary {
  id: string;
  courseId: string;

  title: string;
  status: IPublishStatus;

  order: number;

  sectionsCount: number;
  exercisesCount: number;
}

export interface IProgramDetails extends IProgramSummary {
  description?: string;

  sections: IProgramSection[];

  createdAt: string;
  updatedAt: string;
}

export interface IProgramSection {
  id: string;
  programId: string;

  title: string;
  description?: string;

  order: number;

  items: IProgramSectionItem[];
}

export type IProgramSectionItem = IProgramExercise | IProgramSuperset;

export interface IProgramExercise {
  id: string;
  sectionId: string;

  type: ProgramItemType.EXERCISE;

  title: string;
  description?: string;

  media?: IProgramExerciseMedia[];

  order: number;

  sets: IProgramSet[];
}

export interface IProgramSuperset {
  id: string;
  sectionId: string;

  type: ProgramItemType.SUPERSET;

  title?: string;

  order: number;

  rounds: number;

  exercises: IProgramSupersetExercise[];
}

export interface IProgramSupersetExercise {
  id: string;
  supersetId: string;

  title: string;
  description?: string;

  media?: IProgramExerciseMedia[];

  order: number;

  reps?: number;

  weight?: number;
  weightUnit?: WeightUnit;
}

export interface IProgramSet {
  id: string;
  exerciseId: string;

  order: number;

  reps?: number;

  weight?: number;
  weightUnit?: WeightUnit;
}

export interface IProgramExerciseMedia {
  id: string;

  type: ProgramMediaType;

  url: string;
}
