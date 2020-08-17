import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import hooks from "./hooks";
import themes from "./themes";
import SignIn from "./features/signIn/components/SignIn";
import Posts from "./features/posts/components/Posts";
import User from "./features/user/components/User";

function App() {
  const dark = hooks.usePreferredTheme();
  const theme = dark ? themes.dark : themes.light;
  const isLoggedIn = false;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        {isLoggedIn ? (
          <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/:user_id" component={User} />
            <Route path="/" exact component={Posts} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={SignIn} />
            <Route path="/signIn" component={SignIn} />
          </Switch>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
