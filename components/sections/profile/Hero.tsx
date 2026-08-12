"use client";

import {
  AccessTimeRounded,
  EmailRounded,
  HomeRounded,
  LocalPhoneRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { formatProfileDate, profileUser } from "./shared";

export const ProfileHero = () => {
  const theme = useTheme();
  const { mode } = useColorScheme();

  const quickFacts = [
    {
      icon: <EmailRounded fontSize="small" />,
      label: "Primary contact",
      value: profileUser.email,
    },
    {
      icon: <LocalPhoneRounded fontSize="small" />,
      label: "Mobile",
      value: profileUser.phoneNumber,
    },
    {
      icon: <HomeRounded fontSize="small" />,
      label: "Based in",
      value: profileUser.location,
    },
    {
      icon: <AccessTimeRounded fontSize="small" />,
      label: "Last updated",
      value: formatProfileDate(profileUser.updatedAt),
    },
  ];

  return (
    <Card
      sx={{
        overflow: "hidden",
        borderRadius: theme.shape.rounded.medium,
        background: theme.gradients[mode === "dark" ? "dark" : "light"].profileHero,
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            <Avatar
              src={profileUser.avatarUrl}
              alt={`${profileUser.firstName} ${profileUser.lastName}`}
              sx={{
                width: 88,
                height: 88,
                border: "3px solid",
                borderColor: "background.paper",
                boxShadow: theme.shadows[4],
              }}
            />

            <Box>
              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: "wrap" }}>
                <Chip
                  label={profileUser.role}
                  sx={{
                    backgroundColor: "green.main",
                    color: "green.sub",
                    fontWeight: 700,
                  }}
                />

                <Chip
                  label={profileUser.title}
                  variant="outlined"
                  sx={{
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                  }}
                />
              </Stack>

              <Typography
                variant="h4"
                sx={{
                  mt: 1.5,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                {`${profileUser.firstName} ${profileUser.lastName}`}
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 1, maxWidth: 680 }}>
                {profileUser.about}
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(4, minmax(0, 1fr))",
            },
            gap: 1.5,
          }}
        >
          {quickFacts.map((fact) => (
            <Box
              key={fact.label}
              sx={{
                p: 1.5,
                borderRadius: theme.shape.rounded.light,
                border: "1px solid",
                borderColor: "divider",
                backgroundColor: "background.paper",
              }}
            >
              <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: theme.shape.rounded.light,
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "primary.light",
                    color: "primary.dark",
                    flexShrink: 0,
                  }}
                >
                  {fact.icon}
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="caption" color="text.secondary">
                    {fact.label}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 600, wordBreak: "break-word" }}>
                    {fact.value}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
