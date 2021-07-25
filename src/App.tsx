import './App.css';
import toc from "./toc.json";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Cards from "./components/Cards"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Banner title={toc.title} subtitle={toc.subtitle} />
      <Skills props={toc.skills} />
      <Cards props={toc.cards} />
      <Footer />
    </>
  );
}

export default App;
