import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
