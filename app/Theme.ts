import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",

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
    },

    success: {
      main: "#22c55e",
      dark: "#166534",
      light: "#dcfce7",
      contrastText: "#ffffff",
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
        root: {
          borderRadius: 14,
          border: "1px solid #e4e6e3",
          boxShadow: "none",
        },
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
        root: {
          borderRadius: 10,

          "& fieldset": {
            borderColor: "#e4e6e3",
          },

          "&:hover fieldset": {
            borderColor: "#7a8078",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#22c55e",
          },
        },
      },
    },
  },
});
