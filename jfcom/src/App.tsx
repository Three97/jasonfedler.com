import React from 'react';
import './App.css';
import toc
 from "./toc.json";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";

const skillList = toc.skills;

function App() {
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} />
      <Skills props={skillList} />
      <Cards props={toc.cards} />
      <Footer />
    </>
  );
}

export default App;
