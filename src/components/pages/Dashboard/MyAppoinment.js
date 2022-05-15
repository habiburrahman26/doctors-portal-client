import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyAppoinment = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { data, isLoading, isError, error } = useQuery(
    ['booking', user],
    () => {
      if (user) {
        return axios.get(
          `http://localhost:5000/booking?patient=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
      }
    }
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    const status = error.response.status;
    if (status === 401) {
      navigate('/home', { replace: true });
    }

    if (status === 403) {
      signOut(auth);
      localStorage.removeItem('accessToken');
      navigate('/login', { replace: true });
    }
  }

  return (
    <div>
      {data?.data.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((b, index) => (
                <tr key={b._id}>
                  <td>{index + 1}</td>
                  <td>{b.treatment}</td>
                  <td>{b.date}</td>
                  <td>{b.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-2xl font-semibold">No Booking yet!</p>
      )}
    </div>
  );
};

export default MyAppoinment;
