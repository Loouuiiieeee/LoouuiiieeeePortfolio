import { Toaster } from "sileo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Trainings from "./components/Trainings";
function App() {
  return (
    <>
      <div>
        <Toaster />
        <Navbar />
        <Hero />
        <About />
        <Trainings />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
