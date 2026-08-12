import {
  CourseCreatePublishMode,
  CourseDurationUnit,
  ICourseCreationTraineeOption,
  ICourseCreateProgramExerciseInput,
  ICourseCreateProgramInput,
  ICourseCreateProgramSectionInput,
  ICourseCreateProgramSetInput,
  ICourseCreateProgramSupersetExerciseInput,
  ICourseCreateProgramSupersetInput,
  ICourseCreateInput,
  ProgramItemType,
  WeightUnit,
} from "@/interfaces";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";
import { buildCourseOffsetCode } from "@/utils/courseOffsetFormatter";

export const courseCreationTraineeOptions: ICourseCreationTraineeOption[] =
  coachDashboardData.trainees.map((trainee) => ({
    id: trainee.id,
    name: trainee.name,
    courseName: trainee.courseName,
    avatar: trainee.avatar,
  }));

export const courseCreationPublishModes: CourseCreatePublishMode[] = [
  "DRAFT",
  "PUBLISH",
];

export const courseDurationUnitOptions: CourseDurationUnit[] = [
  "DAY",
  "WEEK",
  "MONTH",
];

const createId = (prefix: string) => `${prefix}-${Math.random().toString(36).slice(2, 10)}`;

const createSetDraft = (order: number): ICourseCreateProgramSetInput => ({
  id: createId("set"),
  order,
  reps: 10,
  weight: 20,
  weightUnit: WeightUnit.KG,
});

const createSupersetExerciseDraft = (
  order: number,
): ICourseCreateProgramSupersetExerciseInput => ({
  id: createId("superset-exercise"),
  title: `Superset Exercise ${order}`,
  order,
  reps: 12,
  weight: 15,
  weightUnit: WeightUnit.KG,
});

export const createProgramExerciseDraft = (
  order: number,
): ICourseCreateProgramExerciseInput => ({
  id: createId("exercise-item"),
  type: ProgramItemType.EXERCISE,
  title: `Exercise ${order}`,
  order,
  sets: [createSetDraft(1)],
});

export const createProgramSupersetDraft = (
  order: number,
): ICourseCreateProgramSupersetInput => ({
  id: createId("superset-item"),
  type: ProgramItemType.SUPERSET,
  title: `Superset ${order}`,
  order,
  rounds: 3,
  exercises: [createSupersetExerciseDraft(1), createSupersetExerciseDraft(2)],
});

export const createProgramSectionDraft = (
  order: number,
): ICourseCreateProgramSectionInput => ({
  id: createId("section"),
  title: `Section ${order}`,
  description: "",
  order,
  items: [createProgramExerciseDraft(1)],
});

export const createProgramDraft = (order: number): ICourseCreateProgramInput => ({
  id: createId("program"),
  title: `Program ${order}`,
  description: "",
  order,
  sections: [createProgramSectionDraft(1)],
});

export const courseCreationInitialValues: ICourseCreateInput = {
  title: "Athlete Reset Cycle",
  traineeId: courseCreationTraineeOptions[0]?.id ?? "",
  publishMode: "DRAFT",
  description:
    "An eight-week coaching cycle focused on rebuilding movement quality, restoring capacity, and preparing the trainee for the next training phase.",
  primaryGoal: "Strength progression and movement quality",
  duration: {
    value: 2,
    unit: "MONTH",
    code: buildCourseOffsetCode(2, "MONTH"),
  },
  milestones: [
    {
      id: "milestone-offset-1",
      offset: 2,
      unit: "WEEK",
      code: buildCourseOffsetCode(2, "WEEK"),
    },
    {
      id: "milestone-offset-2",
      offset: 4,
      unit: "WEEK",
      code: buildCourseOffsetCode(4, "WEEK"),
    },
  ],
  programs: [createProgramDraft(1)],
};