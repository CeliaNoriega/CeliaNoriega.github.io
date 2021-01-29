import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { useScrollSection } from 'react-scroll-section'

const useStyles = makeStyles((theme) => ({

  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    overflowX: 'auto',
    color: '#000000',
    backgroundColor: '#D8D8F6',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))


export default function Header(props) {
  const classes = useStyles()
  const aboutSection = useScrollSection('about')
  const portfolioSection = useScrollSection('portfolio')
  const contactSection = useScrollSection('contact')

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
          <Link
          onClick={aboutSection.onClick} selected={aboutSection.selected}
            className={classes.toolbarLink}
          >
            About
          </Link>
        <Link
          onClick={portfolioSection.onClick} selected={portfolioSection.selected}
          className={classes.toolbarLink}
        >
          Portfolio
          </Link>
        <Link
          onClick={contactSection.onClick} selected={contactSection.selected}
          className={classes.toolbarLink}
        >
          Contact
          </Link>
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}