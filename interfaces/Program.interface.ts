import {
  IPublishStatus,
  ProgramDurationUnit,
  ProgramItemType,
  ProgramMediaType,
  WeightUnit,
} from "./Common.interface";

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

export type IProgramSectionItem = IProgramExercise | IProgramGroup;

export interface IProgramExercise {
  id: string;
  sectionId: string;
  type: ProgramItemType.EXERCISE;
  title: string;
  description?: string;
  equipment?: string;
  duration?: number;
  durationUnit?: ProgramDurationUnit;
  media?: IProgramExerciseMedia[];
  order: number;
  sets: IProgramSet[];
}

export interface IProgramGroup {
  id: string;
  sectionId: string;
  type: ProgramItemType.GROUP;
  title?: string;
  order: number;
  rounds: number;
  exercises: IProgramGroupExercise[];
}

export interface IProgramGroupExercise {
  id: string;
  groupId: string;
  title: string;
  description?: string;
  equipment?: string;
  duration?: number;
  durationUnit?: ProgramDurationUnit;
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
