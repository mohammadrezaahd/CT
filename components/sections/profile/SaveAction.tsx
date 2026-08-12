"use client";

import { SaveRounded } from "@mui/icons-material";
import { Box, Fab, useTheme } from "@mui/material";

export const ProfileSaveAction = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: { xs: "fixed", md: "sticky" },
        bottom: {
          xs: "calc(env(safe-area-inset-bottom, 0px) + 92px)",
          sm: "calc(env(safe-area-inset-bottom, 0px) + 104px)",
          md: 24,
        },
        right: {
          xs: 16,
          sm: 20,
          md: "auto",
        },
        display: "flex",
        justifyContent: "flex-end",
        mt: 3,
        zIndex: theme.zIndex.appBar,
        pointerEvents: "none",
      }}
    >
      <Fab
        color="primary"
        aria-label="save profile"
        sx={{
          pointerEvents: "auto",
          boxShadow: theme.shadows[6],
        }}
      >
        <SaveRounded />
      </Fab>
    </Box>
  );
};
