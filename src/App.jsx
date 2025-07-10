import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/Footer";
import SkillPage from "./pages/SkillPage"
import ContactPage from "./pages/ContactPage"; // Import the new ContactPage

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ProjectPage />
      <ContactPage /> {/* Add the ContactPage component */}
      <Footer />
    </div>
  )
}

export default App;