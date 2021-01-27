import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Project from './Project'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Project
             name="Soy Tofu"
             desc="description here"
             view="https://soy-tofu-ca.herokuapp.com/"
             repo="https://github.com/nickdmrco/Soy_Tofu">
            </Project>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project
             name="Fitness Edge"
             desc="description here"
             view="https://fitnessedge.herokuapp.com/"
             repo="https://github.com/ron-est/Fitness-Edge">
            </Project>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project
             name="Travel-19"
             desc="description here"
             view="https://ky-lore.github.io/Travel-19/"
             repo="https://github.com/ky-lore/Travel-19">
            </Project>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}