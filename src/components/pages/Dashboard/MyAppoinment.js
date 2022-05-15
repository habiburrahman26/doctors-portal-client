import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyAppoinment = () => {
  const [user] = useAuthState(auth);
  const { data, isLoading, isError, error } = useQuery(
    ['booking', user],
    () => {
      if (user) {
        return axios.get(
          `http://localhost:5000/booking?patient=${user?.email}`
        );
      }
    }
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  return <div>MyAppoinment :{data?.data.length}</div>;
};

export default MyAppoinment;
