import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact_me from "./components/contact_me";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <About />
      <Skills />
      <Projects/>
      <Contact_me/>
      <Footer />
    </div>
  );
}

export default App;
