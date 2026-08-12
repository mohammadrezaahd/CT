"use client";

import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";

import { ICourseDetails } from "@/interfaces";
import { formatDate } from "@/utils/dateFormatter";

export const CourseMilestones = ({
  course,
  fullHeight = false,
}: {
  course: ICourseDetails;
  fullHeight?: boolean;
}) => {
  const theme = useTheme();
  const milestones = course.milestones.slice().sort((a, b) => a.order - b.order);
  const completion = Math.min(Math.max(course.completion, 0), 100);

  const getPinLeft = (index: number) => {
    if (milestones.length <= 1) {
      return 0;
    }

    return (index / (milestones.length - 1)) * 100;
  };

  return (
    <Card
      sx={{
        borderRadius: theme.shape.rounded.medium,
        height: fullHeight ? "100%" : "auto",
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, md: 3 },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Milestones
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
          Visual timeline of delivery progress with milestone pins.
        </Typography>

        <Box sx={{ mt: 2.5, px: 1 }}>
          <Box
            sx={{
              position: "relative",
              height: 10,
              borderRadius: 999,
              backgroundColor: "action.hover",
              overflow: "visible",
            }}
          >
            <Box
              sx={{
                width: `${completion}%`,
                height: "100%",
                borderRadius: 999,
                backgroundColor: "primary.main",
              }}
            />

            {milestones.map((milestone, index) => {
              const left = getPinLeft(index);
              const reached = left <= completion;

              return (
                <Box
                  key={milestone.id}
                  sx={{
                    position: "absolute",
                    left: `${left}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "2px solid",
                    borderColor: reached ? "primary.main" : "divider",
                    backgroundColor: reached ? "primary.main" : "background.paper",
                    boxShadow: theme.shadows[1],
                    zIndex: 2,
                  }}
                />
              );
            })}

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: `${completion}%`,
                transform: "translate(-50%, -50%)",
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: "background.paper",
                border: "3px solid",
                borderColor: "primary.main",
                boxShadow: "0 0 0 4px",
                color: "primary.light",
                zIndex: 3,
              }}
            />
          </Box>

          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Start
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              {`${Math.round(completion)}% complete`}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              End
            </Typography>
          </Box>
        </Box>

        <Stack
          spacing={1.25}
          sx={{
            mt: 2,
            minHeight: 0,
            overflowY: fullHeight ? "auto" : "visible",
            pr: fullHeight ? 0.5 : 0,
          }}
        >
          {milestones.map((milestone, index) => {
            const pinLeft = getPinLeft(index);
            const reached = pinLeft <= completion;

            return (
              <Box
                key={milestone.id}
                sx={{
                  p: 1.5,
                  borderRadius: theme.shape.rounded.light,
                  border: "1px solid",
                  borderColor: reached ? "primary.light" : "divider",
                  backgroundColor: "background.default",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {`${milestone.order}. ${milestone.title}`}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: reached ? "primary.dark" : "text.secondary",
                    }}
                  >
                    {reached ? "Reached" : "Pending"}
                  </Typography>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
                  Due: {formatDate(milestone.dueDate, { options: { year: "numeric", month: "short", day: "numeric" } })}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};
