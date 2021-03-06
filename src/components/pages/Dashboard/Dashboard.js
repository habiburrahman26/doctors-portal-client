import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center -mt-20">
        <h1 className="text-2xl font-bold text-purple-400 mb-8">
          Welcome to dashboard
        </h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          <li>
            <Link to="/dashboard">My Appoinment</Link>
          </li>
          <li>
            <Link to="review">Review</Link>
          </li>
          {admin && (
           <>
            <li>
              <Link to="users">All Users</Link>
            </li>
            <li>
              <Link to="addDoctor">Add new doctor</Link>
            </li>
            <li>
              <Link to="manageDoctor">Manage Doctor</Link>
            </li>
           </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
