import {
  CourseDurationUnit,
  ICourseCreateMilestoneInput,
} from "@/interfaces";
import { parseCourseOffsetCode } from "@/utils/courseOffsetFormatter";

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
  const parsed = parseCourseOffsetCode(milestone.code);

  if (parsed) {
    const prefixByUnit: Record<CourseDurationUnit, string> = {
      DAY: "Day",
      WEEK: "Week",
      MONTH: "Month",
    };

    return `${prefixByUnit[parsed.unit]} ${parsed.value}`;
  }

  return milestone.code;
};