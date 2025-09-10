import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Research from "./components/Research/Research";
import ResearchDetails from "./components/Research/ResearchDetails";

const App = () => {
  // 🔑 Track selected mode and whether content is visible
  const [mode, setMode] = useState("default");
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <Navbar mode={mode} /> {/* ✅ Navbar is always present */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Banner gets both setters */}
              <Banner mode={mode} setMode={setMode} setShowContent={setShowContent} />

              {/* Show sections only if user clicked a button */}
              {showContent && (
                <>
                  <AboutMe mode={mode} />
                  <Skills mode={mode} />
                  {mode === "developer" ? <Projects /> : <Research />}
                  <Contact />
                </>
              )}
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/research/:id" element={<ResearchDetails />} />
      </Routes>
      <Footer /> {/* ✅ Footer remains persistent */}
    </div>
  );
};

export default App;
