import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, List, ListItem } from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "next/link";
import { tempTheme } from "../../styles/theme";
import Skeleton from "@material-ui/lab/Skeleton";
import { useRouter } from "next/router";

export const Footer = ({ ...args }) => {
  const activeTheme = useContext(ThemeContext);
  const matches = useMediaQuery("(min-width: 850px)");
  const router = useRouter();
  return (
    <Grid
      xs={12}
      style={{
        backgroundColor: activeTheme.colors.themeBlue,
        color: tempTheme.colors.themeWhite,
      }}
    >
      <Grid xs={12} style={{ display: "flex", flexDirection: "row" }}>
        <Grid xs={1}></Grid>
        <Grid xs={5}>
          <List>
            <ListItem style={{ fontWeight: "600" }}>articles</ListItem>
            {!args.footerLinks ? (
              <Skeleton
                animation="pulse"
                width="50%"
                style={{ background: tempTheme.colors.themeWhite }}
              />
            ) : (
              args.footerLinks?.map((link, index) =>
                link.session === "main" ? (
                  <ListItem key={index} style={{ marginLeft: "15px" }}>
                    <Link
                      href={{ pathname: link.url }}
                      style={{
                        textDecoration: "none !important",
                        color: tempTheme.colors.themeWhite,
                      }}
                    >
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          // typically you want to use `next/link` for this usecase
                          // but this example shows how you can also access the router
                          // and use it manually
                          router.push(link.url);
                        }}
                        style={{
                          textDecoration: "none",
                          color: tempTheme.colors.themeWhite,
                        }}
                      >
                        {link.title}
                      </a>
                    </Link>
                  </ListItem>
                ) : null
              )
            )}
          </List>
        </Grid>
        <Grid xs={5}>
          <List>
            <ListItem style={{ fontWeight: "600" }}>Follow Us</ListItem>
            <ListItem style={{ width: "100%", marginLeft: "15px" }}>
              {!args.footerLinks ? (
                <Skeleton
                  animation="pulse"
                  width="50%"
                  style={{ background: tempTheme.colors.themeWhite }}
                />
              ) : (
                args.footerLinks?.map((link, index) =>
                  link.session === "social" ? (
                    <Link
                      href={{ pathname: link.url }}
                      passHref
                      style={{
                        textDecoration: "none",
                        color: tempTheme.colors.themeWhite,
                      }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          color: tempTheme.colors.themeWhite,
                        }}
                      >
                        {link.title === "Facebook" ? (
                          <FacebookIcon fontSize="large" />
                        ) : link.title === "Instagram" ? (
                          <InstagramIcon fontSize="large" />
                        ) : null}
                      </a>
                    </Link>
                  ) : null
                )
              )}
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        style={{
          textAlign: "center",
          paddingBottom: "5px",
          fontSize: matches ? "14px" : "12px",
        }}
      >
        {args.copyrightLabel}
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  /**
   * Information for each link: title, session and url
   */
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      session: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  /**
   * Copyright
   */
  copyrightLabel: PropTypes.string.isRequired,
};
