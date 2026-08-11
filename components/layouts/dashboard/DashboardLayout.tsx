"use client";

import { Box, CssBaseline } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useMemo, useState } from "react";
import { DashboardDrawerHeader } from "./DashboardAppBar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardDrawer } from "./DashboardDrawer";
import { DashboardMobileNav } from "./DashboardMobileNav";
import { navigationItems } from "@/public/consts/dashboardItems";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (index: number) => {
    const targetRoute = navigationItems[index]?.route;

    if (targetRoute && targetRoute !== pathname) {
      router.push(targetRoute);
    }
  };

  const activeIndex = useMemo(() => {
    const matchedIndex = navigationItems.reduce((bestIndex, item, index, items) => {
      const isMatch = pathname === item.route || pathname.startsWith(`${item.route}/`);

      if (!isMatch) {
        return bestIndex;
      }

      if (bestIndex === -1) {
        return index;
      }

      return item.route.length > items[bestIndex].route.length ? index : bestIndex;
    }, -1);

    return matchedIndex === -1 ? 0 : matchedIndex;
  }, [pathname]);

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

      <DashboardHeader onOpenDrawer={() => setOpen(true)} open={open} />

      {/* =========================
          Desktop Navigation - فقط در md به بالا
      ========================= */}

      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <DashboardDrawer
          open={open}
          activeIndex={activeIndex}
          onNavigate={handleNavigation}
          onClose={() => setOpen(false)}
        />
      </Box>

      {/* =========================
          Mobile Navigation - فقط در xs و sm
      ========================= */}

      <Box
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <DashboardMobileNav
          activeIndex={activeIndex}
          onNavigate={handleNavigation}
        />
      </Box>

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

          pt: {
            xs: 10,
            md: 11,
          },

          pb: {
            xs: 11,
            md: 3,
          },
        }}
      >
        {/* فقط در دسکتاپ نمایش داده میشه */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <DashboardDrawerHeader />
        </Box>

        {children}
      </Box>
    </Box>
  );
};
