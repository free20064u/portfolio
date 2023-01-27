import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
