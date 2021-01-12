import Blog from './components/Blog'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#263238',
    color: '#b2dfdb'
  },
});

const App = () => {
  const classes = useStyles()
  return (
    <div  className={classes.root}>
      <Blog></Blog>
    </div>
  )
}

export default App
