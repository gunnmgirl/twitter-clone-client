import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import hooks from "./hooks";
import themes from "./themes";

function App() {
  const dark = hooks.usePreferredTheme();
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route />
          <Route />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
