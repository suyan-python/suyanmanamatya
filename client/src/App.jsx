import { Routes, Route } from "react-router-dom";
import Navbar from "./components/constant/Navbar";
import Footer from "./components/constant/Footer";

import Home from "./pages/Home";
import About from "./components/about/About";
import ProjectPage from "./pages/ProjectPage";

function App()
{
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;