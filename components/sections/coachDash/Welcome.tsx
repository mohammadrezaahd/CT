"use client";

import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import { CourseStatus } from "@/interfaces";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";
import { dashboardBaseRoute } from "@/public/consts/dashboardItems";

export const DashboardWelcome = () => {
  const activeCoursesCount = coachDashboardData.activeCourses.length;
  const traineesNeedAttention = coachDashboardData.trainees.filter(
    (trainee) =>
      trainee.status === CourseStatus.FAILD || trainee.status === CourseStatus.PEND,
  ).length;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {`Good morning, Coach ${coachDashboardData.firstName}`}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 1,
            maxWidth: 600,
          }}
        >
          {`You have ${activeCoursesCount} active courses and ${traineesNeedAttention} trainees requiring attention.`}
        </Typography>
      </Box>
      <Box>
        <Button
          component={Link}
          href={`${dashboardBaseRoute}/courses/new`}
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 1,
            px: 3,
            color: "primary.contrastText",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          + New course
        </Button>
      </Box>
    </Box>
  );
};
