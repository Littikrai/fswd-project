import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#2196f3",
    },
  },
});

const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default CustomTheme;
