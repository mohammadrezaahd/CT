"use client";

import { Box } from "@mui/material";

import {
  GroupsRounded,
  FitnessCenterRounded,
  EventAvailableRounded,
} from "@mui/icons-material";
import { DashboardStatCard } from "./StatCard";
import { CourseStatus } from "@/interfaces";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";

export const DashboardStats = () => {
  const totalTrainees = coachDashboardData.trainees.length;
  const totalActiveCourses = coachDashboardData.activeCourses.length;
  const endingSoonCourses = coachDashboardData.activeCourses.filter(
    (course) =>
      course.status === CourseStatus.PROG &&
      course.remaining > 0 &&
      course.remaining <= 7,
  ).length;

  return (
    <Box
      sx={{
        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        },

        gap: 3,

        mt: 4,
      }}
    >
      <DashboardStatCard
        title="Total Trainees"
        value={totalTrainees}
        icon={<GroupsRounded fontSize="small" />}
        iconBackground="green.main"
        iconColor="green.sub"
        trend="+3 this week"
        trendColor="green.sub"
        trendBackground="green.main"
      />

      <DashboardStatCard
        title="Active Courses"
        value={totalActiveCourses}
        icon={<FitnessCenterRounded fontSize="small" />}
        iconBackground="blue.main"
        iconColor="blue.sub"
        description="ongoing"
      />

      <DashboardStatCard
        title="Ending Soon"
        value={endingSoonCourses}
        icon={<EventAvailableRounded fontSize="small" />}
        iconBackground="yellow.main"
        iconColor="yellow.sub"
        description="this month"
      />
    </Box>
  );
};
