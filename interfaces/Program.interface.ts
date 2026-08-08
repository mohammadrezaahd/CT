export interface Program {
  id: string;
  coachId: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  schedules: ProgramSchedule[];
  createdAt: string;
  updatedAt: string;
}

export interface ProgramSchedule {
  id: string;
  programId: string;
  workoutId: string;
  date: string;
  order: number;
}

export interface ProgramAssignment {
  id: string;
  programId: string;
  traineeId: string;
  assignedAt: string;
  startDate: string;
  endDate: string;
  status: ProgramAssignmentStatus;
}

export type ProgramAssignmentStatus =
  | "UPCOMING"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED";
