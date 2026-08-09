"use client";

import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { FC, ReactNode, useState } from "react";

import {
  DashboardAppBar,
  DashboardDrawer,
  DashboardDrawerHeader,
} from "./DashboardAppBar";

import {
  Bolt,
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  Menu,
  NotificationsOutlined,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";

interface IMiniDrawerProps {
  children: ReactNode;
}

export const DashboardLayout: FC<IMiniDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* =========================
          AppBar
      ========================= */}

      <DashboardAppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            minHeight: 64,
            display: "flex",
            alignItems: "center",
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
            {!open && (
              <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
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
              gap: 1,
            }}
          >
            {/* Notification */}
            <IconButton
              sx={{
                width: 40,
                height: 40,
                backgroundColor: theme.palette.grey[100],
                color: theme.palette.grey[900],

                "&:hover": {
                  backgroundColor: theme.palette.grey[200],
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
                minWidth: 150,

                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  py: 0.5,
                  px: 1,
                },

                "&:before": {
                  display: "none",
                },

                "&:after": {
                  display: "none",
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
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    M
                  </Box>

                  <Box>
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
                        color: theme.palette.text.secondary,
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

      {/* =========================
          Drawer
      ========================= */}

      <DashboardDrawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.grey[900],
          },
        }}
      >
        {/* Logo / Header */}
        <DashboardDrawerHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              overflow: "hidden",
            }}
          >
            <IconButton
              sx={{
                width: 36,
                height: 36,
                flexShrink: 0,
                backgroundColor: theme.palette.primary.main,
                borderRadius: "10px",
                color: theme.palette.primary.contrastText,

                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                },
              }}
            >
              <Bolt fontSize="small" />
            </IconButton>

            {open && (
              <Typography
                sx={{
                  color: theme.palette.grey[50],
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                }}
              >
                CoachOS
              </Typography>
            )}
          </Box>

          {open && (
            <IconButton
              onClick={handleDrawerClose}
              sx={{
                color: theme.palette.grey[50],
              }}
            >
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          )}
        </DashboardDrawerHeader>

        <Divider />

        {/* Navigation */}
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => {
            const active = index === 0;

            return (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  px: 1,
                  mb: 0.5,
                }}
              >
                <ListItemButton
                  selected={active}
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                    borderRadius: 2,
                    position: "relative",

                    justifyContent: open ? "initial" : "center",

                    "&:hover": {
                      backgroundColor: theme.palette.custom.drawerHover,
                    },

                    "&.Mui-selected": {
                      backgroundColor: theme.palette.muted.main,
                    },

                    "&.Mui-selected:hover": {
                      backgroundColor: theme.palette.muted.main,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",

                      color: active
                        ? theme.palette.primary.main
                        : theme.palette.grey[50],

                      ...(open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: "auto",
                          }),
                    }}
                  >
                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                  </ListItemIcon>

                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,

                      color: active
                        ? theme.palette.grey[900]
                        : theme.palette.grey[50],
                    }}
                  />

                  {/* Active bullet */}
                  {active && open && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        minWidth: 6,
                        borderRadius: "50%",
                        backgroundColor: theme.palette.primary.main,
                        ml: 1.5,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* =========================
            Bottom Actions
        ========================= */}

        <Box
          sx={{
            mt: "auto",
            p: 1,
            display: "flex",
            justifyContent: open ? "flex-start" : "center",
          }}
        >
          <IconButton
            onClick={handleThemeToggle}
            aria-label="toggle theme"
            sx={{
              width: 40,
              height: 40,
              color: theme.palette.grey[50],

              "&:hover": {
                backgroundColor: theme.palette.custom.drawerHover,
              },
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
        </Box>
      </DashboardDrawer>

      {/* =========================
          Main
      ========================= */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <DashboardDrawerHeader />

        {children}
      </Box>
    </Box>
  );
};
