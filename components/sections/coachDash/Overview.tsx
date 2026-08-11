"use client";

import { Box, Button, Paper, Typography, useTheme } from "@mui/material";

import { ArrowForwardRounded } from "@mui/icons-material";

import { coachDashboardData } from "@/public/fakeData/coachDashboard";
import { TraineesTable } from "./traineesTable";

export const TodaysOverview = () => {
  const theme = useTheme();

  const today = new Date();
  const trainees = coachDashboardData.trainees;

  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Paper
      sx={{
        borderRadius: theme.shape.rounded.medium,
        overflow: "hidden",
      }}
    >
      {/* Header */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          p: 2.5,
          pb: 1.5,

          flexWrap: "wrap",
          gap: 2,

          backgroundColor: "background.paper",

          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Todays Overview
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {dateStr} - {trainees.length} sessions scheduled
          </Typography>
        </Box>

        <Button
          variant="outlined"
          endIcon={<ArrowForwardRounded />}
          sx={{
            borderRadius: theme.shape.rounded.light,

            borderColor: "divider",

            color: "text.secondary",

            "&:hover": {
              borderColor: "primary.main",

              color: "primary.main",
            },
          }}
        >
          View All
        </Button>
      </Box>

      {/* Table */}

      <TraineesTable trainees={trainees} />
    </Paper>
  );
};
