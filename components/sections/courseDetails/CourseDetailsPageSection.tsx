"use client";

import Link from "next/link";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { dashboardBaseRoute } from "@/public/consts/dashboardItems";
import { getCoachCourseDetailsById } from "@/public/fakeData/courses";
import { CourseDetailsHero } from "./CourseDetailsHero";
import { CourseDetailsOverview } from "./CourseDetailsOverview";
import { CourseMilestones } from "./CourseMilestones";
import { CourseProgramsSummary } from "./CourseProgramsSummary";

export const CourseDetailsPageSection = ({ courseId }: { courseId: string }) => {
  const course = getCoachCourseDetailsById(courseId);

  if (!course) {
    return (
      <Card>
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Course not found
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
            The selected course does not exist in current fake data.
          </Typography>

          <Button component={Link} href={`${dashboardBaseRoute}/courses`} sx={{ mt: 2 }}>
            Back to courses
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <CourseDetailsHero course={course} />

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            lg: "minmax(0, 1.15fr) minmax(0, 1fr)",
          },
          gap: 3,
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            height: {
              xs: "auto",
              lg: 560,
            },
          }}
        >
          <CourseDetailsOverview course={course} fullHeight />
        </Box>

        <Box
          sx={{
            height: {
              xs: "auto",
              lg: 560,
            },
          }}
        >
          <CourseMilestones course={course} fullHeight />
        </Box>

        <Box
          sx={{
            gridColumn: {
              xs: "span 1",
              lg: "1 / -1",
            },
          }}
        >
          <CourseProgramsSummary course={course} />
        </Box>
      </Box>
    </Box>
  );
};
