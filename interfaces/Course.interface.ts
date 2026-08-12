import { IActiveCourse } from "./Coach.interface";
import {
  IPublishStatus,
  ProgramDurationUnit,
  ProgramItemType,
  WeightUnit,
} from "./Common.interface";
import { IProgramSummary } from "./Program.interface";

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

export interface ICourseCreateInput {
  title: string;
  traineeId: string;
  publishMode: CourseCreatePublishMode;
  description: string;
  primaryGoal: string;
  duration: ICourseCreateDuration;
  milestones: ICourseCreateMilestoneInput[];
  programs: ICourseCreateProgramInput[];
}

export type CourseCreatePublishMode = "DRAFT" | "PUBLISH";

export type CourseDurationUnit = "DAY" | "WEEK" | "MONTH";

export type CourseOffsetCode = `${number} ${CourseDurationUnit}`;

export interface ICourseCreateDuration {
  value: number;
  unit: CourseDurationUnit;
  code: CourseOffsetCode;
}

export interface ICourseCreateMilestoneInput {
  id: string;
  offset: number;
  unit: CourseDurationUnit;
  code: CourseOffsetCode;
}

export interface ICourseCreationTraineeOption {
  id: string;
  name: string;
  courseName: string;
  avatar?: string;
}

export interface ICourseCreateProgramInput {
  id: string;
  title: string;
  description: string;
  order: number;
  sections: ICourseCreateProgramSectionInput[];
}

export interface ICourseCreateProgramSectionInput {
  id: string;
  title: string;
  description: string;
  order: number;
  items: ICourseCreateProgramItemInput[];
}

export type ICourseCreateProgramItemInput =
  | ICourseCreateProgramExerciseInput
  | ICourseCreateProgramGroupInput;

export interface ICourseCreateExerciseFieldSelection {
  reps: boolean;
  weight: boolean;
  description: boolean;
  equipment: boolean;
  duration: boolean;
}

export interface ICourseCreateProgramExerciseInput {
  id: string;
  type: ProgramItemType.EXERCISE;
  title: string;
  description?: string;
  equipment?: string;
  duration?: number;
  durationUnit?: ProgramDurationUnit;
  fieldSelection: ICourseCreateExerciseFieldSelection;
  order: number;
  sets: ICourseCreateProgramSetInput[];
}

export interface ICourseCreateProgramGroupInput {
  id: string;
  type: ProgramItemType.GROUP;
  title: string;
  order: number;
  rounds: number;
  exercises: ICourseCreateProgramGroupExerciseInput[];
}

export interface ICourseCreateProgramSetInput {
  id: string;
  order: number;
  reps?: number;
  weight?: number;
  weightUnit?: WeightUnit;
}

export interface ICourseCreateProgramGroupExerciseInput {
  id: string;
  title: string;
  description?: string;
  equipment?: string;
  duration?: number;
  durationUnit?: ProgramDurationUnit;
  fieldSelection: ICourseCreateExerciseFieldSelection;
  order: number;
  reps?: number;
  weight?: number;
  weightUnit?: WeightUnit;
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