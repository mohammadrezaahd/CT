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
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, ReactNode, useState } from "react";
import {
  DashboardAppBar,
  DashboardDrawer,
  DashboardDrawerHeader,
} from "./DashboardAppBar";
import {
  ChevronLeft,
  ChevronRight,
  Inbox,
  Mail,
  Menu,
} from "@mui/icons-material";

interface IMiniDrawerProps {
  children: ReactNode;
}

export const DashboardLayout: FC<IMiniDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DashboardAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="default"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color="textPrimary">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </DashboardAppBar>
      <DashboardDrawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: theme.palette.grey[900],
          },
        }}
      >
        <DashboardDrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              color: theme.palette.grey[50],
            }}
          >
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DashboardDrawerHeader>
        <Divider />
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

                  {/* Active bullet after text */}
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
      </DashboardDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DashboardDrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
