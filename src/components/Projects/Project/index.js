import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: '#B2DFDB',
    backgroundColor: '#3B464B',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  btn: {
    color: '#000000',
    backgroundColor: '#D8D8F6',
  },
}));

const Project = (props) => {
  const classes = useStyles()

  return (


    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.image}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          className={classes.btn}
          target="_blank" href={props.view}
          startIcon={<WebIcon />}>
          View
          </Button>
        <Button
          variant="outlined"
          size="small"
          className={classes.btn}
          target="_blank" href={props.repo}
          startIcon={<GitHubIcon />}>
          Repo
          </Button>
      </CardActions>
    </Card>

  )
}

export default Project