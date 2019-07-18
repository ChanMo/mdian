import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import './App.css';

import Navigation from  './Navigation'
import Footer from './Footer'

import First from './First'
import Aboutus from './Aboutus'
import Services from './Services'
import Advances from './Advances'
import Projects from './Projects'
import News from './News'
import Contractus from './Contractus'

const theme = {
  width: '1440px',
  sm: '720px',
  primary: '#437dff'
}

const BG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: url(${require('./bg.png')});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <BG />
        <Navigation />
        <First />
        <Aboutus />
        <Services />
        <Advances />
        <Projects />
        <News />
        <Contractus />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
