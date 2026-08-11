"use client";

import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import { Bolt, ChevronLeft, ChevronRight } from "@mui/icons-material";

import {
  DashboardDrawer as StyledDashboardDrawer,
  DashboardDrawerHeader,
} from "./DashboardAppBar";

import { navigationItems } from "@/public/consts/dashboardItems";

interface DashboardDrawerProps {
  open: boolean;
  activeIndex: number;
  onNavigate: (index: number) => void;
  onClose: () => void;
}

export const DashboardDrawer = ({
  open,
  activeIndex,
  onNavigate,
  onClose,
}: DashboardDrawerProps) => {
  const theme = useTheme();

  return (
    <StyledDashboardDrawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "grey.900",
        },
      }}
    >
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
              borderRadius: theme.shape.rounded.medium,
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
            onClick={onClose}
            sx={{
              color: "grey.50",
            }}
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        )}
      </DashboardDrawerHeader>

      <Divider />

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
                onClick={() => onNavigate(index)}
                sx={{
                  minHeight: 48,
                  px: 2.5,

                  borderRadius: theme.shape.rounded.light,

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

                {active && open && (
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      minWidth: 6,

                      borderRadius: theme.shape.rounded.circle,

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
    </StyledDashboardDrawer>
  );
};
