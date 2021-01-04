import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button as BaseButton } from "@material-ui/core";
import { ThemeContext } from "styled-components";
import { tempTheme } from "../../styles/theme";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  background,
  color,
  disableElevation,
  label,
  onClick,
  size,
  variant,
}) => {
  //const activeTheme = useContext(ThemeContext);

  return (
    <BaseButton
      style={{
        backgroundColor: tempTheme.colors[background],
        border: variant === 'outlined' ? `2px solid ${tempTheme.colors[color]}` : null,
        color: tempTheme.colors[color],
      }}
      disableElevation={disableElevation}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {label}
    </BaseButton>
  );
};

Button.propTypes = {
  /**
   * Background color
   */
  background: PropTypes.string,
  /**
   * Background color
   */
  color: PropTypes.string,
  /**
   * Disable elevation (3D appearance)
   */
  disableElevation: PropTypes.bool,
  /**
   * Button Label
   */
  label: PropTypes.string.isRequired,
  /**
   * Click event handler
   */
  onClick: PropTypes.func,
  /**
   * Button Size: large, medium or small
   */
  size: PropTypes.string,
  /**
   * Variant: contained, outlined, text - default contained
   */
  variant: PropTypes.oneOf(["contained" | "outlined" | "text"]),
};

Button.defaultProps = {
  background: "#FFF",
  color: "themeBlack",
  disableElevation: false,
  onClick: undefined,
  size: "medium",
  variant: 'contained'
};
