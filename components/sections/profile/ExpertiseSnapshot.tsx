"use client";

import { Box, Card, CardContent, Chip, Divider, Stack, Typography, useTheme } from "@mui/material";

import { profileUser } from "./shared";

export const ProfileExpertiseSnapshot = () => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: theme.shape.rounded.medium }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Expertise Snapshot
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary">
          Specialties
        </Typography>

        <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.25, flexWrap: "wrap" }}>
          {profileUser.specialties.map((item) => (
            <Chip
              key={item}
              label={item}
              sx={{
                borderRadius: theme.shape.rounded.square,
                backgroundColor: "blue.main",
                color: "blue.sub",
                fontWeight: 600,
              }}
            />
          ))}
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 2.5 }}>
          Certifications
        </Typography>

        <Stack spacing={1.25} sx={{ mt: 1.25 }}>
          {profileUser.certifications.map((item) => (
            <Box
              key={item}
              sx={{
                p: 1.5,
                borderRadius: theme.shape.rounded.light,
                backgroundColor: "background.default",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
