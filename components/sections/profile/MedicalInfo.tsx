"use client";

import {
  FitnessCenterRounded,
  HealthAndSafetyRounded,
  MonitorHeartRounded,
  StraightenRounded,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

import { bloodTypeOptions } from "@/public/consts/bloodTypes";
import { profileUser } from "./shared";

export const ProfileMedicalInfo = () => {
  const theme = useTheme();

  const medicalFields = [
    {
      label: "Height",
      value: `${profileUser.medicalInfo.height}`,
      helper: "cm",
      icon: <StraightenRounded fontSize="small" />,
    },
    {
      label: "Weight",
      value: `${profileUser.medicalInfo.weight}`,
      helper: "kg",
      icon: <FitnessCenterRounded fontSize="small" />,
    },
    {
      label: "Chest",
      value: `${profileUser.medicalInfo.size.chest}`,
      helper: "cm",
      icon: <MonitorHeartRounded fontSize="small" />,
    },
    {
      label: "Waist",
      value: `${profileUser.medicalInfo.size.waist}`,
      helper: "cm",
      icon: <StraightenRounded fontSize="small" />,
    },
    {
      label: "Hip",
      value: `${profileUser.medicalInfo.size.hip}`,
      helper: "cm",
      icon: <StraightenRounded fontSize="small" />,
    },
    {
      label: "Blood type",
      value: profileUser.medicalInfo.bloodType,
      icon: <HealthAndSafetyRounded fontSize="small" />,
      kind: "bloodType" as const,
    },
    {
      label: "Allergies",
      value: profileUser.medicalInfo.allergies,
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    {
      label: "Previous injuries",
      value: profileUser.medicalInfo.injuries,
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    {
      label: "Medical notes",
      value: profileUser.medicalInfo.notes,
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
  ];

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Medical Information
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          Kept separate from general details to make health-related data easier to scan.
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {medicalFields.map((field) => {
            const fieldSx = {
              gridColumn: field.fullWidth ? { xs: "span 1", md: "span 2" } : undefined,
              "& .MuiOutlinedInput-root": {
                alignItems: field.multiline ? "flex-start" : "center",
                backgroundColor: "background.default",
              },
            };

            if (field.kind === "bloodType") {
              return (
                <Autocomplete
                  key={field.label}
                  options={bloodTypeOptions as readonly string[]}
                  defaultValue={field.value}
                  disableClearable
                  sx={fieldSx}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={field.label}
                      slotProps={{
                        inputLabel: {
                          ...params.slotProps.inputLabel,
                          shrink: true,
                        },
                        input: {
                          ...params.slotProps.input,
                          startAdornment: field.icon ? (
                            <>
                              <Box
                                sx={{
                                  mr: 1,
                                  color: "text.secondary",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {field.icon}
                              </Box>
                              {params.slotProps.input.startAdornment}
                            </>
                          ) : (
                            params.slotProps.input.startAdornment
                          ),
                        },
                        htmlInput: params.slotProps.htmlInput,
                      }}
                    />
                  )}
                />
              );
            }

            return (
              <TextField
                key={field.label}
                label={field.label}
                defaultValue={field.value}
                fullWidth
                multiline={field.multiline}
                minRows={field.minRows}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                  input: {
                    startAdornment: field.icon ? (
                      <Box
                        sx={{
                          mr: 1,
                          color: "text.secondary",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {field.icon}
                      </Box>
                    ) : undefined,
                    endAdornment: field.helper ? (
                      <Typography variant="caption" color="text.secondary" sx={{ ml: 1, whiteSpace: "nowrap" }}>
                        {field.helper}
                      </Typography>
                    ) : undefined,
                  },
                }}
                sx={fieldSx}
              />
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};
