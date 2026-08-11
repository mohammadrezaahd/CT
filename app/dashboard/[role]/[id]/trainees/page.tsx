"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

const TraineesPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Card>
        <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Trainees
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Trainee management UI will be added here. Routing is wired and currently uses fixed dashboard params.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TraineesPage;