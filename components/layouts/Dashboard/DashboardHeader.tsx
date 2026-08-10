"use client";

import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useColorScheme,
} from "@mui/material";

import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu,
  NotificationsOutlined,
} from "@mui/icons-material";

import { DashboardAppBar } from "./DashboardAppBar";

interface DashboardHeaderProps {
  open: boolean;
  isMobile: boolean;
  onOpenDrawer: () => void;
}

export const DashboardHeader = ({
  open,
  isMobile,
  onOpenDrawer,
}: DashboardHeaderProps) => {
  const { mode, setMode } = useColorScheme();

  const handleThemeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <DashboardAppBar
      position="fixed"
      open={isMobile ? false : open}
      sx={{
        ...(isMobile && {
          width: "100%",
          marginLeft: 0,
        }),
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            xs: 60,
            md: 64,
          },

          display: "flex",
          alignItems: "center",

          px: {
            xs: 2,
            md: 3,
          },
        }}
      >
        {/* Left side */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {!isMobile && !open && (
            <IconButton aria-label="open drawer" onClick={onOpenDrawer}>
              <Menu />
            </IconButton>
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="textPrimary"
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "1rem",
                sm: "1.125rem",
              },
            }}
          >
            Dashboard
          </Typography>
        </Box>

        {/* Right side */}

        <Box
          sx={{
            ml: "auto",
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 0.5,
              sm: 1,
            },
          }}
        >
          {/* Theme */}

          <IconButton
            aria-label="toggle theme"
            onClick={handleThemeToggle}
            sx={{
              width: 40,
              height: 40,

              backgroundColor: "action.hover",
              color: "text.primary",

              "&:hover": {
                backgroundColor: "action.selected",
              },
            }}
          >
            {mode === "dark" ? (
              <LightModeOutlined fontSize="small" />
            ) : (
              <DarkModeOutlined fontSize="small" />
            )}
          </IconButton>

          {/* Notifications */}

          <IconButton
            aria-label="notifications"
            sx={{
              width: 40,
              height: 40,

              backgroundColor: "action.hover",
              color: "text.primary",

              "&:hover": {
                backgroundColor: "action.selected",
              },
            }}
          >
            <NotificationsOutlined fontSize="small" />
          </IconButton>

          {/* User */}

          <Select
            defaultValue="user"
            variant="standard"
            disableUnderline
            sx={{
              minWidth: {
                xs: 0,
                sm: 150,
              },

              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                gap: 1,

                py: 0.5,

                px: {
                  xs: 0.5,
                  sm: 1,
                },
              },

              "&:before": {
                display: "none",
              },

              "&:after": {
                display: "none",
              },

              "& .MuiSelect-icon": {
                display: {
                  xs: "none",
                  sm: "block",
                },
              },
            }}
          >
            <MenuItem value="user">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,

                    borderRadius: "50%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    backgroundColor: "primary.main",
                    color: "primary.contrastText",

                    fontSize: 14,
                    fontWeight: 700,

                    flexShrink: 0,
                  }}
                >
                  M
                </Box>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.2,
                    }}
                  >
                    Mohammad
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                    }}
                  >
                    Coach
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          </Select>
        </Box>
      </Toolbar>
    </DashboardAppBar>
  );
};
