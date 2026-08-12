import { CourseDurationUnit, CourseOffsetCode } from "@/interfaces";

export const buildCourseOffsetCode = (
  value: number,
  unit: CourseDurationUnit,
): CourseOffsetCode => `${Math.max(value, 0)} ${unit}`;

export const parseCourseOffsetCode = (code: string) => {
  const [valueToken, unitToken] = code.trim().split(/\s+/);
  const value = Number(valueToken);

  if (Number.isNaN(value)) {
    return null;
  }

  if (unitToken !== "DAY" && unitToken !== "WEEK" && unitToken !== "MONTH") {
    return null;
  }

  return {
    value,
    unit: unitToken as CourseDurationUnit,
  };
};
