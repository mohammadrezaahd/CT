"use client";

import Link from "next/link";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import { dashboardBaseRoute } from "@/public/consts/dashboardItems";
import { getCoachCourseDetailsById } from "@/public/fakeData/courses";
import { getCoachProgramDetailsById } from "@/public/fakeData/programs";
import { ProgramDetailsHero } from "./ProgramDetailsHero";
import { ProgramStructureAccordion } from "./ProgramStructureAccordion";

export const ProgramDetailsPageSection = ({
  courseId,
  programId,
}: {
  courseId: string;
  programId: string;
}) => {
  const course = getCoachCourseDetailsById(courseId);
  const program = getCoachProgramDetailsById(courseId, programId);

  if (!course || !program) {
    return (
      <Card>
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Program not found
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
            The selected program does not exist in current fake data.
          </Typography>

          <Button component={Link} href={`${dashboardBaseRoute}/courses/${courseId}`} sx={{ mt: 2 }}>
            Back to course details
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <ProgramDetailsHero course={course} program={program} />

      <ProgramStructureAccordion program={program} />
    </Box>
  );
};
