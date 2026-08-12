import { IPublishStatus, ProgramItemType, ProgramMediaType, WeightUnit } from "./Common.interface";

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
