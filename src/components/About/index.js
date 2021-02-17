import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '5%',
    // color: '#b2dfdb',
    backgroundColor: '#3b464b',
    color: '#B2DFDB',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    }
  }
}))

export default function MainFeaturedPost(props) {
  const classes = useStyles()

  return (
    <Paper className={classes.mainFeaturedPost}>
      <Grid container align="center">
        <Grid item xs={12} align="center">
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h3" variant="h4" color="inherit" gutterBottom>
              Celia Noriega
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              <p>
                Welcome to my portfolio.
              </p>
              <p>
                Front end web developer utilizing my background in customer service to build a more user friendly experience on the web. Earned a certificate in Full Stack Web Development from the University of California, Irvine. Flexible and motivated with strong team and communication skills and a focus on mobile-first design and development.
              </p>
            </Typography>
          </div>
        </Grid>
      </Grid>

    </Paper>
  )
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
}