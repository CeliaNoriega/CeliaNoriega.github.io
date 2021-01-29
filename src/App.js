
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#111618',
    color: '#b2dfdb'
  },
});

const sections = [
  { title: 'About', url: '/' },
  { title: 'Portfolio', url: '/' },
  { title: 'Contact', url: '/' }
]

const App = () => {
  const classes = useStyles()
  return (
    <div  className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
          <About />
          <Projects />
          <Contact />
      </Container>
      <Footer />
    </div>
  )
}
export default App