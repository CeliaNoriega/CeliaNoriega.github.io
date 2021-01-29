
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ScrollingProvider, Section } from 'react-scroll-section';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#111618',
    color: '#b2dfdb'
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ScrollingProvider>
        <CssBaseline />
        <Header />
        <Container maxWidth="lg">
          <Section id="about">
            <About />
          </Section>
          <Section id="portfolio">
            <Projects />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
        </Container>
        <Footer />
      </ScrollingProvider>
    </div>
  )
}
export default App