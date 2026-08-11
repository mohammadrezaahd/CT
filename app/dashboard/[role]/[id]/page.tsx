"use client";

import {
  DashboardActiveCourses,
  DashboardMessages,
  DashboardStats,
  DashboardWelcome,
  TodaysOverview,
} from "@/components/sections";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // py: 4,
      }}
    >
      <DashboardWelcome />

      <DashboardStats />

      <Box
        sx={{
          mt: 5,

          display: "grid",

          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 2fr) minmax(280px, 1fr)",
          },

          gap: 3,
        }}
      >
        <TodaysOverview />

        <DashboardMessages />
      </Box>
      <DashboardActiveCourses />
    </Box>
  );
};

export default Dashboard;
