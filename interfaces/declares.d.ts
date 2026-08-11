// src/types/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: Record<string, string>;
    muted: Record<string, string>;
    yellow: Record<string, string>;
    green: Record<string, string>;
    blue: Record<string, string>;
    red: Record<string, string>;
  }

  interface PaletteOptions {
    custom?: Record<string, string>;
    muted?: Record<string, string>;
    yellow?: Record<string, string>;
    green?: Record<string, string>;
    blue?: Record<string, string>;
    red?: Record<string, string>;
  }
}

declare module "@mui/material/styles" {
  interface Shape {
    rounded: {
      square: number;
      light: number;
      medium: number;
      large: number;
      circle: number;
    };
  }

  interface ShapeOptions {
    rounded?: {
      square?: number;
      light?: number;
      medium?: number;
      large?: number;
      circle?: number;
    };
  }
}
