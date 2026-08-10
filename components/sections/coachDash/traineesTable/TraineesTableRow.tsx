"use client";

import {
  Box,
  Button,
  Chip,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

import { ITraineesResultTable } from "@/interfaces";

import { getLevelColor, getStatusConfig, getStatusLabel } from "@/ui";

import { TraineeAvatar } from "./TraineesAvatar";

interface TraineeTableRowProps {
  trainee: ITraineesResultTable;
}

export const TraineeTableRow = ({ trainee }: TraineeTableRowProps) => {
  const statusConfig = getStatusConfig(trainee.status);

  const levelColor = getLevelColor(trainee.level);

  const statusLabel = getStatusLabel(trainee.status);

  const StatusIcon = statusConfig.icon;

  return (
    <TableRow
      sx={{
        "&:hover": {
          backgroundColor: "grey.50",
        },

        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      {/* Trainee */}

      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            gap: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          <TraineeAvatar src={trainee.avatar} name={trainee.name} />

          <Box
            sx={{
              minWidth: 0,
              flex: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,

                fontSize: {
                  xs: "0.8rem",
                  sm: "0.9rem",
                },

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
                fontSize: {
                  xs: "0.65rem",
                  sm: "0.75rem",
                },

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

      {/* Status */}

      <TableCell>
        <Chip
          icon={<StatusIcon />}
          label={statusLabel}
          size="small"
          sx={{
            backgroundColor: statusConfig.bgColor,

            color: statusConfig.textColor,

            fontWeight: 600,

            fontSize: {
              xs: "0.6rem",
              sm: "0.7rem",
            },

            borderRadius: 1,

            minWidth: {
              xs: 80,
              sm: 110,
            },

            height: {
              xs: 24,
              sm: 28,
            },

            "& .MuiChip-icon": {
              color: statusConfig.textColor,

              fontSize: {
                xs: 12,
                sm: 14,
              },
            },

            "& .MuiChip-label": {
              px: {
                xs: 1,
                sm: 1.5,
              },
            },
          }}
        />
      </TableCell>

      {/* Level */}

      <TableCell align="center">
        <Typography
          sx={{
            fontWeight: 600,

            fontSize: {
              xs: "0.7rem",
              sm: "0.8rem",
            },

            color: levelColor,
          }}
        >
          {trainee.level}
        </Typography>
      </TableCell>

      {/* Action */}

      <TableCell align="center">
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: 1.5,

            fontWeight: 600,

            fontSize: {
              xs: "0.65rem",
              sm: "0.75rem",
            },

            minWidth: {
              xs: 55,
              sm: 75,
            },

            padding: {
              xs: "3px 12px",
              sm: "5px 20px",
            },

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
};
