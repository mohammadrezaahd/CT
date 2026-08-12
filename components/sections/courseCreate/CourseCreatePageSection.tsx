"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import { courseCreationInitialValues } from "@/public/fakeData/courseCreate";
import { CourseCreateForm } from "./CourseCreateForm";
import { CourseCreateHero } from "./CourseCreateHero";
import { CourseCreatePublishMode } from "./CourseCreatePublishMode";
import { CourseCreatePreview } from "./CourseCreatePreview";
import { CourseCreateProgramBuilder } from "./programBuilder";

export const CourseCreatePageSection = () => {
  const [courseDraft, setCourseDraft] = useState(courseCreationInitialValues);

  return (
    <Box sx={{ width: "100%" }}>
      <CourseCreateHero />
      <CourseCreatePublishMode
        value={courseDraft.publishMode}
        onChange={(publishMode) =>
          setCourseDraft((prev) => ({
            ...prev,
            publishMode,
          }))
        }
      />

      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "minmax(0, 1.45fr) minmax(320px, 0.85fr)",
          },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        <Box sx={{ height: { xs: "auto", xl: 760 } }}>
          <CourseCreateForm value={courseDraft} onChange={setCourseDraft} />
        </Box>
        <Box sx={{ height: { xs: "auto", xl: 760 } }}>
          <CourseCreatePreview value={courseDraft} />
        </Box>
      </Box>

      <CourseCreateProgramBuilder
        value={courseDraft.programs}
        onChange={(programs) =>
          setCourseDraft((prev) => ({
            ...prev,
            programs,
          }))
        }
      />
    </Box>
  );
};