import { Media } from "./General.interface";

export type WorkoutBlockType = "NORMAL" | "SUPERSET";

export type WeightUnit = "KG" | "LB";

export interface Workout {
  id: string;
  coachId: string;
  title: string;
  description?: string;
  sections: WorkoutSection[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkoutSection {
  id: string;
  workoutId: string;
  title: string;
  description?: string;
  order: number;
  blocks: WorkoutBlock[];
}

export interface WorkoutBlock {
  id: string;
  sectionId: string;
  type: WorkoutBlockType;
  order: number;
  exercises: WorkoutExercise[];
}

export interface WorkoutExercise {
  id: string;
  blockId: string;
  name: string;
  description?: string;
  order: number;
  sets: WorkoutSet[];
  media: Media[];
}

export interface WorkoutSet {
  id: string;
  exerciseId: string;
  order: number;
  weight?: number;
  weightUnit?: WeightUnit;
  reps?: number;
}

export interface WorkoutAttachment {
  id: string;
  exerciseId: string;
  mediaId: string;
}
