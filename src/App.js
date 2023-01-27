import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Homepage from './pages/homepage/Homepage';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
