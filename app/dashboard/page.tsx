"use client";

import {
  Box,
  Card,
  Typography,
  Stack,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  GroupsRounded,
  FitnessCenterRounded,
  EventAvailableRounded,
  TrendingUpRounded,
  CheckCircleRounded,
  PendingRounded,
  BlockRounded,
  PlayArrowRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";

import trainees from "@/public/fakeData/traineeList.json";
import { TraineesTableLevel, TraineesTableStatus } from "@/interfaces";

const Dashboard = () => {
  // Get today's date
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Sort trainees by updatedAt (newest first) and show all
  const sortedTrainees = [...trainees].sort((a, b) => {
    return new Date(b.updaatedAt).getTime() - new Date(a.updaatedAt).getTime();
  });

  // Show all trainees (no limit)
  const displayedTrainees = sortedTrainees;

  // Map status to icon and color
  const getStatusConfig = (status: string) => {
    switch (status) {
      case TraineesTableStatus.COMP:
        return {
          icon: <CheckCircleRounded sx={{ fontSize: 14 }} />,
          bgColor: "green.main",
          textColor: "green.sub",
        };
      case TraineesTableStatus.PROG:
        return {
          icon: <PlayArrowRounded sx={{ fontSize: 14 }} />,
          bgColor: "blue.main",
          textColor: "blue.sub",
        };
      case TraineesTableStatus.PEND:
        return {
          icon: <PendingRounded sx={{ fontSize: 14 }} />,
          bgColor: "yellow.main",
          textColor: "yellow.sub",
        };
      case TraineesTableStatus.FAILD:
        return {
          icon: <BlockRounded sx={{ fontSize: 14 }} />,
          bgColor: "red.main",
          textColor: "red.sub",
        };
      default:
        return {
          icon: <PendingRounded sx={{ fontSize: 14 }} />,
          bgColor: "grey.200",
          textColor: "grey.500",
        };
    }
  };

  // Map level to color
  const getLevelColor = (level: string) => {
    switch (level) {
      case TraineesTableLevel.EZ:
        return "green.sub";
      case TraineesTableLevel.MED:
        return "yellow.sub";
      case TraineesTableLevel.HARD:
        return "red.sub";
      default:
        return "grey.500";
    }
  };

  // Get status label
  const getStatusLabel = (status: string) => {
    switch (status) {
      case TraineesTableStatus.COMP:
        return "Completed";
      case TraineesTableStatus.PROG:
        return "In Progress";
      case TraineesTableStatus.PEND:
        return "Not Started";
      case TraineesTableStatus.FAILD:
        return "Skipped";
      default:
        return status;
    }
  };

  return (
    <Box sx={{ width: "100%", py: 4 }}>
      {/* Welcome Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Good morning, Coach Alireza
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 1,
              maxWidth: 600,
            }}
          >
            You have 6 active courses and 2 trainees requiring attention.
          </Typography>
        </Box>
      </Box>

      {/* Overview Stats - 3 cards with grid layout */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          },
          gap: 3,
          mt: 4,
        }}
      >
        {/* Total Trainees */}
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            transition: "all 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                Total Trainees
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1, // Less border radius - more square
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "green.main",
                  color: "green.sub",
                }}
              >
                <GroupsRounded fontSize="small" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1,
                  fontSize: "2.5rem",
                }}
              >
                24
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  backgroundColor: "green.main",
                  px: 1,
                  py: 0.4,
                  borderRadius: 1.5,
                }}
              >
                <TrendingUpRounded sx={{ fontSize: 14, color: "green.sub" }} />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    color: "green.sub",
                    fontSize: "0.7rem",
                  }}
                >
                  +3 this week
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Card>

        {/* Active Courses */}
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            transition: "all 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                Active Courses
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1, // Less border radius - more square
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "blue.main",
                  color: "blue.sub",
                }}
              >
                <FitnessCenterRounded fontSize="small" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1,
                  fontSize: "2.5rem",
                }}
              >
                6
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                ongoing
              </Typography>
            </Box>
          </Stack>
        </Card>

        {/* Ending Soon */}
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            transition: "all 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          <Stack spacing={1.5}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                Ending Soon
              </Typography>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1, // Less border radius - more square
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "yellow.main",
                  color: "yellow.sub",
                }}
              >
                <EventAvailableRounded fontSize="small" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 1.5,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1,
                  fontSize: "2.5rem",
                }}
              >
                3
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                this month
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Box>

      {/* Today's Overview - Table with responsive design */}
      <Box sx={{ mt: 5 }}>
        {/* Table Container with header included */}
        <Box
          sx={{
            width: { xs: "100%", md: "66.666%" },
            maxWidth: { xs: "100%", md: "66.666%" },
          }}
        >
          <Paper
            sx={{
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            {/* Header section - part of the table */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2.5,
                pb: 1.5,
                flexWrap: "wrap",
                gap: 2,
                backgroundColor: "background.paper",
                borderBottom: "1px solid",
                borderColor: "divider",
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Today's Overview
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dateStr} - {trainees.length} sessions scheduled
                </Typography>
              </Box>
              <Button
                variant="outlined"
                endIcon={<ArrowForwardRounded />}
                sx={{
                  borderRadius: 2,
                  borderColor: "divider",
                  color: "text.secondary",
                  "&:hover": {
                    borderColor: "primary.main",
                    color: "primary.main",
                  },
                }}
              >
                View All
              </Button>
            </Box>

            <TableContainer
              sx={{
                maxHeight: 450,
                width: "100%",
              }}
            >
              <Table
                sx={{
                  width: "100%",
                  tableLayout: "fixed",
                  minWidth: { xs: 500, sm: 600 },
                }}
                stickyHeader
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: "grey.50" }}>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        width: { xs: "30%", sm: "35%" },
                        minWidth: { xs: 120, sm: 150 },
                      }}
                    >
                      TRAINEE
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        width: { xs: "30%", sm: "25%" },
                        minWidth: { xs: 100, sm: 120 },
                      }}
                    >
                      STATUS
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        width: { xs: "15%", sm: "15%" },
                        minWidth: { xs: 60, sm: 70 },
                        textAlign: "center",
                      }}
                    >
                      LEVEL
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        color: "text.secondary",
                        width: { xs: "25%", sm: "25%" },
                        minWidth: { xs: 80, sm: 100 },
                        textAlign: "center",
                      }}
                    >
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayedTrainees.map((trainee, index) => {
                    const statusConfig = getStatusConfig(trainee.status);
                    const levelColor = getLevelColor(trainee.level);
                    const statusLabel = getStatusLabel(trainee.status);

                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:hover": {
                            backgroundColor: "grey.50",
                          },
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        {/* Trainee Info */}
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: { xs: 1, sm: 2 },
                            }}
                          >
                            <Box
                              sx={{
                                width: { xs: 32, sm: 40 },
                                height: { xs: 32, sm: 40 },
                                borderRadius: "50%",
                                overflow: "hidden",
                                flexShrink: 0,
                                backgroundColor: "grey.200",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {trainee.avatar ? (
                                <Box
                                  component="img"
                                  src={trainee.avatar}
                                  alt={trainee.name}
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
                                    fontSize: { xs: "0.8rem", sm: "1rem" },
                                  }}
                                >
                                  {trainee.name.charAt(0)}
                                </Typography>
                              )}
                            </Box>
                            <Box sx={{ minWidth: 0, flex: 1 }}>
                              <Typography
                                sx={{
                                  fontWeight: 600,
                                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {trainee.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  fontSize: { xs: "0.65rem", sm: "0.75rem" },
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {trainee.courseName}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>

                        {/* Status - Rectangle badge with less border radius */}
                        <TableCell>
                          <Chip
                            icon={statusConfig.icon}
                            label={statusLabel}
                            size="small"
                            sx={{
                              backgroundColor: statusConfig.bgColor,
                              color: statusConfig.textColor,
                              fontWeight: 600,
                              fontSize: { xs: "0.6rem", sm: "0.7rem" },
                              borderRadius: 1,
                              minWidth: { xs: 80, sm: 110 },
                              height: { xs: 24, sm: 28 },
                              "& .MuiChip-icon": {
                                color: statusConfig.textColor,
                                fontSize: { xs: 12, sm: 14 },
                              },
                              "& .MuiChip-label": {
                                px: { xs: 1, sm: 1.5 },
                              },
                            }}
                          />
                        </TableCell>

                        {/* Level - Centered, no background */}
                        <TableCell align="center">
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: { xs: "0.7rem", sm: "0.8rem" },
                              color: levelColor,
                            }}
                          >
                            {trainee.level}
                          </Typography>
                        </TableCell>

                        {/* View Button - Green background */}
                        <TableCell align="center">
                          <Button
                            variant="contained"
                            size="small"
                            sx={{
                              borderRadius: 1.5,
                              fontWeight: 600,
                              fontSize: { xs: "0.65rem", sm: "0.75rem" },
                              minWidth: { xs: 55, sm: 75 },
                              padding: { xs: "3px 12px", sm: "5px 20px" },
                              backgroundColor: "green.main",
                              color: "green.sub",
                              textTransform: "none",
                              "&:hover": {
                                backgroundColor: "green.dark",
                              },
                            }}
                          >
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
