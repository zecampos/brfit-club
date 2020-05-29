import App from "next/app";
import React from "react";
import GlobalStyle from "../src/global/global";

import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../src/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
          <GlobalStyle />
          <CssBaseline />
        </ThemeProvider>
      </>
    );
  }
}
