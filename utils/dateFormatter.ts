import { IDateFormatOptions } from "@/interfaces";

export const formatDate = (
  value: Date | string,
  config: IDateFormatOptions = {},
) => {
  const parsedDate = value instanceof Date ? value : new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString(
    config.locale ?? "en-US",
    config.options,
  );
};

export const formatCourseDate = (value: string) =>
  formatDate(value, {
    locale: "en-US",
    options: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  });
