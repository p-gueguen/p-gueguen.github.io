import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { theme } from './components/styles/Theme';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;