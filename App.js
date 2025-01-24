import React from 'react';
import Header from './header';
import Home from './home';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
