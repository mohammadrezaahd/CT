"use client";

import {
  AddRounded,
  DeleteOutlineRounded,
  FitnessCenterRounded,
  RepeatRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import {
  ICourseCreateProgramExerciseInput,
  ICourseCreateProgramSectionInput,
  ICourseCreateProgramSupersetInput,
  ProgramItemType,
  WeightUnit,
} from "@/interfaces";
import {
  createProgramExerciseDraft,
  createProgramSupersetDraft,
} from "@/public/fakeData/courseCreate";

const weightUnitOptions: WeightUnit[] = [WeightUnit.KG, WeightUnit.LB];

interface CourseCreateProgramSectionCardProps {
  section: ICourseCreateProgramSectionInput;
  onChange: (section: ICourseCreateProgramSectionInput) => void;
  onRemove: () => void;
}

const isExerciseItem = (
  item: ICourseCreateProgramSectionInput["items"][number],
): item is ICourseCreateProgramExerciseInput => item.type === ProgramItemType.EXERCISE;

const isSupersetItem = (
  item: ICourseCreateProgramSectionInput["items"][number],
): item is ICourseCreateProgramSupersetInput => item.type === ProgramItemType.SUPERSET;

export const CourseCreateProgramSectionCard = ({
  section,
  onChange,
  onRemove,
}: CourseCreateProgramSectionCardProps) => {
  const theme = useTheme();

  const updateItem = (
    itemId: string,
    updater: (
      item: ICourseCreateProgramSectionInput["items"][number],
    ) => ICourseCreateProgramSectionInput["items"][number],
  ) => {
    onChange({
      ...section,
      items: section.items.map((item) => (item.id === itemId ? updater(item) : item)),
    });
  };

  const addExerciseItem = () => {
    const order = section.items.length + 1;

    onChange({
      ...section,
      items: [...section.items, createProgramExerciseDraft(order)],
    });
  };

  const addSupersetItem = () => {
    const order = section.items.length + 1;

    onChange({
      ...section,
      items: [...section.items, createProgramSupersetDraft(order)],
    });
  };

  const removeItem = (itemId: string) => {
    const nextItems = section.items
      .filter((item) => item.id !== itemId)
      .map((item, index) => ({
        ...item,
        order: index + 1,
      }));

    onChange({
      ...section,
      items: nextItems,
    });
  };

  const updateExercisePrimarySet = (
    exerciseId: string,
    field: "reps" | "weight" | "weightUnit",
    fieldValue: number | WeightUnit,
  ) => {
    updateItem(exerciseId, (currentItem) => {
      if (!isExerciseItem(currentItem)) {
        return currentItem;
      }

      const baseSet = currentItem.sets[0] ?? {
        id: `set-${Date.now()}`,
        order: 1,
        reps: 10,
        weight: 20,
        weightUnit: WeightUnit.KG,
      };

      const nextSet = {
        ...baseSet,
        [field]: fieldValue,
      };

      return {
        ...currentItem,
        sets: [nextSet],
      };
    });
  };

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: theme.shape.rounded.medium,
        backgroundColor: "background.paper",
        p: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1}
        sx={{ alignItems: { xs: "stretch", md: "center" }, justifyContent: "space-between" }}
      >
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {`Section ${section.order}`}
        </Typography>

        <IconButton
          aria-label="remove section"
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
          label="Section title"
          value={section.title}
          onChange={(event) => onChange({ ...section, title: event.target.value })}
          fullWidth
        />

        <TextField
          label="Section description"
          value={section.description}
          onChange={(event) => onChange({ ...section, description: event.target.value })}
          fullWidth
        />
      </Box>

      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        <Button size="small" startIcon={<FitnessCenterRounded />} onClick={addExerciseItem}>
          Add exercise
        </Button>
        <Button size="small" startIcon={<RepeatRounded />} onClick={addSupersetItem}>
          Add superset
        </Button>
      </Stack>

      <Stack spacing={1.25} sx={{ mt: 2 }}>
        {section.items
          .slice()
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            if (isExerciseItem(item)) {
              const primarySet = item.sets[0] ?? {
                id: `set-${item.id}`,
                order: 1,
                reps: 10,
                weight: 20,
                weightUnit: WeightUnit.KG,
              };

              return (
                <Box
                  key={item.id}
                  sx={{
                    display: "grid",
                    gap: 1,
                    gridTemplateColumns: { xs: "1fr", md: "1.3fr 0.7fr 0.7fr 0.6fr auto" },
                    p: 1.25,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: theme.shape.rounded.light,
                    backgroundColor: "background.default",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Exercise name"
                    value={item.title}
                    onChange={(event) =>
                      updateItem(item.id, (currentItem) => ({
                        ...currentItem,
                        title: event.target.value,
                      }))
                    }
                    fullWidth
                  />

                  <TextField
                    label="Reps"
                    type="number"
                    value={primarySet.reps}
                    onChange={(event) =>
                      updateExercisePrimarySet(
                        item.id,
                        "reps",
                        Math.max(Number(event.target.value) || 0, 0),
                      )
                    }
                    fullWidth
                  />

                  <TextField
                    label="Weight"
                    type="number"
                    value={primarySet.weight}
                    onChange={(event) =>
                      updateExercisePrimarySet(
                        item.id,
                        "weight",
                        Math.max(Number(event.target.value) || 0, 0),
                      )
                    }
                    fullWidth
                  />

                  <TextField
                    select
                    label="Unit"
                    value={primarySet.weightUnit}
                    onChange={(event) =>
                      updateExercisePrimarySet(item.id, "weightUnit", event.target.value as WeightUnit)
                    }
                    fullWidth
                  >
                    {weightUnitOptions.map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </TextField>

                  <IconButton
                    aria-label="remove item"
                    onClick={() => removeItem(item.id)}
                    sx={{ color: "text.secondary", alignSelf: "center" }}
                  >
                    <DeleteOutlineRounded fontSize="small" />
                  </IconButton>
                </Box>
              );
            }

            return (
              <Box
                key={item.id}
                sx={{
                  p: 1.5,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: theme.shape.rounded.light,
                  backgroundColor: "yellow.main",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center", justifyContent: "space-between", mb: 1.25 }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {`Item ${item.order}`}
                    </Typography>
                    <Chip
                      size="small"
                      label="Superset"
                      sx={{
                        borderRadius: theme.shape.rounded.square,
                        backgroundColor: "background.paper",
                        color: "yellow.sub",
                        fontWeight: 700,
                      }}
                    />
                  </Stack>

                  <IconButton
                    aria-label="remove item"
                    onClick={() => removeItem(item.id)}
                    sx={{ color: "text.secondary" }}
                  >
                    <DeleteOutlineRounded fontSize="small" />
                  </IconButton>
                </Stack>

                <TextField
                  label="Item title"
                  value={item.title}
                  onChange={(event) =>
                    updateItem(item.id, (currentItem) => ({
                      ...currentItem,
                      title: event.target.value,
                    }))
                  }
                  fullWidth
                />

              {isSupersetItem(item) ? (
                <>
                  <Box
                    sx={{
                      mt: 1.5,
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    }}
                  >
                    <TextField
                      label="Rounds"
                      type="number"
                      value={item.rounds}
                      onChange={(event) =>
                        updateItem(item.id, (currentItem) => {
                          if (!isSupersetItem(currentItem)) {
                            return currentItem;
                          }

                          return {
                            ...currentItem,
                            rounds: Math.max(Number(event.target.value) || 1, 1),
                          };
                        })
                      }
                      fullWidth
                    />

                    <Button
                      variant="outlined"
                      startIcon={<AddRounded />}
                      onClick={() =>
                        updateItem(item.id, (currentItem) => {
                          if (!isSupersetItem(currentItem)) {
                            return currentItem;
                          }

                          return {
                            ...currentItem,
                            exercises: [
                              ...currentItem.exercises,
                              {
                                id: `superset-exercise-${Date.now()}`,
                                title: `Superset Exercise ${currentItem.exercises.length + 1}`,
                                order: currentItem.exercises.length + 1,
                                reps: 10,
                                weight: 10,
                                weightUnit: WeightUnit.KG,
                              },
                            ],
                          };
                        })
                      }
                      sx={{ height: "100%" }}
                    >
                      Add exercise
                    </Button>
                  </Box>

                  <Stack spacing={1} sx={{ mt: 1.25 }}>
                    {item.exercises
                      .slice()
                      .sort((a, b) => a.order - b.order)
                      .map((exercise, index) => (
                        <Box
                          key={exercise.id}
                          sx={{
                            display: "grid",
                            gap: 1,
                            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr auto" },
                            p: 1,
                            border: "1px solid",
                            borderColor: "yellow.sub",
                            borderRadius: theme.shape.rounded.light,
                            backgroundColor: "background.paper",
                          }}
                        >
                          <TextField
                            label={`Exercise ${index + 1}`}
                            value={exercise.title}
                            onChange={(event) =>
                              updateItem(item.id, (currentItem) => {
                                if (!isSupersetItem(currentItem)) {
                                  return currentItem;
                                }

                                return {
                                  ...currentItem,
                                  exercises: currentItem.exercises.map((currentExercise) =>
                                    currentExercise.id === exercise.id
                                      ? {
                                          ...currentExercise,
                                          title: event.target.value,
                                        }
                                      : currentExercise,
                                  ),
                                };
                              })
                            }
                            fullWidth
                          />
                          <TextField
                            label="Reps"
                            type="number"
                            value={exercise.reps}
                            onChange={(event) =>
                              updateItem(item.id, (currentItem) => {
                                if (!isSupersetItem(currentItem)) {
                                  return currentItem;
                                }

                                return {
                                  ...currentItem,
                                  exercises: currentItem.exercises.map((currentExercise) =>
                                    currentExercise.id === exercise.id
                                      ? {
                                          ...currentExercise,
                                          reps: Math.max(Number(event.target.value) || 0, 0),
                                        }
                                      : currentExercise,
                                  ),
                                };
                              })
                            }
                            fullWidth
                          />
                          <TextField
                            label="Weight"
                            type="number"
                            value={exercise.weight}
                            onChange={(event) =>
                              updateItem(item.id, (currentItem) => {
                                if (!isSupersetItem(currentItem)) {
                                  return currentItem;
                                }

                                return {
                                  ...currentItem,
                                  exercises: currentItem.exercises.map((currentExercise) =>
                                    currentExercise.id === exercise.id
                                      ? {
                                          ...currentExercise,
                                          weight: Math.max(Number(event.target.value) || 0, 0),
                                        }
                                      : currentExercise,
                                  ),
                                };
                              })
                            }
                            fullWidth
                          />
                          <TextField
                            select
                            label="Unit"
                            value={exercise.weightUnit}
                            onChange={(event) =>
                              updateItem(item.id, (currentItem) => {
                                if (!isSupersetItem(currentItem)) {
                                  return currentItem;
                                }

                                return {
                                  ...currentItem,
                                  exercises: currentItem.exercises.map((currentExercise) =>
                                    currentExercise.id === exercise.id
                                      ? {
                                          ...currentExercise,
                                          weightUnit: event.target.value as WeightUnit,
                                        }
                                      : currentExercise,
                                  ),
                                };
                              })
                            }
                            fullWidth
                          >
                            {weightUnitOptions.map((unit) => (
                              <MenuItem key={unit} value={unit}>
                                {unit}
                              </MenuItem>
                            ))}
                          </TextField>

                          <IconButton
                            aria-label="remove superset exercise"
                            onClick={() =>
                              updateItem(item.id, (currentItem) => {
                                if (!isSupersetItem(currentItem)) {
                                  return currentItem;
                                }

                                return {
                                  ...currentItem,
                                  exercises: currentItem.exercises
                                    .filter((currentExercise) => currentExercise.id !== exercise.id)
                                    .map((currentExercise, exerciseIndex) => ({
                                      ...currentExercise,
                                      order: exerciseIndex + 1,
                                    })),
                                };
                              })
                            }
                            sx={{ color: "text.secondary", alignSelf: "center" }}
                          >
                            <DeleteOutlineRounded fontSize="small" />
                          </IconButton>
                        </Box>
                      ))}
                  </Stack>
                </>
              ) : null}
              </Box>
            );
          })}
      </Stack>
    </Box>
  );
};
