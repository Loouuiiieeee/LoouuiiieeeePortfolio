import About from "./components/About";
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
      </div>
    </>
  );
}

export default App;
