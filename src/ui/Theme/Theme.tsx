import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { themeLightPalette } from "./palette";
import { ThemeProps } from "./types";
export const Theme = ({ children }: ThemeProps) => {
  const palette = themeLightPalette;
  return (
    <ThemeProvider theme={palette}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};