import React from 'react'
import CButton from '../CButton'
import resume from '../../assets/resume.pdf'
import emailjs from 'emailjs-com'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import GetAppIcon from '@material-ui/icons/GetApp'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    backgroundColor: '#3B464B',
    color: '#B2DFDB'
  },
  btns: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    backgroundColor: '#111618',
    color: '#B2DFDB'
  },
  btn: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: '#000000',
    backgroundColor: '#D8D8F6',
  },
}));

export default function Contact() {
  const classes = useStyles()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_cumlryu', 'emailTemplate', e.target, 'user_bjzCzrIzUc7kBzK0NvU7z')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <React.Fragment align="center">

      <Paper className={classes.btns} align="center">
        <Button
          variant="outlined"
          size="large"
          className={classes.btn}
          target="_blank" href={resume}
          download="CeliaNoriega-Resume"
          startIcon={<GetAppIcon />}>
          Resume
        </Button>
        <CButton
          icon={<GitHubIcon />}
          label="GitHub"
          link="https://github.com/CeliaNoriega"
        >
        </CButton>
        <CButton
          icon={<LinkedInIcon />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/celianoriega/"
        >
        </CButton>
        <CButton
          icon={<EmailIcon />}
          label="Email"
          link="mailto:noriegacelia2124@gmail.com"
        >
        </CButton>
        <CButton
          icon={<PhoneIcon />}
          label="Call"
          link="tel:7142610099"
        >
        </CButton>
  </Paper>

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Contact Me!
          </Typography>
          <form onSubmit={sendEmail} container spacing={0} align="center">
            <Grid item xs={12}>
              <TextField
                margin="dense"
                name="name"
                id="name"
                label="Name"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="dense"
                type="email"
                name="email"
                id="email"
                label="Email"
                autoComplete="email"
                required
              />
            </Grid>
            <TextField
              margin="dense"
              type="Text"
              name="subject"
              id="subject"
              label="Email Subject"
              required
            />
            <Grid item xs={12}>
              <TextField
                margin="dense"
                multiline
                rows="8"
                name="message"
                variant="outlined"
                id="message"
                label="Your message here..."
                required
              />
            </Grid>
            <Button
              className={classes.btn}
              type="submit"
              variant="outlined"
              size="small">
              Submit
              </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  )
}

