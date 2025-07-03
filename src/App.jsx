import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import SkillPage from "./pages/SkillPage"

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <Footer />
    </div>
  )
}

export default App;