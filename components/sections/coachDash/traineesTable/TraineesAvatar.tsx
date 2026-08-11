"use client";

import { Box, Typography, useTheme } from "@mui/material";

interface TraineeAvatarProps {
  src?: string;
  name: string;
}

export const TraineeAvatar = ({ src, name }: TraineeAvatarProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: {
          xs: 32,
          sm: 40,
        },

        height: {
          xs: 32,
          sm: 40,
        },

        borderRadius: theme.shape.rounded.circle,
        overflow: "hidden",
        flexShrink: 0,

        backgroundColor: "grey.200",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {src ? (
        <Box
          component="img"
          src={src}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,

            fontSize: {
              xs: "0.8rem",
              sm: "1rem",
            },
          }}
        >
          {name.charAt(0)}
        </Typography>
      )}
    </Box>
  );
};
