"use client";

import { Avatar, Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";

import { ICourseDetails } from "@/interfaces";
import { formatDate, formatCourseDate } from "@/utils/dateFormatter";

export const CourseDetailsOverview = ({
  course,
  fullHeight = false,
}: {
  course: ICourseDetails;
  fullHeight?: boolean;
}) => {
  const theme = useTheme();
  const completion = Math.min(Math.max(course.completion, 0), 100);

  const cards = [
    {
      label: "Programs",
      value: `${course.programsCount}`,
    },
    {
      label: "Milestones",
      value: `${course.milestonesCount}`,
    },
    {
      label: "Timeline",
      value: `${formatCourseDate(course.startDate)} - ${formatCourseDate(course.endDate)}`,
    },
  ];

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
        }}
      >
        <Stack direction="row" spacing={1.25} sx={{ alignItems: "center" }}>
          <Avatar
            src={course.trainee.avatar}
            alt={`${course.trainee.firstName} ${course.trainee.lastName}`}
            sx={{ width: 42, height: 42 }}
          />

          <Box>
            <Typography variant="body2" color="text.secondary">
              Assigned trainee
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              {`${course.trainee.firstName} ${course.trainee.lastName}`}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            mt: 2.5,
            p: 1.5,
            borderRadius: theme.shape.rounded.light,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.default",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 82,
              height: 82,
              borderRadius: "50%",
              background: `conic-gradient(${theme.palette.primary.main} ${completion}%, ${theme.palette.action.hover} ${completion}% 100%)`,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: "50%",
                backgroundColor: "background.paper",
                display: "grid",
                placeItems: "center",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {`${Math.round(completion)}%`}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography variant="body2" color="text.secondary">
              Course completion
            </Typography>
            <Typography variant="h6" sx={{ mt: 0.25, fontWeight: 700 }}>
              {`${Math.round(completion)}% completed`}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: "block" }}>
              {`${Math.max(100 - Math.round(completion), 0)}% remaining`}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 1.5,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
            gap: 1.25,
          }}
        >
          {cards.map((item) => (
            <Box
              key={item.label}
              sx={{
                p: 1.5,
                borderRadius: theme.shape.rounded.light,
                backgroundColor: "background.default",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {item.label}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5, fontWeight: 700 }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mt: "auto", pt: 2, display: "block" }}>
          Last updated: {formatDate(course.updatedAt, { options: { year: "numeric", month: "short", day: "numeric" } })}
        </Typography>
      </CardContent>
    </Card>
  );
};
