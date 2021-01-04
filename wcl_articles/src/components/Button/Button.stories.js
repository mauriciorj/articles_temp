import React from "react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const ButtonVariants = () => {
  return (
    <>
      <Button label="small" size="small" />{" "}
      <Button label="medium outlined" variant="outlined" size="medium" />{" "}
      <Button label="Large" size="large" />{" "}
      <Button background="themeBlue" color="themeWhite" label="Theme Color - themeBlue" />{" "}
      <Button background="themeBlue" color="themeWhite" disableElevation="true" label="Elevation Disable" />{" "}
    </>
  );
};
