import './App.css';
import toc from "./toc.json";
import Banner from "./components/Banner";
import Synopsis from "./components/Synopsis";
// import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Disciplines from './components/Disciplines';
import Certification from './components/Certifications';
// import Courses from './components/Courses';
import Podcasts from './components/Podcasts';

function App() {
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} tagline={toc.tagline} />
      <main role="main">
        <Synopsis synopsis={toc.synopsis} />
        {/* <Skills items={toc.skills} /> */}
        <div className="container">
          {toc.certifications.length > 0 && 
            <div className="row">
              <Certification certs={toc.certifications} />
            </div>
          }
          <div className="row">
            <Disciplines skills={toc.skills} isFullWidth={false} courses={toc.courses} />
          </div>
          {/* <Courses items={toc.courses} /> */}
          <Podcasts items={toc.podcasts} />
          <Cards props={toc.cards} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
