"use client";

import { Box, Button, Typography } from "@mui/material";

export const DashboardWelcome = () => {
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
          Good morning, Coach Alireza
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 1,
            maxWidth: 600,
          }}
        >
          You have 6 active courses and 2 trainees requiring attention.
        </Typography>
      </Box>
      <Box>
        <Button
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
          + New program
        </Button>
      </Box>
    </Box>
  );
};
