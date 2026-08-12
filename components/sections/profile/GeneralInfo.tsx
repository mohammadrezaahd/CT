"use client";

import { Box, Card, CardContent, TextField, Typography, useTheme } from "@mui/material";

import { formatProfileDateInputValue, profileUser } from "./shared";

export const ProfileGeneralInfo = () => {
  const theme = useTheme();

  const infoFields = [
    {
      label: "First name",
      value: profileUser.firstName,
    },
    {
      label: "Last name",
      value: profileUser.lastName,
    },
    {
      label: "Email address",
      value: profileUser.email,
    },
    {
      label: "Phone number",
      value: profileUser.phoneNumber,
    },
    {
      label: "Birth date",
      value: formatProfileDateInputValue(profileUser.birthDate),
      kind: "date" as const,
    },
    {
      label: "Location",
      value: profileUser.location,
    },
    {
      label: "Address",
      value: profileUser.address,
      fullWidth: true,
    },
    {
      label: "About",
      value: profileUser.about,
      fullWidth: true,
      multiline: true,
      minRows: 4,
    },
  ];

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          General Information
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          Editable form shell for profile data. No save logic is wired yet.
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {infoFields.map((field) => (
            <TextField
              key={field.label}
              label={field.label}
              type={field.kind === "date" ? "date" : "text"}
              defaultValue={field.value}
              fullWidth
              multiline={field.multiline}
              minRows={field.minRows}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              sx={{
                gridColumn: field.fullWidth ? { xs: "span 1", md: "span 2" } : undefined,
                "& .MuiOutlinedInput-root": {
                  alignItems: field.multiline ? "flex-start" : "center",
                  backgroundColor: "background.default",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
