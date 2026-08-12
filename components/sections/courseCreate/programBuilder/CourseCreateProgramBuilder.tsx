"use client";

import { AddRounded } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography, useTheme } from "@mui/material";

import { ICourseCreateProgramInput, ProgramItemType } from "@/interfaces";
import { createProgramDraft } from "@/public/fakeData/courseCreate";
import { CourseCreateProgramCard } from "./CourseCreateProgramCard";

interface CourseCreateProgramBuilderProps {
  value: ICourseCreateProgramInput[];
  onChange: (value: ICourseCreateProgramInput[]) => void;
}

const countProgramItems = (program: ICourseCreateProgramInput) =>
  program.sections.reduce((sum, section) => sum + section.items.length, 0);

const countProgramExercises = (program: ICourseCreateProgramInput) =>
  program.sections.reduce((sum, section) => {
    return (
      sum +
      section.items.reduce((sectionSum, item) => {
        if (item.type === ProgramItemType.EXERCISE) {
          return sectionSum + 1;
        }

        return sectionSum + item.exercises.length;
      }, 0)
    );
  }, 0);

export const CourseCreateProgramBuilder = ({
  value,
  onChange,
}: CourseCreateProgramBuilderProps) => {
  const theme = useTheme();

  const addProgram = () => {
    onChange([...value, createProgramDraft(value.length + 1)]);
  };

  const removeProgram = (programId: string) => {
    const nextPrograms = value
      .filter((program) => program.id !== programId)
      .map((program, index) => ({
        ...program,
        order: index + 1,
      }));

    onChange(nextPrograms);
  };

  const totalItems = value.reduce((sum, program) => sum + countProgramItems(program), 0);
  const totalExercises = value.reduce((sum, program) => sum + countProgramExercises(program), 0);

  return (
    <Box
      sx={{
        mt: 3,
        p: { xs: 2, md: 2.5 },
        borderRadius: theme.shape.rounded.medium,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1.25}
        sx={{ alignItems: { xs: "stretch", md: "center" }, justifyContent: "space-between" }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Program builder
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Build programs directly in this course draft with editable sections, exercises, and supersets.
          </Typography>
        </Box>

        <Button variant="contained" startIcon={<AddRounded />} onClick={addProgram}>
          Add program
        </Button>
      </Stack>

      <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.5, flexWrap: "wrap" }}>
        <Chip
          label={`${value.length} programs`}
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: "blue.main",
            color: "blue.sub",
            fontWeight: 700,
          }}
        />
        <Chip
          label={`${totalItems} items`}
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: "yellow.main",
            color: "yellow.sub",
            fontWeight: 700,
          }}
        />
        <Chip
          label={`${totalExercises} exercises`}
          sx={{
            borderRadius: theme.shape.rounded.square,
            backgroundColor: "green.main",
            color: "green.sub",
            fontWeight: 700,
          }}
        />
      </Stack>

      <Stack spacing={1.5} sx={{ mt: 2 }}>
        {value
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((program) => (
            <CourseCreateProgramCard
              key={program.id}
              program={program}
              onChange={(nextProgram) =>
                onChange(
                  value.map((currentProgram) =>
                    currentProgram.id === nextProgram.id ? nextProgram : currentProgram,
                  ),
                )
              }
              onRemove={() => removeProgram(program.id)}
            />
          ))}
      </Stack>
    </Box>
  );
};
