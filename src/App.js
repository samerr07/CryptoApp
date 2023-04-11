import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import CoinsDetails from './components/CoinsDetails';
import Service from './components/Service';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exchanges' element={<Exchanges/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path='/coins/:id' element={<CoinsDetails/>} />
        <Route path='/services' element={<Service/>} />


      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
