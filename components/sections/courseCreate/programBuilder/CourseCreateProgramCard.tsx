"use client";

import { AddRounded, DeleteOutlineRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { ICourseCreateProgramInput } from "@/interfaces/Interfces";
import { createProgramSectionDraft } from "@/public/fakeData/courseCreate";
import { CourseCreateProgramSectionCard } from "./CourseCreateProgramSectionCard";

interface CourseCreateProgramCardProps {
  program: ICourseCreateProgramInput;
  onChange: (program: ICourseCreateProgramInput) => void;
  onRemove: () => void;
}

export const CourseCreateProgramCard = ({
  program,
  onChange,
  onRemove,
}: CourseCreateProgramCardProps) => {
  const theme = useTheme();

  const addSection = () => {
    const nextOrder = program.sections.length + 1;

    onChange({
      ...program,
      sections: [...program.sections, createProgramSectionDraft(nextOrder)],
    });
  };

  const removeSection = (sectionId: string) => {
    const nextSections = program.sections
      .filter((section) => section.id !== sectionId)
      .map((section, index) => ({
        ...section,
        order: index + 1,
      }));

    onChange({
      ...program,
      sections: nextSections,
    });
  };

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium }}>
      <CardContent sx={{ p: { xs: 2, md: 2.5 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          sx={{ alignItems: { xs: "stretch", md: "center" }, justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {`Program ${program.order}`}
            </Typography>
            <Chip
              label={`${program.sections.length} sections`}
              size="small"
              sx={{
                borderRadius: theme.shape.rounded.square,
                backgroundColor: "green.main",
                color: "green.sub",
                fontWeight: 700,
              }}
            />
          </Stack>

          <IconButton
            aria-label="remove program"
            onClick={onRemove}
            sx={{ color: "text.secondary", alignSelf: { xs: "flex-end", md: "center" } }}
          >
            <DeleteOutlineRounded fontSize="small" />
          </IconButton>
        </Stack>

        <Box
          sx={{
            mt: 1.5,
            display: "grid",
            gap: 1.25,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
          <TextField
            label="Program title"
            value={program.title}
            onChange={(event) => onChange({ ...program, title: event.target.value })}
            fullWidth
          />

          <TextField
            label="Program description"
            value={program.description}
            onChange={(event) => onChange({ ...program, description: event.target.value })}
            fullWidth
          />
        </Box>

        <Button sx={{ mt: 1.5 }} size="small" startIcon={<AddRounded />} onClick={addSection}>
          Add section
        </Button>

        <Stack spacing={1.25} sx={{ mt: 1.5 }}>
          {program.sections
            .slice()
            .sort((a, b) => a.order - b.order)
            .map((section) => (
              <CourseCreateProgramSectionCard
                key={section.id}
                section={section}
                onChange={(nextSection) =>
                  onChange({
                    ...program,
                    sections: program.sections.map((currentSection) =>
                      currentSection.id === nextSection.id ? nextSection : currentSection,
                    ),
                  })
                }
                onRemove={() => removeSection(section.id)}
              />
            ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
