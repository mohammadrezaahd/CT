"use client";

import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";

import { FC, ReactNode, useState } from "react";

import { DashboardDrawerHeader } from "./DashboardAppBar";

import { DashboardHeader } from "./DashboardHeader";
import { DashboardDrawer } from "./DashboardDrawer";
import { DashboardMobileNav } from "./DashboardMobileNav";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavigation = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <CssBaseline />

      {/* =========================
          Header
      ========================= */}

      <DashboardHeader
        open={open}
        isMobile={isMobile}
        onOpenDrawer={() => setOpen(true)}
      />

      {/* =========================
          Desktop Navigation
      ========================= */}

      {!isMobile && (
        <DashboardDrawer
          open={open}
          activeIndex={activeIndex}
          onNavigate={handleNavigation}
          onClose={() => setOpen(false)}
        />
      )}

      {/* =========================
          Mobile Navigation
      ========================= */}

      {isMobile && (
        <DashboardMobileNav
          activeIndex={activeIndex}
          onNavigate={handleNavigation}
        />
      )}

      {/* =========================
          Main Content
      ========================= */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,

          p: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          /*
           * Space for fixed AppBar
           */
          pt: {
            xs: 10,
            md: 11,
          },

          /*
           * Space for floating mobile navigation
           */
          pb: {
            xs: 11,
            md: 3,
          },
        }}
      >
        {!isMobile && <DashboardDrawerHeader />}

        {children}
      </Box>
    </Box>
  );
};
