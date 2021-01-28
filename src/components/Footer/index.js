import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'© '}
      {new Date().getFullYear()}
      {' '}
         Celia Noriega
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#000000',
    backgroundColor: '#D8D8F6',
    padding: theme.spacing(6, 0),
  },
  copyright: {
    
  }
}))

export default function Footer(props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Copyright className={classes.copyright} />
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}