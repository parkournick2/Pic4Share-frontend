import Router from "./routes/router";
import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
