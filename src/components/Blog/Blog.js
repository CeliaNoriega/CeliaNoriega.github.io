import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './Header'
import MainFeatured from './MainFeatured'
import Footer from './Footer'

const sections = [
  { title: 'About', url: '#about' },
  { title: 'Portfolio', url: '#portfolio' },
  { title: 'Contact', url: '#contact' }
]

export default function Blog() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Celia Noriega" sections={sections}/>
        <main>
          <MainFeatured/>
        </main>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}