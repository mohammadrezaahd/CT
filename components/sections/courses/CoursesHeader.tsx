"use client";

import { Box, Typography } from "@mui/material";

export const CoursesHeader = ({
  total,
  visible,
}: {
  total: number;
  visible: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Courses
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 0.75 }}>
          Filter and review all assigned courses in one place.
        </Typography>
      </Box>

      <Typography variant="caption" color="text.secondary">
        {`${visible} of ${total} courses`}
      </Typography>
    </Box>
  );
};
