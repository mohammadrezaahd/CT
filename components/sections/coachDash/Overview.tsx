"use client";

import { Box, Button, Paper, Typography } from "@mui/material";

import { ArrowForwardRounded } from "@mui/icons-material";

import traineesJson from "@/public/fakeData/traineeList.json";
import { TraineesTable } from "./traineesTable";
import { ITraineesResultTable } from "@/interfaces";

export const TodaysOverview = () => {
  const today = new Date();
  const trainees = traineesJson as ITraineesResultTable[];
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        mt: 5,

        width: {
          xs: "100%",
          md: "66.666%",
        },

        maxWidth: {
          xs: "100%",
          md: "66.666%",
        },
      }}
    >
      <Paper
        sx={{
          borderRadius: 3,
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
              borderRadius: 2,

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
    </Box>
  );
};
