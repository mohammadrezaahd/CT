"use client";

import {
  Autocomplete,
  Avatar,
  Button,
  Box,
  Card,
  CardContent,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { AddRounded, DeleteOutlineRounded } from "@mui/icons-material";

import { ICourseCreateInput } from "@/interfaces/Interfces";
import {
  CourseCreationTraineeOption,
  courseDurationUnitOptions,
  courseCreationTraineeOptions,
} from "@/public/fakeData/courseCreate";

interface CourseCreateFormProps {
  value: ICourseCreateInput;
  onChange: (value: ICourseCreateInput) => void;
}

export const CourseCreateForm = ({ value, onChange }: CourseCreateFormProps) => {
  const theme = useTheme();
  const selectedTrainee =
    courseCreationTraineeOptions.find((item) => item.id === value.traineeId) ?? null;

  const updateField = <K extends keyof ICourseCreateInput>(
    key: K,
    fieldValue: ICourseCreateInput[K],
  ) => {
    onChange({
      ...value,
      [key]: fieldValue,
    });
  };

  const updateDurationField = <K extends keyof ICourseCreateInput["duration"]>(
    key: K,
    durationValue: ICourseCreateInput["duration"][K],
  ) => {
    onChange({
      ...value,
      duration: {
        ...value.duration,
        [key]: durationValue,
      },
    });
  };

  const addMilestone = () => {
    const nextIndex = value.milestones.length + 1;

    onChange({
      ...value,
      milestones: [
        ...value.milestones,
        {
          id: `milestone-offset-${nextIndex}-${Date.now()}`,
          offset: nextIndex,
          unit: value.duration.unit,
        },
      ],
    });
  };

  const removeMilestone = (id: string) => {
    onChange({
      ...value,
      milestones: value.milestones.filter((item) => item.id !== id),
    });
  };

  const updateMilestoneField = (
    id: string,
    key: "offset" | "unit",
    fieldValue: number | ICourseCreateInput["duration"]["unit"],
  ) => {
    onChange({
      ...value,
      milestones: value.milestones.map((item) =>
        item.id === id
          ? {
              ...item,
              [key]: fieldValue,
            }
          : item,
      ),
    });
  };

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
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Core course data
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          These are the main inputs needed before building program content.
        </Typography>

        <Box
          sx={{
            mt: 3,
            overflowY: "auto",
            minHeight: 0,
            pr: 0.5,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          <TextField
            label="Course title"
            value={value.title}
            onChange={(event) => updateField("title", event.target.value)}
            fullWidth
          />

          <TextField
            label="Primary goal"
            value={value.primaryGoal}
            onChange={(event) => updateField("primaryGoal", event.target.value)}
            placeholder="e.g. Improve strength and movement quality"
            fullWidth
          />

          <Autocomplete<CourseCreationTraineeOption>
            options={courseCreationTraineeOptions}
            value={selectedTrainee}
            onChange={(_, option) => updateField("traineeId", option?.id ?? "")}
            getOptionLabel={(option) => option.name}
            fullWidth
            renderOption={(props, option) => (
              <Box component="li" {...props} sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
                <Avatar src={option.avatar} alt={option.name} sx={{ width: 28, height: 28 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {option.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {option.courseName}
                  </Typography>
                </Box>
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Assign trainee" />
            )}
          />

          <TextField
            label="Duration value"
            type="number"
            value={value.duration.value}
            onChange={(event) => updateDurationField("value", Math.max(Number(event.target.value) || 0, 0))}
            fullWidth
          />

          <TextField
            select
            label="Duration unit"
            value={value.duration.unit}
            onChange={(event) => updateDurationField("unit", event.target.value as ICourseCreateInput["duration"]["unit"])}
            fullWidth
          >
            {courseDurationUnitOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Course brief"
            value={value.description}
            onChange={(event) => updateField("description", event.target.value)}
            multiline
            minRows={5}
            fullWidth
            sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}
          />

          <Box
            sx={{
              gridColumn: { xs: "span 1", md: "span 2" },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: theme.shape.rounded.light,
              backgroundColor: "background.default",
              p: 1.5,
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
              sx={{ alignItems: { xs: "stretch", sm: "center" }, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Milestone offsets
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Set checkpoints like Week 2, Week 4, Month 1 in structured numeric fields.
                </Typography>
              </Box>

              <Button onClick={addMilestone} startIcon={<AddRounded />} sx={{ alignSelf: { xs: "flex-start", sm: "center" } }}>
                Add milestone
              </Button>
            </Stack>

            <Stack spacing={1.25} sx={{ mt: 1.5 }}>
              {value.milestones.map((milestone, index) => (
                <Box
                  key={milestone.id}
                  sx={{
                    p: 1.25,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: theme.shape.rounded.light,
                    backgroundColor: "background.paper",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr auto" },
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label={`Milestone ${index + 1}`}
                    type="number"
                    value={milestone.offset}
                    onChange={(event) =>
                      updateMilestoneField(
                        milestone.id,
                        "offset",
                        Math.max(Number(event.target.value) || 0, 0),
                      )
                    }
                    fullWidth
                  />

                  <TextField
                    select
                    label="Unit"
                    value={milestone.unit}
                    onChange={(event) =>
                      updateMilestoneField(
                        milestone.id,
                        "unit",
                        event.target.value as ICourseCreateInput["duration"]["unit"],
                      )
                    }
                    fullWidth
                  >
                    {courseDurationUnitOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>

                  <IconButton
                    aria-label="remove milestone"
                    onClick={() => removeMilestone(milestone.id)}
                    sx={{ color: "text.secondary" }}
                  >
                    <DeleteOutlineRounded fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};