// Coach dashboard interfaces

export interface ITraineesResultTable {
  avatar: string;
  name: string;
  courseName: string;
  courseNumber: number;
  status: TraineesTableStatus;
  level: TraineesTableLevel;
  updaatedAt: Date | string;
}

export enum TraineesTableStatus {
  COMP = "Completed",
  PROG = "In progress",
  PEND = "Not started",
  FAILD = "Failed",
}

export enum TraineesTableLevel {
  EZ = "Easy",
  MED = "Medium",
  HARD = "Hard",
}
