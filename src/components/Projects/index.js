import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Project from './Project'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import soyTofu from '../../img/soyTofu.png'
import fitnessEdge from '../../img/fitnessEdge.png'
import travel19 from '../../img/travel19.png'

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
             image={soyTofu}
          desc="A fully functioning restaurant page with admin user authentication and online ordering."
             view="https://soy-tofu-ca.herokuapp.com/"
             repo="https://github.com/nickdmrco/Soy_Tofu">
            </Project>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project
             name="Fitness Edge"
              image={fitnessEdge}
              desc="Achieve your fitness goals with a plan in mind! Fitness Edge lets you add workouts from our database to a weekly schedule as well as input your own custom routines."
             view="https://fitnessedge.herokuapp.com/"
             repo="https://github.com/ron-est/Fitness-Edge">
            </Project>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Project
             name="Travel-19"
              image={travel19}
              desc="Get useful information such as number of active COVID-19 cases, recommendations on safety and protocol, crowdsourced & under-the-radar tourist locations, and weather forecast for your destination city."
             view="https://ky-lore.github.io/Travel-19/"
             repo="https://github.com/ky-lore/Travel-19">
            </Project>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}