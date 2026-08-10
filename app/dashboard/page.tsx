"use client";

import {
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
        py: 4,
      }}
    >
      <DashboardWelcome />

      <DashboardStats />

      <TodaysOverview />
    </Box>
  );
};

export default Dashboard;
