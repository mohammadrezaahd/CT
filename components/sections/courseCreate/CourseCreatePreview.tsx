"use client";

import { Avatar, Box, Card, CardContent, Chip, Divider, Stack, Typography, useTheme } from "@mui/material";

import { ICourseCreateInput } from "@/interfaces";
import { courseCreationTraineeOptions } from "@/public/fakeData/courseCreate";
import { formatDurationLabel, formatMilestoneLabel } from "./shared";

export const CourseCreatePreview = ({ value }: { value: ICourseCreateInput }) => {
  const theme = useTheme();
  const selectedTrainee = courseCreationTraineeOptions.find((item) => item.id === value.traineeId) ?? null;

  const modeLabel = value.publishMode === "PUBLISH" ? "Publish" : "Draft";
  const modeStyle =
    value.publishMode === "PUBLISH"
      ? { bgColor: "green.main", textColor: "green.sub" }
      : { bgColor: "blue.main", textColor: "blue.sub" };

  const sortedMilestones = value.milestones
    .slice()
    .sort((a, b) => a.offset - b.offset);

  const totalSections = value.programs.reduce((sum, program) => sum + program.sections.length, 0);
  const totalItems = value.programs.reduce(
    (sum, program) =>
      sum + program.sections.reduce((sectionSum, section) => sectionSum + section.items.length, 0),
    0,
  );

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium, height: "100%" }}>
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Draft preview
        </Typography>

        <Chip
          label={modeLabel}
          sx={{
            mt: 2,
            borderRadius: theme.shape.rounded.square,
            backgroundColor: modeStyle.bgColor,
            color: modeStyle.textColor,
            fontWeight: 700,
            width: "fit-content",
          }}
        />

        <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
          {value.title || "Untitled course"}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
          {value.description || "Add a short course brief to clarify the objective and the expected outcome."}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {selectedTrainee ? (
          <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
            <Avatar src={selectedTrainee.avatar} alt={selectedTrainee.name} sx={{ width: 38, height: 38 }} />
            <Box>
              <Typography variant="caption" color="text.secondary">
                Assigned trainee
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {selectedTrainee.name}
              </Typography>
            </Box>
          </Stack>
        ) : null}

        <Box
          sx={{
            mt: 2,
            p: 1.5,
            borderRadius: theme.shape.rounded.light,
            backgroundColor: "background.default",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            sx={{ alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between" }}
          >
            <Box>
              <Typography variant="caption" color="text.secondary">
                Duration
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.25, fontWeight: 700 }}>
                {formatDurationLabel(value.duration.value, value.duration.unit)}
              </Typography>
            </Box>

            <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: "wrap" }}>
              <Chip
                size="small"
                label={`${value.programs.length} programs`}
                sx={{
                  borderRadius: theme.shape.rounded.square,
                  backgroundColor: "blue.main",
                  color: "blue.sub",
                  fontWeight: 700,
                }}
              />
              <Chip
                size="small"
                label={`${totalSections} sections`}
                sx={{
                  borderRadius: theme.shape.rounded.square,
                  backgroundColor: "green.main",
                  color: "green.sub",
                  fontWeight: 700,
                }}
              />
              <Chip
                size="small"
                label={`${totalItems} items`}
                sx={{
                  borderRadius: theme.shape.rounded.square,
                  backgroundColor: "yellow.main",
                  color: "yellow.sub",
                  fontWeight: 700,
                }}
              />
            </Stack>
          </Stack>
        </Box>

        <Box sx={{ mt: 2, minHeight: 0, overflowY: "auto", pr: 0.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Milestone plan
          </Typography>

          <Stack spacing={1.25} sx={{ mt: 2 }}>
            {sortedMilestones.map((milestone, index) => (
              <Box
                key={milestone.id}
                sx={{
                  p: 1.25,
                  borderRadius: theme.shape.rounded.light,
                  backgroundColor: "background.default",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {`Milestone ${index + 1}`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {formatMilestoneLabel(milestone)}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};