"use client";

import { Box, Card, CardContent, Chip, Stack, Typography, useTheme } from "@mui/material";

import { ICourseDetails } from "@/interfaces";
import { getPublishStatusConfig, getPublishStatusLabel } from "@/ui";

export const CourseProgramsSummary = ({ course }: { course: ICourseDetails }) => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Programs Summary
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          Program data is currently displayed in summary mode for this phase.
        </Typography>

        <Box
          sx={{
            mt: 2.5,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
            },
            gap: 1.5,
          }}
        >
          {course.programs.map((program) => {
            const statusStyle = getPublishStatusConfig(program.status);

            return (
              <Box
                key={program.id}
                sx={{
                  p: 1.5,
                  borderRadius: theme.shape.rounded.light,
                  border: "1px solid",
                  borderColor: "divider",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    {`${program.order}. ${program.title}`}
                  </Typography>

                  <Chip
                    size="small"
                    label={getPublishStatusLabel(program.status)}
                    sx={{
                      borderRadius: theme.shape.rounded.square,
                      backgroundColor: statusStyle.bgColor,
                      color: statusStyle.textColor,
                      fontWeight: 700,
                    }}
                  />
                </Box>

                <Stack direction="row" spacing={2} sx={{ mt: 1.25 }}>
                  <Typography variant="caption" color="text.secondary">
                    {`${program.sectionsCount} sections`}
                  </Typography>

                  <Typography variant="caption" color="text.secondary">
                    {`${program.exercisesCount} exercises`}
                  </Typography>
                </Stack>
              </Box>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};
