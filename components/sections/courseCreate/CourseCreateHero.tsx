"use client";

import Link from "next/link";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography, useTheme } from "@mui/material";

import { dashboardBaseRoute } from "@/public/consts/dashboardItems";

export const CourseCreateHero = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: theme.shape.rounded.medium,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Button
        component={Link}
        href={`${dashboardBaseRoute}`}
        startIcon={<ArrowBackRounded />}
        sx={{ mb: 2, px: 1.5 }}
      >
        Back to dashboard
      </Button>

      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
        <Chip
          label="Step 1"
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: "green.main",
            color: "green.sub",
            fontWeight: 700,
          }}
        />
        <Chip
          label="Course setup"
          variant="outlined"
          sx={{
            borderColor: "divider",
            backgroundColor: "background.default",
          }}
        />
      </Stack>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>
        Create a new course
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
        Define the core course information, then build the complete program structure in the same page below.
      </Typography>
    </Box>
  );
};