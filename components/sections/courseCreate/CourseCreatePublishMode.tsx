"use client";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";

import { CourseCreatePublishMode as PublishMode } from "@/interfaces";

export const CourseCreatePublishMode = ({
  value,
  onChange,
}: {
  value: PublishMode;
  onChange: (value: PublishMode) => void;
}) => {
  const theme = useTheme();

  const options: Array<{ value: PublishMode; label: string }> = [
    { value: "DRAFT", label: "Draft" },
    { value: "PUBLISH", label: "Publish" },
  ];

  return (
    <Box
      sx={{
        mt: 2,
        p: 1.25,
        borderRadius: theme.shape.rounded.medium,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Publish mode
        </Typography>

        <Stack direction="row" spacing={1}>
          {options.map((option) => {
            const selected = value === option.value;

            return (
              <Button
                key={option.value}
                variant={selected ? "contained" : "outlined"}
                onClick={() => onChange(option.value)}
                sx={{
                  minWidth: 110,
                  fontWeight: 700,
                  backgroundColor: selected ? "primary.main" : "transparent",
                  color: selected ? "primary.contrastText" : "text.primary",
                  borderColor: selected ? "primary.main" : "divider",
                  "&:hover": {
                    backgroundColor: selected ? "primary.dark" : "action.hover",
                    borderColor: selected ? "primary.dark" : "text.secondary",
                  },
                }}
              >
                {option.label}
              </Button>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};