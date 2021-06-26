import React from 'react';
import './App.css';
import toc
 from "./toc.json";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Card from "./components/Card"
import Footer from "./components/Footer";

const skillList = toc.skills;

function App() {
  const links: string[] = ["item1", "item2"];
  return (
    <div className="App">
      <Banner title={toc.title} subtitle={toc.subtitle} />
      <Skills props={skillList} />
      <Card title="Ramblings" subtitle="I occasionally write about stuff" links={links} />
      <Footer />
    </div>
  );
}

export default App;
