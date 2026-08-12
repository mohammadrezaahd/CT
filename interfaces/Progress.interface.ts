import { WorkoutWeightUnit } from "./Workout.interface";

export type WorkoutSessionStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "SKIPPED";

export interface WorkoutSession {
  id: string;
  traineeId: string;
  workoutId: string;
  programAssignmentId: string;
  status: WorkoutSessionStatus;
  difficulty?: number;
  startedAt?: string;
  completedAt?: string;
  exerciseResults: ExerciseResult[];
}

export interface ExerciseResult {
  id: string;
  sessionId: string;
  exerciseId: string;
  completed: boolean;
  setResults: SetResult[];
}

export interface SetResult {
  id: string;
  exerciseResultId: string;
  setId: string;
  completed: boolean;
  actualWeight?: number;
  actualWeightUnit?: WorkoutWeightUnit;
  actualReps?: number;
}

export interface ProgramReport {
  id: string;
  programAssignmentId: string;
  dietAdherence: number;
  absenceCount: number;
  startWeight: number;
  endWeight: number;
  note?: string;
  submittedAt: string;
}
