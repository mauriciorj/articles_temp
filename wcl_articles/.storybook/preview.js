import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import { withNextRouter } from 'storybook-addon-next-router';

import "../src/components/assets/google-font/fonts.css";

export const decorators = [
  (Story) => (
    withNextRouter(),
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
