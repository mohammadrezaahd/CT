import { coachDashboardData } from "@/public/fakeData/coachDashboard";

export const profileUser = coachDashboardData;

export const formatProfileDate = (value: Date | string) =>
  new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const formatProfileDateInputValue = (value: Date | string) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toISOString().split("T")[0];
};
