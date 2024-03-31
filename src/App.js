import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Home from './screens/Home'; // Your Home component
import Projects from './screens/Projects'
import Games from './screens/Games'
import './App.css'

function App() {
  return (
    <div className='tileable-background'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/games" element={<Games/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
