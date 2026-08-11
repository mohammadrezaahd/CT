"use client";

import {
  Box,
  Chip,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

interface ActiveCourseItem {
  id: string;
  name: string;
  status: "On Track" | "Needs Attention" | "Delayed";
  totalDays: number;
  elapsedDays: number;
}

const courses: ActiveCourseItem[] = [
  {
    id: "course-1",
    name: "Strength Foundations",
    status: "On Track",
    totalDays: 56,
    elapsedDays: 34,
  },
  {
    id: "course-2",
    name: "Mobility Reset",
    status: "Needs Attention",
    totalDays: 42,
    elapsedDays: 26,
  },
  {
    id: "course-3",
    name: "Endurance Builder",
    status: "Delayed",
    totalDays: 60,
    elapsedDays: 39,
  },
  {
    id: "course-4",
    name: "Core Stability",
    status: "On Track",
    totalDays: 35,
    elapsedDays: 20,
  },
  {
    id: "course-5",
    name: "Weight Management",
    status: "Needs Attention",
    totalDays: 50,
    elapsedDays: 22,
  },
  {
    id: "course-6",
    name: "Injury Recovery",
    status: "On Track",
    totalDays: 45,
    elapsedDays: 28,
  },
];

const getStatusStyle = (status: ActiveCourseItem["status"]) => {
  if (status === "On Track") {
    return {
      bg: "green.main",
      text: "green.sub",
    };
  }

  if (status === "Needs Attention") {
    return {
      bg: "yellow.main",
      text: "yellow.sub",
    };
  }

  return {
    bg: "red.main",
    text: "red.sub",
  };
};

export const DashboardActiveCourses = () => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        mt: 5,
        borderRadius: theme.shape.rounded.medium,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 1,
          mb: 2.5,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Active Courses
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 0.5,
            }}
          >
            Swipe or scroll to review all active programs
          </Typography>
        </Box>

        <Typography variant="caption" color="text.secondary">
          4 visible cards
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          gridAutoColumns: {
            xs: "minmax(240px, 86%)",
            sm: "minmax(250px, 48%)",
            md: "calc((100% - 36px) / 4)",
          },
          gap: 1.5,
          overflowX: "auto",
          pb: 1,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",

          "&::-webkit-scrollbar": {
            height: 8,
          },

          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.divider,
            borderRadius: 999,
          },
        }}
      >
        {courses.map((course) => {
          const remainingDays = Math.max(course.totalDays - course.elapsedDays, 0);
          const progress = Math.min(
            Math.max((course.elapsedDays / course.totalDays) * 100, 0),
            100,
          );
          const statusStyle = getStatusStyle(course.status);

          return (
            <Box
              key={course.id}
              sx={{
                p: 2,
                borderRadius: theme.shape.rounded.light,
                border: "1px solid",
                borderColor: "divider",
                scrollSnapAlign: "start",
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    minWidth: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {course.name}
                </Typography>

                <Chip
                  label={course.status}
                  size="small"
                  sx={{
                    backgroundColor: statusStyle.bg,
                    color: statusStyle.text,
                    fontWeight: 600,
                    borderRadius: theme.shape.rounded.square,
                    flexShrink: 0,
                  }}
                />
              </Box>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  mt: 0.75,
                  display: "block",
                }}
              >
                {`Elapsed ${course.elapsedDays} days | Remaining ${remainingDays} days`}
              </Typography>

              <Box
                sx={{
                  mt: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: `conic-gradient(${theme.palette.primary.main} ${progress}%, ${theme.palette.action.hover} ${progress}% 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "background.paper",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {`${Math.round(progress)}%`}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                  }}
                >
                  <Box
                    sx={{
                      height: 8,
                      borderRadius: 999,
                      backgroundColor: "action.hover",
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <Box
                      sx={{
                        width: `${progress}%`,
                        height: "100%",
                        borderRadius: 999,
                        backgroundColor: "primary.main",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: `calc(${progress}% - 7px)`,
                        transform: "translateY(-50%)",
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        backgroundColor: "primary.main",
                        border: "2px solid",
                        borderColor: "background.paper",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.25)",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
};
