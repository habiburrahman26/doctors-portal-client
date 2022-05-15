import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About/About';
import AppoinmentPage from './components/pages/Appoinment/AppoinmentPage';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Resistration/Registration';
import Navbar from './components/pages/Shared/Navbar';
import RequireAuth from './components/pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyAppoinment from './components/pages/Dashboard/MyAppoinment';
import Review from './components/pages/Dashboard/Review';
import { QueryClientProvider, QueryClient } from 'react-query';

const client = new QueryClient();

function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/appoinemnt"
            element={
              <RequireAuth>
                <AppoinmentPage />
              </RequireAuth>
            }
          />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MyAppoinment />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
