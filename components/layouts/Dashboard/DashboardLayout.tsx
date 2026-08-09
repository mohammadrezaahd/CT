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
  useMediaQuery,
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

const navigationItems = [
  {
    label: "Inbox",
    icon: Inbox,
  },
  {
    label: "Starred",
    icon: Mail,
  },
  {
    label: "Send email",
    icon: Inbox,
  },
  {
    label: "Drafts",
    icon: Mail,
  },
];

export const DashboardLayout: FC<IMiniDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeToggle = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

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

      {/* =====================================================
          AppBar
      ===================================================== */}

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
              <IconButton aria-label="open drawer" onClick={handleDrawerOpen}>
                <Menu />
              </IconButton>
            )}

            <Typography
              variant="h6"
              noWrap
              component="div"
              color="text.primary"
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
            {/* Notification */}

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

      {/* =====================================================
          Desktop Drawer
      ===================================================== */}

      {!isMobile && (
        <DashboardDrawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "grey.900",
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
                aria-label="dashboard"
                sx={{
                  width: 36,
                  height: 36,
                  flexShrink: 0,
                  backgroundColor: "primary.main",
                  borderRadius: "10px",
                  color: "primary.contrastText",

                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                }}
              >
                <Bolt fontSize="small" />
              </IconButton>

              {open && (
                <Typography
                  sx={{
                    color: "grey.50",
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
                aria-label="close drawer"
                onClick={handleDrawerClose}
                sx={{
                  color: "grey.50",
                }}
              >
                {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>
            )}
          </DashboardDrawerHeader>

          <Divider />

          {/* Navigation */}

          <List>
            {navigationItems.map((item, index) => {
              const active = activeIndex === index;
              const Icon = item.icon;

              return (
                <ListItem
                  key={item.label}
                  disablePadding
                  sx={{
                    display: "block",
                    px: 1,
                    mb: 0.5,
                  }}
                >
                  <ListItemButton
                    selected={active}
                    onClick={() => handleNavigation(index)}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      borderRadius: 2,
                      position: "relative",

                      justifyContent: open ? "initial" : "center",

                      "&:hover": {
                        backgroundColor: "custom.drawerHover",
                      },

                      "&.Mui-selected": {
                        backgroundColor: "muted.main",
                      },

                      "&.Mui-selected:hover": {
                        backgroundColor: "muted.main",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: "center",

                        color: active ? "primary.main" : "grey.50",

                        ...(open
                          ? {
                              mr: 3,
                            }
                          : {
                              mr: "auto",
                            }),
                      }}
                    >
                      <Icon />
                    </ListItemIcon>

                    <ListItemText
                      primary={item.label}
                      sx={{
                        opacity: open ? 1 : 0,

                        color: active ? "grey.900" : "grey.50",
                      }}
                    />

                    {/* Active indicator */}

                    {active && open && (
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          minWidth: 6,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          ml: 1.5,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          {/* Bottom Actions */}

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
                color: "grey.50",

                "&:hover": {
                  backgroundColor: "custom.drawerHover",
                },
              }}
            >
              {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
          </Box>
        </DashboardDrawer>
      )}

      {/* =====================================================
          Mobile Floating Navigation
      ===================================================== */}

      {isMobile && (
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

            backgroundColor:
              mode === "dark"
                ? "rgba(30, 30, 30, 0.94)"
                : "rgba(255, 255, 255, 0.94)",

            border: "1px solid",
            borderColor:
              mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",

            boxShadow:
              mode === "dark"
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
                onClick={() => handleNavigation(index)}
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
                  <Icon
                    sx={{
                      fontSize: 22,
                    }}
                  />

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

          {/* Theme toggle */}

          <Box
            component="button"
            type="button"
            onClick={handleThemeToggle}
            aria-label="toggle theme"
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

              backgroundColor: "transparent",
              color: "text.secondary",

              transition: "all 0.2s ease",

              "&:hover": {
                backgroundColor: "action.hover",
                color: "text.primary",
              },

              "&:active": {
                transform: "scale(0.94)",
              },
            }}
          >
            {mode === "dark" ? (
              <LightModeOutlined sx={{ fontSize: 22 }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: 22 }} />
            )}
          </Box>
        </Box>
      )}

      {/* =====================================================
          Main Content
      ===================================================== */}

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

          // AppBar spacing
          pt: {
            xs: 10,
            md: 11,
          },

          // Extra bottom space for floating mobile nav
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
