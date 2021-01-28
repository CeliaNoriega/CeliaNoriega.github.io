import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: '#000000',
    backgroundColor: '#D8D8F6',
  }
}));

export default function ButtonSizes(props) {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      size="large"
      className={classes.btn}
      target="_blank" href={props.link}
      startIcon={props.icon}>
      {props.label}
    </Button>
  );
}