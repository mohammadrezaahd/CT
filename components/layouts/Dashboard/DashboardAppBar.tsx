"use client";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),

  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  width: `calc(${theme.spacing(8)} + 1px)`,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
});

export const DashboardDrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

export const DashboardAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,

  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  variants: [
    {
      props: ({ open }) => open,

      style: {
        marginLeft: drawerWidth,

        width: `calc(100% - ${drawerWidth}px)`,

        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const DashboardDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme }) => ({
  width: drawerWidth,

  flexShrink: 0,

  whiteSpace: "nowrap",

  boxSizing: "border-box",

  variants: [
    {
      props: ({ open }) => open,

      style: {
        ...openedMixin(theme),

        "& .MuiDrawer-paper": {
          ...openedMixin(theme),
        },
      },
    },

    {
      props: ({ open }) => !open,

      style: {
        ...closedMixin(theme),

        "& .MuiDrawer-paper": {
          ...closedMixin(theme),
        },
      },
    },
  ],
}));
