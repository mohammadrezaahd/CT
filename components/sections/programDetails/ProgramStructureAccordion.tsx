"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMoreRounded } from "@mui/icons-material";

import {
  ProgramDurationUnit,
  IProgramDetails,
  IProgramExercise,
  IProgramGroup,
  ProgramItemType,
} from "@/interfaces";

const formatSetValue = (value?: number) => (typeof value === "number" ? value : "-");

const isExerciseItem = (item: IProgramExercise | IProgramGroup): item is IProgramExercise =>
  item.type === ProgramItemType.EXERCISE;

const isGroupItem = (item: IProgramExercise | IProgramGroup): item is IProgramGroup =>
  item.type === ProgramItemType.GROUP;

const formatDuration = (duration?: number, unit?: ProgramDurationUnit) => {
  if (typeof duration !== "number") {
    return "-";
  }

  const labelByUnit: Record<ProgramDurationUnit, string> = {
    SECOND: "sec",
    MINUTE: "min",
  };

  return `${duration} ${labelByUnit[unit ?? ProgramDurationUnit.SECOND]}`;
};

export const ProgramStructureAccordion = ({
  program,
}: {
  program: IProgramDetails;
}) => {
  const theme = useTheme();
  const [hoveredRoundKey, setHoveredRoundKey] = useState<string | null>(null);

  const sortedSections = program.sections.slice().sort((a, b) => a.order - b.order);

  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1.25,
      }}
    >
      {sortedSections.map((section) => {
        const items = section.items.slice().sort((a, b) => a.order - b.order);
        const groupCount = items.filter((item) => isGroupItem(item)).length;
        const exerciseCount = items.reduce((sum, item) => {
          if (isExerciseItem(item)) {
            return sum + 1;
          }

          return sum + item.exercises.length;
        }, 0);

        return (
          <Accordion
            key={section.id}
            defaultExpanded={section.order === 1}
            disableGutters
            sx={{
              borderRadius: `${theme.shape.borderRadius}px !important`,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              overflow: "hidden",
              "&::before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreRounded />}
              sx={{
                px: 2,
                py: 1.25,
                backgroundColor: "background.default",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  gap: 1,
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 700 }}>
                    {`${section.order}. ${section.title}`}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {section.description}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: "wrap" }}>
                  <Chip
                    label={`${items.length} items`}
                    size="small"
                    sx={{
                      borderRadius: theme.shape.rounded.square,
                      backgroundColor: "blue.main",
                      color: "blue.sub",
                      fontWeight: 700,
                    }}
                  />
                  <Chip
                    label={`${exerciseCount} exercises`}
                    size="small"
                    sx={{
                      borderRadius: theme.shape.rounded.square,
                      backgroundColor: "green.main",
                      color: "green.sub",
                      fontWeight: 700,
                    }}
                  />
                  <Chip
                    label={`${groupCount} groups`}
                    size="small"
                    sx={{
                      borderRadius: theme.shape.rounded.square,
                      backgroundColor: "yellow.main",
                      color: "yellow.sub",
                      fontWeight: 700,
                    }}
                  />
                </Stack>
              </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ px: { xs: 1.25, md: 2 }, pb: 2 }}>
              <Stack spacing={1.25}>
                {items.map((item) => {
                  if (isExerciseItem(item)) {
                    const sets = item.sets.slice().sort((a, b) => a.order - b.order);

                    return (
                      <Box
                        key={item.id}
                        sx={{
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: theme.shape.rounded.light,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            px: 1.5,
                            py: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                            backgroundColor: "background.default",
                            borderBottom: "1px solid",
                            borderColor: "divider",
                            flexWrap: "wrap",
                          }}
                        >
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {`${item.order}. ${item.title}`}
                          </Typography>
                          <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: "wrap" }}>
                            {item.equipment ? (
                              <Chip
                                size="small"
                                label={`Equipment: ${item.equipment}`}
                                sx={{
                                  borderRadius: theme.shape.rounded.square,
                                  backgroundColor: "background.paper",
                                  color: "text.secondary",
                                  fontWeight: 700,
                                }}
                              />
                            ) : null}
                            {typeof item.duration === "number" ? (
                              <Chip
                                size="small"
                                label={`Duration: ${formatDuration(item.duration, item.durationUnit)}`}
                                sx={{
                                  borderRadius: theme.shape.rounded.square,
                                  backgroundColor: "background.paper",
                                  color: "text.secondary",
                                  fontWeight: 700,
                                }}
                              />
                            ) : null}
                          </Stack>

                          <Chip
                            size="small"
                            label="Exercise"
                            sx={{
                              borderRadius: theme.shape.rounded.square,
                              backgroundColor: "blue.main",
                              color: "blue.sub",
                              fontWeight: 700,
                            }}
                          />
                        </Box>

                        <TableContainer>
                          <Table size="small">
                            <TableHead>
                              <TableRow>
                                <TableCell sx={{ fontWeight: 700 }}>Set</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>Reps</TableCell>
                                <TableCell sx={{ fontWeight: 700 }}>Weight</TableCell>
                              </TableRow>
                            </TableHead>

                            <TableBody>
                              {sets.map((set) => (
                                <TableRow key={set.id} hover>
                                  <TableCell>{set.order}</TableCell>
                                  <TableCell>{formatSetValue(set.reps)}</TableCell>
                                  <TableCell>
                                    {typeof set.weight === "number"
                                      ? `${set.weight} ${String(set.weightUnit ?? "kg")}`
                                      : "-"}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    );
                  }

                  const exercises = item.exercises.slice().sort((a, b) => a.order - b.order);
                  const rounds = Math.max(item.rounds, 1);

                  return (
                    <Box
                      key={item.id}
                      sx={{
                        border: "1px solid",
                        borderColor: "yellow.sub",
                        borderRadius: theme.shape.rounded.light,
                        overflow: "hidden",
                        backgroundColor: "yellow.main",
                      }}
                    >
                      <Box
                        sx={{
                          px: 1.5,
                          py: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          borderBottom: "1px solid",
                          borderColor: "yellow.sub",
                          flexWrap: "wrap",
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "yellow.sub" }}>
                          {`${item.order}. ${item.title ?? "Group"}`}
                        </Typography>

                        <Stack direction="row" spacing={0.75} useFlexGap sx={{ flexWrap: "wrap" }}>
                          <Chip
                            size="small"
                            label="Group"
                            sx={{
                              borderRadius: theme.shape.rounded.square,
                              backgroundColor: "background.paper",
                              color: "yellow.sub",
                              fontWeight: 700,
                            }}
                          />

                          <Chip
                            size="small"
                            label={`${rounds} rounds`}
                            sx={{
                              borderRadius: theme.shape.rounded.square,
                              backgroundColor: "background.paper",
                              color: "yellow.sub",
                              fontWeight: 700,
                            }}
                          />
                        </Stack>
                      </Box>

                      <TableContainer>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 700 }}>Round</TableCell>
                              <TableCell sx={{ fontWeight: 700 }}>Exercise</TableCell>
                              <TableCell sx={{ fontWeight: 700 }}>Reps</TableCell>
                              <TableCell sx={{ fontWeight: 700 }}>Weight</TableCell>
                              <TableCell sx={{ fontWeight: 700 }}>Duration</TableCell>
                              <TableCell sx={{ fontWeight: 700 }}>Equipment</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {Array.from({ length: rounds }, (_, roundIndex) =>
                              exercises.map((exercise, exerciseIndex) => {
                                const rowKey = `${item.id}-r-${roundIndex + 1}-e-${exercise.id}`;
                                const roundKey = `${item.id}-r-${roundIndex + 1}`;
                                const isRoundHovered = hoveredRoundKey === roundKey;

                                return (
                                  <TableRow
                                    key={rowKey}
                                    onMouseEnter={() => setHoveredRoundKey(roundKey)}
                                    onMouseLeave={() => setHoveredRoundKey((current) => (current === roundKey ? null : current))}
                                    sx={{
                                      backgroundColor:
                                        isRoundHovered
                                          ? "action.selected"
                                          : roundIndex % 2 === 0
                                            ? "background.paper"
                                            : "background.default",
                                      "& > td": {
                                        backgroundColor:
                                          isRoundHovered
                                            ? "action.selected"
                                            : roundIndex % 2 === 0
                                              ? "background.paper"
                                              : "background.default",
                                      },
                                      "&:hover > td": {
                                        backgroundColor: isRoundHovered
                                          ? "action.selected"
                                          : roundIndex % 2 === 0
                                            ? "background.paper"
                                            : "background.default",
                                      },
                                    }}
                                  >
                                    {exerciseIndex === 0 ? (
                                      <TableCell rowSpan={exercises.length} sx={{ fontWeight: 700 }}>
                                        {`R${roundIndex + 1}`}
                                      </TableCell>
                                    ) : null}
                                    <TableCell>
                                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        {exercise.title}
                                      </Typography>
                                    </TableCell>
                                    <TableCell>{formatSetValue(exercise.reps)}</TableCell>
                                    <TableCell>
                                      {typeof exercise.weight === "number"
                                        ? `${exercise.weight} ${String(exercise.weightUnit ?? "kg")}`
                                        : "-"}
                                    </TableCell>
                                    <TableCell>
                                      {formatDuration(exercise.duration, exercise.durationUnit)}
                                    </TableCell>
                                    <TableCell>{exercise.equipment || "-"}</TableCell>
                                  </TableRow>
                                );
                              }),
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  );
                })}
              </Stack>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};
