"use client";

import {
  Box,
  Card,
  Chip,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { coachDashboardData } from "@/public/fakeData/coachDashboard";
import { getStatusConfig, getStatusLabel } from "@/ui";

export const DashboardActiveCourses = () => {
  const theme = useTheme();
  const courses = coachDashboardData.activeCourses;

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
          const elapsedDays = Math.max(course.elapsed, 0);
          const remainingDays = Math.max(course.remaining, 0);
          const progress = Math.min(Math.max(course.completion, 0), 100);
          const statusStyle = getStatusConfig(course.status);

          return (
            <Card
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
                  {course.title}
                </Typography>

                <Chip
                  label={getStatusLabel(course.status)}
                  size="small"
                  sx={{
                    backgroundColor: statusStyle.bgColor,
                    color: statusStyle.textColor,
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
                {`Elapsed ${elapsedDays} days | Remaining ${remainingDays} days`}
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
            </Card>
          );
        })}
      </Box>
    </Paper>
  );
};
