"use client";

import { Box, Card, Stack, Typography } from "@mui/material";

import { TrendingUpRounded } from "@mui/icons-material";

import { ReactNode } from "react";

interface DashboardStatCardProps {
  title: string;
  value: string | number;

  icon: ReactNode;

  iconBackground: string;
  iconColor: string;

  trend?: string;
  trendColor?: string;
  trendBackground?: string;

  description?: string;
}

export const DashboardStatCard = ({
  title,
  value,
  icon,
  iconBackground,
  iconColor,
  trend,
  trendColor,
  trendBackground,
  description,
}: DashboardStatCardProps) => {
  return (
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
        {/* Header */}

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
            sx={{
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              width: 40,
              height: 40,

              borderRadius: 1,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: iconBackground,
              color: iconColor,
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Value */}

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
            {value}
          </Typography>

          {trend && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,

                backgroundColor: trendBackground,

                px: 1,
                py: 0.4,

                borderRadius: 1.5,
              }}
            >
              <TrendingUpRounded
                sx={{
                  fontSize: 14,
                  color: trendColor,
                }}
              />

              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: trendColor,
                  fontSize: "0.7rem",
                }}
              >
                {trend}
              </Typography>
            </Box>
          )}

          {description && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontWeight: 500,
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
};
