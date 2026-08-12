export type UserRole = "COACH" | "TRAINEE";

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

export interface IDateFormatOptions {
  locale?: string;
  options?: Intl.DateTimeFormatOptions;
}