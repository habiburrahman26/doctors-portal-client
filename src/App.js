import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import AppoinmentPage from './components/pages/Appoinment/AppoinmentPage';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Resistration/Registration';
import Navbar from './components/pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appoinemnt" element={<AppoinmentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
