import './App.css';
import toc from "./toc.json";
import Banner from "./components/Banner";
import Synopsis from "./components/Synopsis";
// import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";
import Disciplines from './components/Disciplines';
import Certification from './components/Certifications';
// import { Certificate } from 'crypto';

function App() {
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} tagline={toc.tagline} />
      <main role="main">
        <Synopsis synopsis={toc.synopsis} />
        {/* <Skills items={toc.skills} /> */}
        <div className="container">
          <div className="row">
            {toc.certifications.length > 0 ?
              (
                <>
                  <div className="col-lg-7 col-12">
                    <Disciplines skills={toc.skills} isFullWidth={false} />
                  </div>
                  <div className="col-lg-5 col-12">
                    <Certification certs={toc.certifications} />
                  </div> 
                </>
              ) : (
                <div className="col">
                  <Disciplines skills={toc.skills} isFullWidth={true} />
                </div>
              )
            }
          </div>
          <Cards props={toc.cards} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
