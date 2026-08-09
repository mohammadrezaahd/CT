// src/types/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Record<string, string>;
    muted: Record<string, string>;
  }

  interface PaletteOptions {
    custom?: Record<string, string>;
    muted?: Record<string, string>;
  }
}
