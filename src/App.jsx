import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Trainings from "./components/Trainings";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Trainings />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
