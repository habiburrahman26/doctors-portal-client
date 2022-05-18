import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const ManageDoctors = () => {
  const { data,isLoading } = useQuery('doctors', () =>
    axios.get('http://localhost:5000/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  );

  if(isLoading){
      return <LoadingSpinner/>
  }

  return <div>ManageDoctors {data?.data?.length}</div>;
};

export default ManageDoctors;
