import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Home from './screens/Home'; // Your Home component
import Portfolio from './screens/Portfolio'
import WebDev from './screens/WebDev'
import Games from './screens/Games'
import './App.css'

function App() {
  return (
    <div className='tileable-background'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/games" element={<Games/>}/>
        <Route path="/webdev" element={<WebDev/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
