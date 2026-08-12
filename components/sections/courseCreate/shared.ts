import {
  CourseDurationUnit,
  ICourseCreateMilestoneInput,
} from "@/interfaces/Interfces";

const durationUnitLabels: Record<CourseDurationUnit, string> = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
};

export const formatDurationLabel = (value: number, unit: CourseDurationUnit) => {
  const safeValue = Math.max(value, 0);
  const unitLabel = durationUnitLabels[unit];
  const suffix = safeValue === 1 ? "" : "s";

  return `${safeValue} ${unitLabel}${suffix}`;
};

export const formatMilestoneLabel = (milestone: ICourseCreateMilestoneInput) => {
  const prefixByUnit: Record<CourseDurationUnit, string> = {
    DAY: "Day",
    WEEK: "Week",
    MONTH: "Month",
  };

  return `${prefixByUnit[milestone.unit]} ${milestone.offset}`;
};