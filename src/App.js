import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Leadership from './components/Leadership/Leadership';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';



function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
