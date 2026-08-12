"use client";

import Link from "next/link";
import { dashboardBaseRoute } from "@/public/consts/dashboardItems";
import { AccessTimeRounded, FlagRounded } from "@mui/icons-material";
import { ArrowForwardRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Card, Chip, Stack, Typography, useTheme } from "@mui/material";

import { ICourseSummary } from "@/interfaces";
import {
  getPublishStatusConfig,
  getPublishStatusLabel,
  getStatusConfig,
  getStatusLabel,
} from "@/ui";
import { formatCourseDate } from "@/utils/dateFormatter";

export const CourseCard = ({ course }: { course: ICourseSummary }) => {
  const theme = useTheme();

  const progressStyle = getStatusConfig(course.status);
  const publishStyle = getPublishStatusConfig(course.publishStatus);

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: theme.shape.rounded.medium,
      }}
    >
      <Stack spacing={1.5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {course.title}
          </Typography>

          <Chip
            size="small"
            label={getStatusLabel(course.status)}
            sx={{
              borderRadius: theme.shape.rounded.square,
              backgroundColor: progressStyle.bgColor,
              color: progressStyle.textColor,
              fontWeight: 700,
            }}
          />
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Avatar
            src={course.trainee.avatar}
            alt={`${course.trainee.firstName} ${course.trainee.lastName}`}
            sx={{ width: 30, height: 30 }}
          />

          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {`${course.trainee.firstName} ${course.trainee.lastName}`}
          </Typography>
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FlagRounded fontSize="small" color="action" />
          <Chip
            label={getPublishStatusLabel(course.publishStatus)}
            size="small"
            sx={{
              borderRadius: theme.shape.rounded.square,
              backgroundColor: publishStyle.bgColor,
              color: publishStyle.textColor,
              fontWeight: 600,
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AccessTimeRounded fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {`${formatCourseDate(course.startDate)} - ${formatCourseDate(course.endDate)}`}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 1,
          }}
        >
          <Box sx={{ p: 1.25, borderRadius: theme.shape.rounded.light, backgroundColor: "background.default" }}>
            <Typography variant="caption" color="text.secondary">
              Progress
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {`${course.completion}%`}
            </Typography>
          </Box>

          <Box sx={{ p: 1.25, borderRadius: theme.shape.rounded.light, backgroundColor: "background.default" }}>
            <Typography variant="caption" color="text.secondary">
              Programs
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {course.programsCount}
            </Typography>
          </Box>

          <Box sx={{ p: 1.25, borderRadius: theme.shape.rounded.light, backgroundColor: "background.default" }}>
            <Typography variant="caption" color="text.secondary">
              Milestones
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 700 }}>
              {course.milestonesCount}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            component={Link}
            href={`${dashboardBaseRoute}/courses/${course.id}`}
            size="small"
            endIcon={<ArrowForwardRounded fontSize="small" />}
            sx={{ px: 1.5 }}
          >
            View details
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
