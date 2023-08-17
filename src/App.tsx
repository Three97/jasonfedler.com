import './App.css';
import toc from "./toc.json";
import Banner from "./components/Banner";
import Synopsis from "./components/Synopsis";
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Disciplines from './components/Disciplines';
import Certification from './components/Certifications';
// import Courses from './components/Courses';
import Podcasts from './components/Podcasts';
import DisciplinesOnly from './components/DisciplinesOnly';
import CoursesOnly from './components/CoursesOnly';

function App() {
  const searchParams = new URLSearchParams(document.location.search);
  console.log(searchParams);
  console.log(searchParams.has("old"));
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} tagline={toc.tagline} />
      <main role="main">
        <Synopsis synopsis={toc.synopsis} />
        <div className="container">
        {searchParams.has("old") ? (
          <>
            <Skills items={toc.skills} />
            {/* <DisciplinesOnly skills={toc.skills} /> */}
            <CoursesOnly items={toc.courses} />
          </>
        ) : (
          <>
            {toc.certifications.length > 0 && 
              <div className="row">
                <Certification certs={toc.certifications} />
              </div>
            }
            <div className="row">
              <Disciplines skills={toc.skills} courses={toc.courses} />
            </div>
          </>
        )}
        <Podcasts items={toc.podcasts} />
        <Cards props={toc.cards} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
