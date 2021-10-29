import './App.css';

import toc from "./toc.json";
import courseList from "./courses.json";

import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Courses from "./components/Courses";

function App() {
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} tagline={toc.tagline} />
      <main role="main">
        <Skills items={toc.skills} />
        {/* <hr className="mb-4 dashed" /> */}
        <div className="container mb-5">
          <h2>About Me</h2>
          <Cards props={toc.cards} />
        </div>
        {/* <hr className="mb-4 dashed" /> */}
        <div className="container">
          <h2>Continuously Learning</h2>
          <Courses items={courseList} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
