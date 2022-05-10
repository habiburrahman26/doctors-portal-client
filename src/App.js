import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Navbar from './components/pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
