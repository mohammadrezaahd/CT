import {
  IProgramDetails,
  IProgramExercise,
  IProgramSection,
  IProgramSectionItem,
  IProgramSet,
  IProgramSuperset,
  IProgramSupersetExercise,
  ProgramItemType,
  WeightUnit,
} from "@/interfaces";
import { coachCourseDetailsData } from "@/public/fakeData/courses";

const buildSets = (exerciseId: string, baseOrder: number): IProgramSet[] => {
  return Array.from({ length: 3 }, (_, index) => ({
    id: `${exerciseId}-set-${index + 1}`,
    exerciseId,
    order: baseOrder + index,
    reps: 8 + index * 2,
    weight: 25 + index * 5,
    weightUnit: WeightUnit.KG,
  }));
};

const buildExerciseItem = (
  sectionId: string,
  itemOrder: number,
): IProgramExercise => {
  const exerciseId = `${sectionId}-exercise-item-${itemOrder}`;

  return {
    id: exerciseId,
    sectionId,
    type: ProgramItemType.EXERCISE,
    title: `Exercise ${itemOrder}`,
    description: "Controlled tempo with strict form.",
    order: itemOrder,
    sets: buildSets(exerciseId, 1),
  };
};

const buildSupersetExercises = (
  supersetId: string,
  count: number,
): IProgramSupersetExercise[] => {
  return Array.from({ length: count }, (_, index) => {
    const exerciseId = `${supersetId}-exercise-${index + 1}`;

    return {
      id: exerciseId,
      supersetId,
      title: `Superset Exercise ${index + 1}`,
      description: "Controlled tempo with strict form.",
      order: index + 1,
      reps: 10 + index * 2,
      weight: 20 + index * 5,
      weightUnit: WeightUnit.KG,
    };
  });
};

const buildSupersetItem = (
  sectionId: string,
  itemOrder: number,
  exerciseCount: number,
): IProgramSuperset => {
  const supersetId = `${sectionId}-superset-item-${itemOrder}`;

  return {
    id: supersetId,
    sectionId,
    type: ProgramItemType.SUPERSET,
    title: `Superset ${itemOrder}`,
    order: itemOrder,
    rounds: 3,
    exercises: buildSupersetExercises(
      supersetId,
      Math.max(2, Math.min(exerciseCount, 3)),
    ),
  };
};

const buildSectionItems = (
  sectionId: string,
  totalExercisesTarget: number,
): IProgramSectionItem[] => {
  const items: IProgramSectionItem[] = [];
  let remaining = Math.max(totalExercisesTarget, 2);
  let order = 1;

  while (remaining > 0) {
    const shouldBuildSuperset = remaining >= 3 && order % 2 === 0;

    if (shouldBuildSuperset) {
      const supersetExerciseCount = Math.min(3, remaining - 1);
      items.push(buildSupersetItem(sectionId, order, supersetExerciseCount));
      remaining -= supersetExerciseCount;
      order += 1;
      continue;
    }

    items.push(buildExerciseItem(sectionId, order));
    remaining -= 1;
    order += 1;
  }

  return items;
};

const splitExercisesAcrossSections = (
  totalExercises: number,
  sectionsCount: number,
) => {
  const total = Math.max(totalExercises, sectionsCount);
  const base = Math.floor(total / sectionsCount);
  const remainder = total % sectionsCount;

  return Array.from({ length: sectionsCount }, (_, index) =>
    base + (index < remainder ? 1 : 0),
  );
};

const buildSections = (
  programId: string,
  sectionsCount: number,
  exercisesCount: number,
): IProgramSection[] => {
  const sectionExerciseTargets = splitExercisesAcrossSections(
    exercisesCount,
    Math.max(sectionsCount, 1),
  );

  return Array.from({ length: sectionsCount }, (_, index) => {
    const sectionId = `${programId}-section-${index + 1}`;
    const items = buildSectionItems(
      sectionId,
      sectionExerciseTargets[index],
    );

    return {
      id: sectionId,
      programId,
      title: `Section ${index + 1}`,
      description: `Focus segment ${index + 1} for this program cycle.`,
      order: index + 1,
      items,
    };
  });
};

export const coachProgramDetailsData: IProgramDetails[] = coachCourseDetailsData.flatMap((course) =>
  course.programs.map((program) => {
    const sections = buildSections(program.id, program.sectionsCount, program.exercisesCount);

    return {
      ...program,
      description: `${program.title} for ${course.trainee.firstName} ${course.trainee.lastName} with progressive load strategy and recovery checkpoints.`,
      sections,
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    };
  }),
);

export const getCoachProgramDetailsById = (
  courseId: string,
  programId: string,
) =>
  coachProgramDetailsData.find(
    (program) =>
      program.id === programId &&
      program.courseId === courseId,
  ) ?? null;

export const getCoachProgramsByCourseId = (courseId: string) =>
  coachProgramDetailsData.filter((program) => program.courseId === courseId);
