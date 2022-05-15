import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';
import UserRow from './UserRow';

const fetchUsers = () => {
  return axios.get('http://localhost:5000/users', {
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
};

const Users = () => {
  const { data, isLoading,refetch } = useQuery('all-users', fetchUsers);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user, index) => (
              <UserRow
                key={user._id}
                rowNumber={index + 1}
                email={user.email}
                role={user.role}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
