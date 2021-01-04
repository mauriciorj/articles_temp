import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  InputBase,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Button } from "../Button/Button";
import Link from "next/link";
import Skeleton from "@material-ui/lab/Skeleton";
import { tempTheme } from "../../styles/theme";

export const Header = ({ headerLinks, logoInfo, mobileMenu }) => {
  //const activeTheme = useContext(ThemeContext);
  const mobileView = useMediaQuery("(min-width: 600px)");
  const smallDesktopHeader = useMediaQuery("(min-width: 950px)");

  const ITEM_HEIGHT = 48;

  const StyledMenu = withStyles({
    paper: {
      border: "1px solid #d3d4d5",
      marginTop: "5px",
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  })((props) => (
    <Menu
      elevation={3}
      getContentAnchorEl={null}
      keepMounted
      TransitionComponent={Fade}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      {...props}
    />
  ));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(null);

  const handleClick = (event) => {
    setIsMobileMenuOpen(event.currentTarget);
  };

  const handleClose = () => {
    setIsMobileMenuOpen(null);
  };

  const headerDesktop = (
    <Toolbar>
      <Grid xs={2} style={{ justifyContent: "center" }}>
        {!logoInfo.length ? (
          <Skeleton
            animation="pulse"
            width="50%"
            style={{ background: tempTheme.colors.themeWhite }}
          />
        ) : (
          <Typography variant="h6" noWrap>
            {logoInfo?.map((logo) =>
              logo.type === "text" ? (
                <Typography variant="h6" noWrap>
                  {logo.title}
                </Typography>
              ) : (
                <img
                  src={logo.titleImage}
                  alt={logo.titleImageAltText}
                  style={{
                    maxHeight: "60px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                  }}
                />
              )
            )}
          </Typography>
        )}
      </Grid>
      <Grid xs={smallDesktopHeader ? 5 : 6} style={{ marginLeft: "10px" }}>
        <div
          style={{
            backgroundColor: tempTheme.colors.themeWhite,
            borderRadius: "5px",
            position: "relative",
          }}
        >
          <InputBase
            placeholder="Search…"
            style={{
              color: tempTheme.colors.themeGray,
              paddingLeft: "10px",
              position: "relative",
              width: "90%",
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div
            style={{
              alignitems: "center",
              display: "flex",
              height: "100%",
              justifycontent: "center",
              paddingTop: "5px",
              pointerevents: "none",
              position: "absolute",
              right: "0",
              top: "0",
              width: "10%",
            }}
          >
            <SearchIcon style={{ color: tempTheme.colors.themeGray }} />
          </div>
        </div>
      </Grid>
      <Grid xs={smallDesktopHeader ? 5 : 4}>
        {mobileMenu.title === undefined || !headerLinks.length ? (
          <Box display="flex" justifyContent="flex-end">
            <Skeleton
              animation="pulse"
              width="50%"
              style={{ background: tempTheme.colors.themeWhite }}
            />
          </Box>
        ) : smallDesktopHeader ? (
          <Box display="flex" justifyContent="flex-end">
            {headerLinks?.map((header, index) =>
              header.type === "Default" ? (
                <Link
                  href={{ pathname: header.link }}
                  passHref
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: tempTheme.colors.themeWhite,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      key={index}
                      style={{
                        color: `${tempTheme.colors.themeWhite}`,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: "30px",
                      }}
                    >
                      {header.headerTitle}
                    </Typography>
                  </a>
                </Link>
              ) : header.type === "Highlight" ? (
                <Link
                  href={{ pathname: header.link }}
                  passHref
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: tempTheme.colors.themeWhite,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      key={index}
                      style={{
                        color: `${tempTheme.colors.themeWhite}`,
                        fontWeight: "600",
                        paddingRight: "30px",
                      }}
                    >
                      {header.headerTitle}
                    </Typography>
                  </a>
                </Link>
              ) : (
                <Link
                  href={{ pathname: header.link }}
                  passHref
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      background={tempTheme.colors.themeWhite}
                      label={header.headerTitle}
                    />
                  </a>
                </Link>
              )
            )}
          </Box>
        ) : (
          <Box display="flex" justifyContent="flex-end">
            <Button
              color="themeWhite"
              variant="outlined"
              label={mobileMenu.title}
              onClick={handleClick}
            />
            <StyledMenu
              id="customized-menu"
              anchorEl={isMobileMenuOpen}
              keepMounted
              open={Boolean(isMobileMenuOpen)}
              onClose={handleClose}
            >
              {headerLinks?.map((header, index) =>
                header.type === "Default" ? (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          key={index}
                          style={{
                            color: `${tempTheme.colors.themeBlue}`,
                          }}
                        >
                          {header.headerTitle}
                        </Typography>
                      </MenuItem>
                    </a>
                  </Link>
                ) : header.type === "Highlight" ? (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          key={index}
                          style={{
                            color: `${tempTheme.colors.themeBlue}`,
                            fontWeight: "600",
                          }}
                        >
                          {header.headerTitle}
                        </Typography>
                      </MenuItem>
                    </a>
                  </Link>
                ) : (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          background="themeBlue"
                          color="themeWhite"
                          label={header.headerTitle}
                        />
                      </MenuItem>
                    </a>
                  </Link>
                )
              )}
            </StyledMenu>
          </Box>
        )}
      </Grid>
    </Toolbar>
  );

  const headerMobile = (
    <Toolbar>
      <Grid xs={6}>
        {!logoInfo.length ? (
          <Skeleton
            animation="pulse"
            width="50%"
            style={{ background: tempTheme.colors.themeWhite }}
          />
        ) : (
          <Typography variant="h6" noWrap>
            {logoInfo?.map((logo) =>
              logo.type === "text" ? (
                <Typography variant="h6" noWrap>
                  {logo.title}
                </Typography>
              ) : (
                <img
                  src={logo.titleImage}
                  alt={logo.titleImageAltText}
                  style={{
                    maxHeight: "60px",
                    maxWidth: "100%",
                    display: "block",
                    marginRight: "auto",
                  }}
                />
              )
            )}
          </Typography>
        )}
      </Grid>
      <Grid xs={8}>
        {mobileMenu.title === undefined || !headerLinks.length ? (
          <Box display="flex" justifyContent="flex-end">
            <Skeleton
              animation="pulse"
              width="50%"
              style={{ background: tempTheme.colors.themeWhite }}
            />
          </Box>
        ) : (
          <Box display="flex" justifyContent="flex-end">
            <Button
              color="themeWhite"
              variant="outlined"
              label={mobileMenu.title}
              onClick={handleClick}
            />
            <StyledMenu
              id="customized-menu"
              anchorEl={isMobileMenuOpen}
              keepMounted
              open={Boolean(isMobileMenuOpen)}
              onClose={handleClose}
            >
              <MenuItem
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  style={{
                    color: `${tempTheme.colors.themeBlue}`,
                  }}
                >
                  Search
                </Typography>
                <Box
                  style={{
                    alignitems: "center",
                    display: "flex",
                    height: "100%",
                    justifycontent: "center",
                    pointerevents: "none",
                    width: "10%",
                    marginLeft: "5px",
                  }}
                >
                  <SearchIcon
                    style={{ color: `${tempTheme.colors.themeBlue}` }}
                  />
                </Box>
              </MenuItem>
              {headerLinks?.map((header, index) =>
                header.type === "Default" ? (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          key={index}
                          style={{
                            color: `${tempTheme.colors.themeBlue}`,
                          }}
                        >
                          {header.headerTitle}
                        </Typography>
                      </MenuItem>
                    </a>
                  </Link>
                ) : header.type === "Highlight" ? (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          key={index}
                          style={{
                            color: `${tempTheme.colors.themeBlue}`,
                            fontWeight: "600",
                          }}
                        >
                          {header.headerTitle}
                        </Typography>
                      </MenuItem>
                    </a>
                  </Link>
                ) : (
                  <Link
                    href={{ pathname: header.link }}
                    passHref
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <a style={{ textDecoration: "none" }}>
                      <MenuItem
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          background="themeBlue"
                          color="themeWhite"
                          label={header.headerTitle}
                        />
                      </MenuItem>
                    </a>
                  </Link>
                )
              )}
            </StyledMenu>
          </Box>
        )}
      </Grid>
    </Toolbar>
  );

  return (
    <Grid xs={12}>
      <AppBar
        position="static"
        style={{ backgroundColor: `${tempTheme.colors.themeBlue}` }}
      >
        {mobileView ? headerDesktop : headerMobile}
      </AppBar>
    </Grid>
  );
};

Header.propTypes = {
  /**
   * Header links types
   */
  headerLinks: PropTypes.shape({
    headerTitle: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.oneOf(["Default" | "Highlight" | "Button"]),
  }).isRequired,
  /**
   * Logo information: can be a string or an image
   */
  logoInfo: PropTypes.shape({
    altText: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    titleImage: PropTypes.string,
    titleImageAltText: PropTypes.string,
    type: PropTypes.oneOf(["text", "image"]),
  }).isRequired,
  /**
   * Mobile Menu Title
   */
  mobileMenu: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};
