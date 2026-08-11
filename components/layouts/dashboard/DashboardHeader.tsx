"use client";

import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useColorScheme,
  useTheme,
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
  onOpenDrawer: () => void;
}

export const DashboardHeader = ({
  open,
  onOpenDrawer,
}: DashboardHeaderProps) => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  const handleThemeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <DashboardAppBar
      position="fixed"
      sx={{
        width: {
          xs: "100%",
          md: open ? `calc(100% - 240px)` : "100%",
        },

        ml: {
          xs: 0,
          md: open ? "260px" : 0,
        },

        transition: (theme) =>
          theme.transitions.create(["width", "margin"], {
            duration: theme.transitions.duration.enteringScreen,
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
          <IconButton
            aria-label="open drawer"
            onClick={onOpenDrawer}
            sx={{
              display: {
                xs: "none",
                md: open ? "none" : "flex",
              },
            }}
          >
            <Menu />
          </IconButton>

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
          <IconButton
            aria-label="toggle theme"
            onClick={handleThemeToggle}
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.shape.rounded.square,
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

          <IconButton
            aria-label="notifications"
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.shape.rounded.square,

              backgroundColor: "action.hover",
              color: "text.primary",

              "&:hover": {
                backgroundColor: "action.selected",
              },
            }}
          >
            <NotificationsOutlined fontSize="small" />
          </IconButton>

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

                    borderRadius: theme.shape.rounded.circle,

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
