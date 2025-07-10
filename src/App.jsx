import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import SkillPage from "./pages/SkillPage"
import ContactPage from "./pages/ContactPage";
import CertificatePage from "./pages/CertificatePage"; // NEW IMPORT

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <CertificatePage /> 
      <ContactPage />
      <Footer />
    </div>
  )
}

export default App;