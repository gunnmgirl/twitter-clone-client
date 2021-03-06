import React from "react";
import { ThemeProvider } from "styled-components";
import { Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyle from "./GlobalStyle";
import hooks from "./hooks";
import themes from "./themes";
import history from "./routing/history";
import SignIn from "./features/auth/components/SignIn";
import Posts from "./features/posts/components/Posts";
import LogIn from "./features/auth/components/LogIn";

function App() {
  const dark = hooks.usePreferredTheme();
  const theme = dark ? themes.dark : themes.light;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        {isLoggedIn ? (
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/login" component={LogIn} />
            <Route path="/" exact component={Posts} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" exact component={SignIn} />
          </Switch>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
