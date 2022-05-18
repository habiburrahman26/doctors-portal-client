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
import Users from './components/pages/Dashboard/Users';
import RequireAdmin from './components/pages/Shared/RequireAdmin';
import AddDoctor from './components/pages/Dashboard/AddDoctor';
import { ReactQueryDevtools } from 'react-query/devtools';

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
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyAppoinment />} />
            <Route path="review" element={<Review />} />
            <Route
              path="users"
              element={
                <RequireAdmin>
                  <Users />
                </RequireAdmin>
              }
            />
            <Route
              path="addDoctor"
              element={
                <RequireAdmin>
                  <AddDoctor />
                </RequireAdmin>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
