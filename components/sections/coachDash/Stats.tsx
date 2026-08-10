"use client";

import { Box } from "@mui/material";

import {
  GroupsRounded,
  FitnessCenterRounded,
  EventAvailableRounded,
} from "@mui/icons-material";
import { DashboardStatCard } from "./StatCard";

export const DashboardStats = () => {
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
        value="24"
        icon={<GroupsRounded fontSize="small" />}
        iconBackground="green.main"
        iconColor="green.sub"
        trend="+3 this week"
        trendColor="green.sub"
        trendBackground="green.main"
      />

      <DashboardStatCard
        title="Active Courses"
        value="6"
        icon={<FitnessCenterRounded fontSize="small" />}
        iconBackground="blue.main"
        iconColor="blue.sub"
        description="ongoing"
      />

      <DashboardStatCard
        title="Ending Soon"
        value="3"
        icon={<EventAvailableRounded fontSize="small" />}
        iconBackground="yellow.main"
        iconColor="yellow.sub"
        description="this month"
      />
    </Box>
  );
};
