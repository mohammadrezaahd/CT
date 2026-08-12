"use client";

import Link from "next/link";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Chip, Typography, useTheme } from "@mui/material";

import { ICourseDetails, IProgramDetails } from "@/interfaces";
import {
  getPublishStatusConfig,
  getPublishStatusLabel,
} from "@/ui";
import { dashboardBaseRoute } from "@/public/consts/dashboardItems";

export const ProgramDetailsHero = ({
  course,
  program,
}: {
  course: ICourseDetails;
  program: IProgramDetails;
}) => {
  const theme = useTheme();
  const statusStyle = getPublishStatusConfig(program.status);

  return (
    <Box
      sx={{
        p: { xs: 2.25, md: 3 },
        borderRadius: theme.shape.rounded.medium,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Button
        component={Link}
        href={`${dashboardBaseRoute}/courses/${course.id}`}
        startIcon={<ArrowBackRounded />}
        sx={{ mb: 2, px: 1.5 }}
      >
        Back to course details
      </Button>

      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {program.title}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
        {program.description}
      </Typography>

      <Chip
        label={getPublishStatusLabel(program.status)}
        sx={{
          mt: 2,
          borderRadius: theme.shape.rounded.square,
          backgroundColor: statusStyle.bgColor,
          color: statusStyle.textColor,
          fontWeight: 700,
        }}
      />
    </Box>
  );
};
