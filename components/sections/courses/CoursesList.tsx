"use client";

import { Box, Typography } from "@mui/material";

import { ICourseSummary } from "@/interfaces";
import { CourseCard } from "./CourseCard";

export const CoursesList = ({ courses }: { courses: ICourseSummary[] }) => {
  if (!courses.length) {
    return (
      <Box
        sx={{
          mt: 3,
          p: 4,
          borderRadius: 3,
          border: "1px dashed",
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          No courses found
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          Try changing search text or filter values.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 3,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "repeat(2, minmax(0, 1fr))",
          xl: "repeat(3, minmax(0, 1fr))",
        },
        gap: 2,
      }}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
};
