import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const { data, isLoading } = useQuery('doctors', () =>
    axios.get('http://localhost:5000/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Avatart</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((doctor, index) => (
            <DoctorRow key={doctor._id} sl={index + 1} {...doctor} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
