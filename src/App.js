
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/footer';
import About from './components/About';


function App() {
 
  return (
    <div className="App">
    
      <Navbar/>
      <Home/>
      
      <About/>


      <Footer/>
    </div>
  );
}

export default App;
