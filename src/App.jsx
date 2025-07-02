import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </div>
  )
}

export default App;