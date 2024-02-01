
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/footer';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/projects';
import ContactMeSection from './Components/Contact_me';



function App() {


  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <ContactMeSection/>

     <Footer/>
    </div>
  )
}

export default App
