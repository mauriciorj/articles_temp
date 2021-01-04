import React from "react";
import { Grid } from "@material-ui/core";
import { MainHeader } from "../components/headers/mainHeader";
import { MainFooter } from '../components/footer/mainFooter';
import HeaderPage from './headerPage';
import getArticles from '../graphql/articles';

export const MainPage = () => {
  return (
    <div>
      <HeaderPage />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainHeader />
          {getArticles()}
          <MainFooter />
        </Grid>
      </Grid>
    </div>
  );
};
