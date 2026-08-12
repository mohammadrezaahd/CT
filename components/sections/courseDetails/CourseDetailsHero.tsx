"use client";

import Link from "next/link";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography, useTheme } from "@mui/material";

import { ICourseDetails } from "@/interfaces";
import {
  getPublishStatusConfig,
  getPublishStatusLabel,
  getStatusConfig,
  getStatusLabel,
} from "@/ui";
import { dashboardBaseRoute } from "@/public/consts/dashboardItems";

export const CourseDetailsHero = ({ course }: { course: ICourseDetails }) => {
  const theme = useTheme();

  const statusStyle = getStatusConfig(course.status);
  const publishStyle = getPublishStatusConfig(course.publishStatus);

  return (
    <Box
      sx={{
        p: { xs: 2.25, md: 3 },
        borderRadius: theme.shape.rounded.medium,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Button
        component={Link}
        href={`${dashboardBaseRoute}/courses`}
        startIcon={<ArrowBackRounded />}
        sx={{ mb: 2, px: 1.5 }}
      >
        Back to courses
      </Button>

      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {course.title}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {course.description}
      </Typography>

      <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: "wrap" }}>
        <Chip
          label={getStatusLabel(course.status)}
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: statusStyle.bgColor,
            color: statusStyle.textColor,
            fontWeight: 700,
          }}
        />

        <Chip
          label={getPublishStatusLabel(course.publishStatus)}
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: publishStyle.bgColor,
            color: publishStyle.textColor,
            fontWeight: 700,
          }}
        />
      </Stack>
    </Box>
  );
};
