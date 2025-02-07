import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar /> {/* ✅ Navbar is always present */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer /> {/* ✅ Footer remains persistent */}
    </div>
  );
};

export default App;
