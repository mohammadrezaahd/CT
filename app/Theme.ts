import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "class",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#22c55e",
          dark: "#166534",
          light: "#dcfce7",
          contrastText: "#ffffff",
        },

        background: {
          default: "#f7f8f6",
          paper: "#ffffff",
        },

        text: {
          primary: "#111211",
          secondary: "#7a8078",
        },

        divider: "#e4e6e3",

        grey: {
          50: "#f7f8f6",
          100: "#f0f2ef",
          200: "#e9ebe8",
          300: "#e4e6e3",
          500: "#7a8078",
          900: "#111211",
          A100: "#fff",
          A200: "#000",
        },

        success: {
          main: "#22c55e",
          dark: "#166534",
          light: "#dcfce7",
          contrastText: "#ffffff",
        },

        muted: {
          main: "#2c3330",
        },

        // Semantic status colors
        yellow: {
          main: "#fef9c3",
          sub: "#854d0e",
        },

        green: {
          main: "#dcfce7",
          sub: "#15803d",
        },

        blue: {
          main: "#dbeafe",
          sub: "#1e40af",
        },

        red: {
          main: "#fee2e2",
          sub: "#991b1b",
        },

        custom: {
          drawerBackground: "#111211",
          drawerHover: "#1a1a1a",
          drawerText: "#ffffff",
          drawerBorder: "#e4e6e3",

          cardBackground: "#ffffff",
          cardBorder: "#e4e6e3",

          inputBackground: "#ffffff",
          inputBorder: "#e4e6e3",
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: "#22c55e",
          dark: "#166534",
          light: "#dcfce7",
          contrastText: "#ffffff",
        },

        background: {
          default: "#111211",
          paper: "#1a1c1a",
        },

        text: {
          primary: "#f7f8f6",
          secondary: "#a7ada5",
        },

        divider: "#30332f",

        grey: {
          50: "#111211",
          100: "#1a1c1a",
          200: "#242724",
          300: "#30332f",
          500: "#a7ada5",
          900: "#f7f8f6",
          A100: "#000",
          A200: "#fff",
        },

        success: {
          main: "#22c55e",
          dark: "#166534",
          light: "#dcfce7",
          contrastText: "#ffffff",
        },

        muted: {
          main: "#d1d5d2",
        },

        // Semantic status colors
        yellow: {
          main: "#422006",
          sub: "#fde68a",
        },

        green: {
          main: "#052e16",
          sub: "#86efac",
        },

        blue: {
          main: "#172554",
          sub: "#93c5fd",
        },

        red: {
          main: "#450a0a",
          sub: "#fca5a5",
        },

        custom: {
          drawerBackground: "#0d0e0d",
          drawerHover: "#181a18",
          drawerText: "#f7f8f6",
          drawerBorder: "#30332f",

          cardBackground: "#1a1c1a",
          cardBorder: "#30332f",

          inputBackground: "#1a1c1a",
          inputBorder: "#30332f",
        },
      },
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 700,
    },

    h4: {
      fontWeight: 600,
    },

    h5: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 14,
          border: `1px solid ${theme.vars.palette.custom.cardBorder}`,
          boxShadow: "none",
          backgroundColor: theme.vars.palette.custom.cardBackground,
        }),
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          backgroundColor: theme.vars.palette.custom.inputBackground,

          "& fieldset": {
            borderColor: theme.vars.palette.custom.inputBorder,
          },

          "&:hover fieldset": {
            borderColor: theme.vars.palette.text.secondary,
          },

          "&.Mui-focused fieldset": {
            borderColor: theme.vars.palette.primary.main,
          },
        }),
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.vars.palette.custom.drawerBackground,
          borderRight: `1px solid ${theme.vars.palette.custom.drawerBorder}`,
        }),
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.paper,
          borderBottom: `1px solid ${theme.vars.palette.custom.drawerBorder}`,
        }),
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            backgroundColor: theme.vars.palette.custom.drawerHover,
          },
        }),
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.vars.palette.custom.drawerBorder,
        }),
      },
    },
  },
});
