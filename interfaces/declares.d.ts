// src/types/mui.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    muted: Record<string, string>;
    yellow: Record<string, string>;
    green: Record<string, string>;
    blue: Record<string, string>;
    red: Record<string, string>;
  }

  interface PaletteOptions {
    muted?: Record<string, string>;
    yellow?: Record<string, string>;
    green?: Record<string, string>;
    blue?: Record<string, string>;
    red?: Record<string, string>;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    gradients: {
      light: {
        profileHero: string;
      };
      dark: {
        profileHero: string;
      };
    };
    layout: {
      light: {
        drawerBackground: string;
        drawerHover: string;
      };
      dark: {
        drawerBackground: string;
        drawerHover: string;
      };
    };
  }

  interface ThemeOptions {
    gradients?: {
      light?: {
        profileHero?: string;
      };
      dark?: {
        profileHero?: string;
      };
    };
    layout?: {
      light?: {
        drawerBackground?: string;
        drawerHover?: string;
      };
      dark?: {
        drawerBackground?: string;
        drawerHover?: string;
      };
    };
  }

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
