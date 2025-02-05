import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
