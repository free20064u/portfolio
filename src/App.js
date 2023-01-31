import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Homepage from './pages/homepage/Homepage';
import Services from './pages/services/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/services' element={<Services/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
    
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
