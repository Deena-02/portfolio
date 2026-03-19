import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Certificates } from "./components/Certificates/Certificates";
import "./vars.css";

function App() {
  
  return (
    <>
      {/* ✅ ONLY ONE NAVBAR */}
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
}

export default App;