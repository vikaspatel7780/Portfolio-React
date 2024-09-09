import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <SocialLinks /> */}
      <About />
      <Projects />
      <Skills />
      <Coding />
      <Education />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
