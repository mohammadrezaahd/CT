"use client";

import { Box, useTheme } from "@mui/material";

import { navigationItems } from "@/public/consts/dashboardItems";

interface DashboardMobileNavProps {
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export const DashboardMobileNav = ({
  activeIndex,
  onNavigate,
}: DashboardMobileNavProps) => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      aria-label="mobile navigation"
      sx={{
        position: "fixed",
        left: "50%",
        bottom: {
          xs: 12,
          sm: 20,
        },
        transform: "translateX(-50%)",

        width: {
          xs: "calc(100% - 24px)",
          sm: "min(520px, calc(100% - 40px))",
        },

        zIndex: theme.zIndex.appBar + 1,

        display: "flex",
        alignItems: "center",

        px: 1,
        py: 1,

        borderRadius: 4,

        backgroundColor: "background.paper",

        border: "1px solid",
        borderColor: "divider",

        boxShadow:
          theme.palette.mode === "dark"
            ? "0 10px 40px rgba(0,0,0,0.45)"
            : "0 10px 40px rgba(0,0,0,0.12)",

        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {navigationItems.map((item, index) => {
        const active = activeIndex === index;
        const Icon = item.icon;

        return (
          <Box
            key={item.label}
            component="button"
            type="button"
            onClick={() => onNavigate(index)}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            sx={{
              flex: 1,
              minWidth: 0,
              height: 48,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              border: 0,
              outline: 0,
              cursor: "pointer",

              borderRadius: 3,

              backgroundColor: active ? "muted.main" : "transparent",

              color: active ? "primary.main" : "text.secondary",

              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: active ? "muted.main" : "action.hover",
              },

              "&:active": {
                transform: "scale(0.94)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.25,
              }}
            >
              <Icon sx={{ fontSize: 22 }} />

              {active && (
                <Box
                  sx={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    backgroundColor: "primary.main",
                  }}
                />
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
