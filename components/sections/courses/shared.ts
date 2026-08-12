import { ICourseSummary, IPublishStatus } from "@/interfaces";

export const courseMatchesDateRange = (
  course: ICourseSummary,
  fromDate: string,
  toDate: string,
) => {
  const courseStart = new Date(course.startDate);
  const courseEnd = new Date(course.endDate);

  if (Number.isNaN(courseStart.getTime()) || Number.isNaN(courseEnd.getTime())) {
    return false;
  }

  const from = fromDate ? new Date(fromDate) : null;
  const to = toDate ? new Date(toDate) : null;

  if (from && courseEnd < from) {
    return false;
  }

  if (to && courseStart > to) {
    return false;
  }

  return true;
};

export const publishStatusFilterOptions: Array<IPublishStatus | "ALL"> = [
  "ALL",
  IPublishStatus.DRAFT,
  IPublishStatus.UPCOMING,
  IPublishStatus.ACTIVE,
  IPublishStatus.COMPLETED,
  IPublishStatus.CANCELLED,
];
